import type {PayloadAction} from "@reduxjs/toolkit";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import type {ListSlice, PlayerListType, PlayerPageDataType} from "@/lib/types";
import {LIST_PAGE_ENDPOINT} from "@/lib/utils/enums";
import {ListService} from "@/lib/services";
import {getPageColor} from "@/lib/utils";

const initialState: ListSlice = {
    loading: false,
    activeList: [],
    activeListPageNation: {
        total: 933,
        currentPage: 1,
        lastPage: 1,
        perPage: 25,
    },
    activeListViewPageType: 'Card',
    etc: {
        totyNominees: [],
    }
}

interface FetchTotyNominessUserDataType {
    year: number,
    page: number
}

export const fetchTotyNominess = createAsyncThunk<PlayerPageDataType | string, FetchTotyNominessUserDataType>('list/toty-nominess', async (userData, {rejectWithValue}) => {
    try {
        const {year, page} = userData;
        const res: PlayerPageDataType = await ListService.fetchListPlayers({
            color: LIST_PAGE_ENDPOINT.TOTY_NOMINEES,
            year,
            page
        })
        return res;
    } catch (error) {
        console.log('Fetch players data failed.', error)
        return rejectWithValue('Failed');
    }
})


interface FetchPagePlayersUserDataPropType { route: string | string[] | undefined, year?: number, page?: number }
export const fetchPagePlayers = createAsyncThunk<PlayerPageDataType | string, FetchPagePlayersUserDataPropType >('list/page-players', async (userData, {rejectWithValue}) => {
    try {
        const {route, year, page} = userData;

        let params: { color?: string, year?: number, page?: number } = {};

        if (route) {
            let routeParam: string;

            if (Array.isArray(route)) {
                routeParam = route[0]!
            } else {
                routeParam = route;
            }

            const color: string = getPageColor(routeParam)
            params = {...params, color};
        }

        if (year) {
            params = {...params, year};
        }


        if (page) {
            params = {...params, page}
        }

        if (route === 'power-players') {
            const res: PlayerPageDataType = await ListService.fetchPowerPlayers({...params, year})
            return res;
        }


        const res: PlayerPageDataType = await ListService.fetchListPlayers(params)
        // console.log('☮', res)
        return res;
    } catch (error) {
        console.log('Fetch players data failed.', error)
        return rejectWithValue('Failed');
    }
})

const listSlice = createSlice({
    name: 'listSlice',
    initialState,
    reducers: {
        changeActiveListViewPageType(state, action: PayloadAction<PlayerListType>) {
            state.activeListViewPageType = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTotyNominess.pending, () => {
            console.log('extra reducer is in process')
        }),
        builder.addCase(fetchTotyNominess.fulfilled, (state: ListSlice, {payload}) => {
            if (typeof payload !== 'string') {
                state.etc.totyNominees = payload?.data;
            }
        }),
        builder.addCase(fetchTotyNominess.rejected, (state: ListSlice, {payload}) => {
            console.log('extra reducer is in process', payload)
        }),

        builder.addCase(fetchPagePlayers.pending, (state: ListSlice) => {
            console.log('extra reducer is in process')
            state.loading = true;
        }),
        builder.addCase(fetchPagePlayers.fulfilled, (state: ListSlice, {payload}) => {
            if(typeof payload !== 'string'){
                state.activeList = payload?.data;
                state.activeListPageNation.currentPage = payload?.current_page;
                state.activeListPageNation.lastPage = payload?.last_page;
                state.activeListPageNation.perPage = payload?.per_page;
                state.activeListPageNation.total = payload?.total;
            }
            state.loading = false;
        }),
        builder.addCase(fetchPagePlayers.rejected, (state, {payload}) => {
            console.log('extra reducer is in process', payload)
            state.loading = false;
        })
    }
})

export const {changeActiveListViewPageType} = listSlice.actions;
export default listSlice.reducer;