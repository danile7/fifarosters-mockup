'use client'

import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {getPositionType} from "@/lib/utils";
import PlayerList from "@/lib/components/core/PlayerList";
import {PLAYER_POSITION_TYPE} from "@/lib/utils/enums";
import type {FutCardPropDataTypes, ListSlice} from "@/lib/types";
import type {RootState} from "@/store";
import {useAppDispatch} from "@/store";
import {fetchPagePlayers, fetchTotyNominess} from "@/store/lists/listsSlice";
import {useParams, useSearchParams} from "next/navigation";
import AppPageLoading from "@/lib/components/core/AppPageLoading";

export default function TotyBody() {

    const dispatch = useAppDispatch();

    const data: ListSlice = useSelector((state: RootState) => state.list)
    const list: FutCardPropDataTypes[] | null = data.activeList;
    const enemyList: FutCardPropDataTypes[] | null = data.etc.totyNominees;

    let attackers: FutCardPropDataTypes[] | null = null;
    let modifiers: FutCardPropDataTypes[] | null = null;
    let defenders: FutCardPropDataTypes[] | null = null;
    let goalkeepers: FutCardPropDataTypes[] | null = null;


    const {route} = useParams();
    const searchParams = useSearchParams();
    const year: number = searchParams.get('v') ? parseInt(searchParams.get('v')!) : 24;
    const page: number = searchParams.get('page') ? parseInt(searchParams.get('page')!) : 1;
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        setLoading(true)
        void dispatch(fetchPagePlayers({route: 'toty', year, page}))
            .then(() => {
                void dispatch(fetchTotyNominess({year, page}))
            })
            .then(() => {
                setLoading(false)
            })
            .catch(err => {
                console.log(err)
                setLoading(false)
            })
    }, [dispatch])


    if (enemyList) {
        enemyList.map(item => {

            const type = getPositionType(item.prefpos1)

            if (type === PLAYER_POSITION_TYPE.ATTACKER) {
                if (attackers === null) {
                    attackers = [];
                }
                attackers?.push(item);
            } else if (type === PLAYER_POSITION_TYPE.MODIFIER) {
                if (modifiers === null) {
                    modifiers = [];
                }
                modifiers?.push(item);
            } else if (type === PLAYER_POSITION_TYPE.DEFENDER) {
                if (defenders === null) {
                    defenders = [];
                }
                defenders?.push(item);
            } else if (type === PLAYER_POSITION_TYPE.GOALKEEPER) {
                if (goalkeepers === null) {
                    goalkeepers = [];
                }
                goalkeepers?.push(item);
            }
        })
    }

    return <div className="flex flex-col py-4">

        {
            loading ? <AppPageLoading/> : (list ? <div className="flex flex-col py-4">
                <PlayerList list={list} year={year}/>

                <h1 className="text-page-title font-semibold py-3">TOTY Nominees</h1>
                <h3 className="text-page-subtitle leading-snug pt-4">Attackers</h3>
                <PlayerList list={attackers} year={year}/>

                <h3 className="text-page-subtitle leading-snug pt-4">Modifiers</h3>
                <PlayerList list={modifiers} year={year}/>

                <h3 className="text-page-subtitle leading-snug pt-4">Defenders</h3>
                <PlayerList list={defenders} year={year}/>

                <h3 className="text-page-subtitle leading-snug pt-4">GoalKeepers</h3>
                <PlayerList list={goalkeepers} year={year}/>
            </div> : <></>)
        }


    </div>
}