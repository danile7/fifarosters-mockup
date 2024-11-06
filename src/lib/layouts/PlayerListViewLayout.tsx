'use client'

import PlayerList from "@/lib/components/core/PlayerList";
import AppPagination from "@/lib/components/core/AppPagination";
import type { PlayerListViewLayoutPropType} from "@/lib/types";


export default function PlayerListViewLayout(props: PlayerListViewLayoutPropType) {
    
    const {
        list,
        type = 'Card',
        year,
        total,
        lastPage,
        currentPage,
        perPage,
        showPagination = true
    } = props;

    return <div className="flex flex-col py-4">
        {list && list.length !== 0 && showPagination && <AppPagination currentPage = {currentPage} lastPage={lastPage} perPage={perPage} total={total}/>}
        <PlayerList list={list} type={type} year = {year}/>
        {list && list.length !== 0 && showPagination && <AppPagination currentPage = {currentPage} lastPage={lastPage} perPage={perPage} total={total}/>}
    </div>
}