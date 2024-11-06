import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import type {PayloadAction } from '@reduxjs/toolkit'
import type {CardColorType, FutCardPropDataTypes, HomeSlice} from "@/lib/types";
import {HomeService, ToolService} from "@/lib/services";

const initialState: HomeSlice = {
    loading: false,
    topTeams: null,
    samplePlayer: null,
    cardColors: null
}

export const fetchTopTeam = createAsyncThunk<FutCardPropDataTypes[] | null, void, { rejectValue:string }>('home/top-team', async (userData, {rejectWithValue}) => {
    try {
        const res: FutCardPropDataTypes[] | null = await HomeService.fetchTopTeams()
        // console.log('😋😋😋', res)
        return res;
    } catch (error) {
        console.log('Fetch top team data failed.', error)
        return rejectWithValue('Failed');
    }
})

export const fetchSampleCardColors = createAsyncThunk<CardColorType[] | null>('home/sample-card-colors', async (_, {rejectWithValue}) => {
    try {
        const res: CardColorType[] | null = await ToolService.fetchCardColors({version: 24});
        return res;
    }
    catch(error){
        console.log('Fetch Sample Card colors failed', error)
        return rejectWithValue('Failed')
    }
})

export const fetchSamplePlayer = createAsyncThunk<FutCardPropDataTypes | null, void, {rejectValue:string}>('home/sample-player', async (userData, {rejectWithValue}) => {
    try {
        const res: FutCardPropDataTypes | null = await HomeService.fetchExamplePlayer()
        // console.log('☮', res)
        return res;
    } catch (error) {
        console.log('Fetch top team data failed.', error)
        return rejectWithValue('Failed');
    }
})


const homeSlice = createSlice({
    name: 'homeSlice',
    initialState,
    reducers: {
        setLoading: (state, action:PayloadAction<boolean>) => {
            state.loading = action.payload;  // When loading starts
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTopTeam.pending, (state) => {
            console.log('extra reducer is in process');
        });
        builder.addCase(fetchTopTeam.fulfilled, (state, action: PayloadAction<FutCardPropDataTypes[] | null>) => {
            state.topTeams = action.payload;
        });
        builder.addCase(fetchTopTeam.rejected, (state, action) => {
            console.log('extra reducer is in process', action.payload);
        });
        builder.addCase(fetchSamplePlayer.pending, (state) => {
            console.log('extra reducer is in process');
        });
        builder.addCase(fetchSamplePlayer.fulfilled, (state, action: PayloadAction<FutCardPropDataTypes | null>) => {
            state.samplePlayer = action.payload;
        });
        builder.addCase(fetchSamplePlayer.rejected, (state, action) => {
            console.log('extra reducer is in process', action.payload);
        });
        builder.addCase(fetchSampleCardColors.pending, (state) =>{
            console.log('fetch sample colors...')
        });
        builder.addCase(fetchSampleCardColors.fulfilled, (state, action: PayloadAction<CardColorType[] | null>) => {
            state.cardColors = action.payload;
        })
        builder.addCase(fetchSampleCardColors.rejected, (state) =>{
            console.log('fetch sample colors failed')
        });

    },
})

export default homeSlice.reducer;