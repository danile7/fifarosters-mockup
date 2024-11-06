'use client'

import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {useParams, useSearchParams} from "next/navigation";
import {useAppDispatch} from "@/store";
import ListsLayout from "@/lib/layouts/ListsLayout";
import TotyBody from "@/lib/components/pages/lists/toty/TotyBody";
import PlayerListViewLayout from "@/lib/layouts/PlayerListViewLayout";
import type {ListComponentsType, ListSlice} from "@/lib/types";
import ListHeader from "@/lib/layouts/ListHeader";
import Link from "next/link";
import {fetchPagePlayers} from "@/store/lists/listsSlice";
import AppPageLoading from "@/lib/components/core/AppPageLoading";

const components: ListComponentsType = {
    'toty': {
        header: <ListHeader titleYear={24} titleCardType={"Team of the Year"}
                            yearSelector={{from: 16, to: 24, label: 'FIFA'}}/>,
        body: <TotyBody/>
    },
    'futmas': {
        header: <ListHeader titleYear={24} titleCardType={"Futmas"}
                            yearSelector={{from: 16, to: 24, label: 'FIFA'}}/>,
    },
    'power-players': {
        header: <ListHeader titleYear={24} titleCardType={"Power Players"}
                            yearSelector={{from: 16, to: 24, label: 'FIFA'}}
                            subtitle="Cards with 80+ on 5 FUT attributes."/>,
    },
    'rttf': {
        header: <ListHeader titleYear={24} titleCardType={"Road to the Final"}
                            yearSelector={{from: 16, to: 24, label: 'FIFA'}}/>,
        body: <div>Some content...</div>
    },
    'carniball': {
        header: <ListHeader titleYear={24} titleCardType={"Carniball"}
                            yearSelector={{from: 16, to: 24, label: 'FIFA'}}/>,
    },
    'prime-icon-moments': {
        header: <ListHeader titleYear={24} titleCardType={"Prime Icon Moments"}
                            yearSelector={{from: 16, to: 24, label: 'FIFA'}}/>,
    },
    'fut-future-stars': {
        header: <ListHeader titleYear={24} titleCardType={"FUT Future Stars"}
                            yearSelector={{from: 16, to: 24, label: 'FIFA'}}/>,
    },
    'legends': {
        header: <ListHeader titleYear={24} titleCardType={"FUT Icons / Legends"}
                            yearSelector={{from: 16, to: 19, label: 'FIFA'}}/>,
    },
    'festival-of-futball': {
        header: <ListHeader titleYear={18} titleCardType={"Festival of FUTball"}
                            yearSelector={{from: 16, to: 24, label: 'FIFA'}}/>,
    },
    'ptg-selected': {
        header: <ListHeader titleYear={18} titleCardType={"Path to Glory Selected"}
                            yearSelector={{from: 16, to: 24, label: 'FIFA'}}/>,
    },
    'tots': {
        // header: <TotsHeader />,
        header: <ListHeader titleYear={18} titleCardType={"Team of the Season | FIFA 24"}
                            yearSelector={{from: 16, to: 24, label: 'FIFA'}}/>,
    },
    'fut-birthday': {
        header: <ListHeader titleYear={24} titleCardType={"FUT Birthday Cards"}
                            yearSelector={{from: 17, to: 24, label: 'FIFA'}}
                            subtitle="These FUT stars from years past were released with all their former glory as the FUT Birthday special cards."/>,
    },
    'tott': {
        header: <ListHeader titleYear={24} titleCardType={"Team of the Tournaments"}
                            yearSelector={{from: 17, to: 18, label: 'FIFA'}}
                            subtitle="FIFA 24 TOTT list is a annual release that got new card styles in FIFA 17. These are the best performing players from the Champion's League and Europa League"/>,
    },
    'movember': {
        header: <ListHeader titleCardType={"Movember Cards"}
                            yearSelector={{from: 17, to: 18, label: 'FIFA'}}
                            extraContent={<div className="py-4 flex flex-col">
                                <div className="p-4 rounded-md border border-blue-200 bg-blue-info-bg flex flex-col">
                                    <div className="text-blue-info">
                                        {`Movember are a new type of FUT card from EA Sports in FIFA 17. These were released on November 1 and
                    will be available in packs the entire month of November. Movember is an initiative to promote men's
                    health awareness.`}
                                    </div>

                                    <div className="pt-4">
                                        <Link className="text-blue-500 hover:underline" href="/create-card">Make your
                                            own Movember card in
                                            our FIFA 17 Card Creator</Link>
                                    </div>
                                </div>
                            </div>}/>,
    },
    'onestowatch': {
        header: <ListHeader titleCardType={"Ones to Watch"}
                            yearSelector={{from: 17, to: 18, label: 'FIFA'}}/>,
    },
    'futties': {
        header: <ListHeader titleYear={24} titleCardType={"Futties"}
                            yearSelector={{from: 16, to: 18, label: 'FIFA'}}/>,
    },
    'imotm': {
        header: <ListHeader titleYear={17} titleCardType={"Int'l Man of the Match"}
                            yearSelector={{from: 17, to: 18, label: 'FIFA'}}
                            extraContent={<div className="flex pb-4">
                                <Link className="text-blue-500 hover:underline" href="">
                                    FIFA 16 iMOTM List
                                </Link>
                            </div>}/>,
    },
    'totw': {
        header: <ListHeader titleYear={24} titleCardType={"Team of the Week"}
                            yearSelector={{from: 16, to: 18, label: 'FIFA'}}/>
    },
    'special-cards': {
        header: <ListHeader titleYear={17} titleCardType={"Special Cards"}
                            yearSelector={{from: 16, to: 17, label: 'FIFA'}}/>
    },
    'playerslist': {
        header: <ListHeader titleYear={20} titleCardType={"Career Mode Players List\n"}
                            yearSelector={{from: 17, to: 18, label: 'FIFA'}}
                            extraContent={
                                <div className="flex pb-4">
                                    <Link className="text-blue-500 hover:underline" href="">
                                        FUT Players List
                                    </Link>
                                </div>}/>
    },
    'men-of-midas': {
        header: <ListHeader titleYear={24} titleCardType={"Men of Midas"}
                            yearSelector={{from: 16, to: 18, label: 'FIFA'}}
                            subtitle="Men of Midas are the most versatile players in the game. Period. Each of these players is rated at least a 75 at every field position."
                            extraContent={<div className="flex flex-col">
                                <div className="flex items-center py-2">
                                    <Link href="" className="text-blue-500 hover:underline">Gullit Gang</Link>
                                    <span>(80+ o all FUT stats)</span>
                                </div>

                                <div className="">The list below is sorted by average rating across all field
                                    positions.
                                </div>
                            </div>}
        />
    },
    'knights-of-nainggolan': {
        header: <ListHeader titleYear={24} titleCardType={"Knights of Nainggolan"}
                            yearSelector={{from: 16, to: 18, label: 'FIFA'}}
                            subtitle="Knights of Nainggolan (previously called The Gullit Gang) is a prestigious list of players that have 80+ for all their FUT attributes."
                            extraContent={<div className="flex flex-col">
                                <div className="flex items-center py-2">
                                    <Link href="" className="text-blue-500 hover:underline">Men of Midas</Link>
                                    <span>(75+ at every <span className="underline">position</span>)</span>
                                </div>

                                <div className="">
                                    {`Renamed "Knights of Nainggolan" in honor of Radja Nainggolan and his amazingly high
                                    across-the-board stats`}
                                </div>

                                <div className="">
                                    The list is sorted by lowest attribute, then sum of all attributes. Will be updated
                                    as new cards are released.
                                </div>
                            </div>}
        />
    },
    'silver-stars': {
        header: <ListHeader titleYear={24} titleCardType={"Silver Stars"}
                            yearSelector={{from: 16, to: 18, label: 'FIFA'}}
                            subtitle="Silver Stars are non-gold cards that have 70+ for all their FUT attributes."
                            extraContent={<div className="flex flex-col">
                                <div className="">
                                    A complimentary list to <Link href="" className="text-blue-500 hover:underline">Gullit
                                    Gang</Link> for golds.
                                </div>

                                <div className="">
                                    The list is sorted by lowest attribute, then sum of all attributes. Will be updated
                                    as new cards are released.
                                </div>
                            </div>}
        />
    },
    'career-mode-gems': {
        header: <ListHeader titleYear={24} titleCardType={"Career Mode Gems"}
                            yearSelector={{from: 16, to: 18, label: 'FIFA'}}
                            subtitle="Career Mode Gems are players 21 and under with potential of at least 85"
                            extraContent={<div className="flex flex-col py-2">
                                <div className="flex items-center gap-1">
                                    <Link href="" className="text-blue-500 hover:underline">FIFA 16 Career Mode
                                        Gems</Link>
                                    <span>|</span>
                                    <Link href="" className="text-blue-500 hover:underline">FIFA 16 Top Growth
                                        Potential</Link>
                                </div>

                                <div>EA provided the original list shortly before FIFA release date.</div>
                            </div>}
        />
    },
    'world-cup': {
        header: <ListHeader titleYear={24} titleCardType={"World Cup"}
                            yearSelector={{from: 17, to: 18, label: 'FIFA'}}/>
    }

}

