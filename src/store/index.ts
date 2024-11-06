import {configureStore} from '@reduxjs/toolkit';
import {useDispatch} from "react-redux";
import list from './lists/listsSlice'
import cardCreator from './tools/cardCreatorSlice'
import player from './player/playerSlice'
import home from './home/homeSlice'

export const makeStore = () =>{
    return configureStore({
        devTools : true,
        reducer : {
            home,
            list,
            cardCreator,
            player
        },
    })
}

export type AppStore = ReturnType<typeof makeStore>

export type RootState = ReturnType<AppStore['getState']>

export type AppDispatch = AppStore['dispatch']

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
