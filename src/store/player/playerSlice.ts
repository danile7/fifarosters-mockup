import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit";
import {PlayerService, HomeService} from "@/lib/services";
import type {CardGenerationType, FutCardPropDataTypes, playerSlice} from "@/lib/types";

const initialState: playerSlice = {
    loading: false,
    playerData: null,
    similarCards: null,
    generation: null
}

export const fetchGenerationData = createAsyncThunk<Record<string, CardGenerationType[]> | null, { playerId: string | null;}, { rejectValue: string }>(
    "player/fetch-generation",
    async (userData, { rejectWithValue }) => {
        try {
            const res: Record<string, CardGenerationType[]> | null = await PlayerService.fetchGenerationByPlayerId(userData);
            return res;
        } catch (error) {
            console.log("Fetch generation data failed.", error);
            return rejectWithValue("Failed");
        }
    }
);

export const fetchPlayerData = createAsyncThunk<FutCardPropDataTypes | null, { playerId: string | null; futId: string | null; year: number }, { rejectValue: string }>(
    "player/example-player",
    async (userData, { rejectWithValue }) => {
        try {
            const res: FutCardPropDataTypes| null = await PlayerService.fetchPlayerById(userData);
            if(res === null || res && Object.keys(res).length === 0){
                const newRes:FutCardPropDataTypes = await HomeService.fetchExamplePlayer();
                return newRes;
            }
            return res;
        } catch (error) {
            console.log("Fetch player data failed.", error);
            return rejectWithValue("Failed");
        }
    }
);

export const fetchSimilar = createAsyncThunk<FutCardPropDataTypes[] | null, { playerId: string; futId: string; year: number }, { rejectValue: string }>(
    "player/similiar-cards",
    async (userData, { rejectWithValue }) => {
        try {
            const res: FutCardPropDataTypes[] | null = await PlayerService.fetchSimiliarCards();
            return res;
        } catch (error) {
            console.log("Fetch similar cards failed.", error);
            return rejectWithValue("Failed");
        }
    }
);

const playerSlice = createSlice({
    name: "playerSlice",
    initialState,
    reducers: {
        setLoading: (state, action:PayloadAction<boolean>) => {
            state.loading = action.payload;  // When loading starts
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPlayerData.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchPlayerData.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.playerData = payload;
            })
            .addCase(fetchPlayerData.rejected, (state, { payload }) => {
                state.loading = false;
                console.log("Fetch player data rejected", payload);
            })
            .addCase(fetchSimilar.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchSimilar.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.similarCards = payload ?? [];
            })
            .addCase(fetchSimilar.rejected, (state, { payload }) => {
                state.loading = false;
                console.log("Fetch similar cards rejected", payload);
            })
            .addCase(fetchGenerationData.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchGenerationData.fulfilled, (state, {payload}) => {
                state.loading = false;
                state.generation  = payload;
            })
            .addCase(fetchGenerationData.rejected, (state, {payload}) => {
                state.loading = false;
                console.log('Fetch generation data rejected', payload)
            })
    },
});

export default playerSlice.reducer;