export default function Lists() {
    const {route} = useParams();
    const searchParams = useSearchParams();
    const year: number = searchParams.get('v') ? parseInt(searchParams.get('v')!) : 24;
    const page: number = searchParams.get('page') ? parseInt(searchParams.get('page')!) : 1;
    const [loading, setLoading] = useState<boolean>(true);

    const dispatch = useAppDispatch();

    const {
        activeList,
        activeListPageNation,
        activeListViewPageType
    } = useSelector(({list}: { list: ListSlice }) => list);

    useEffect(() => {
        if (!getProperty(components, route as keyof typeof components)?.body) {
            setLoading(true)
            dispatch(fetchPagePlayers({route, year, page}))
                .then(() => {
                    console.log('fetch success')
                    setLoading(false)
                })
                .catch(err => {
                    console.log('error!', err)
                    setLoading(false)
                })
        }
    }, [dispatch, route, year, page])

    function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
        return obj[key]
    }

    return <ListsLayout header={getProperty(components, route as keyof typeof components)?.header}
                        body={
                            getProperty(components, route as keyof typeof components)?.body ?
                                getProperty(components, route as keyof typeof components)?.body :
                                !loading ?
                                    (<PlayerListViewLayout
                                        list={activeList}
                                        {...activeListPageNation}
                                        type={activeListViewPageType}
                                        year={year}
                                    />)
                                    : <AppPageLoading/>
                        }
    />
}



























