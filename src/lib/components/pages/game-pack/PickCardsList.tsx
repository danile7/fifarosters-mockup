'use client'

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@chakra-ui/react";
import PlayerListViewLayout from "@/lib/layouts/PlayerListViewLayout";
import ListsLayout from "@/lib/layouts/ListsLayout";
import type { FutCardPropDataTypes, PageNationType, YearType } from "@/lib/types";
import { itemVariantsFadeIn } from "@/lib/motion";
import PlayerPackPageAnimation from "@/lib/components/pages/game-pack/PlayerPackPageAnimation";
import { capitalizeFirstLetters } from "@/lib/utils";
import { PackService } from "@/lib/services";
import { examplePlayerData } from "@/lib/utils/data";

export default function PickCardsList({ year, packtype }: { year: YearType, packtype: string }) {

    const [list, setList] = useState<FutCardPropDataTypes[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true)
    const [average, setAverage] = useState<number>(0);
    const [sum, setSum] = useState<number>(0);
    const [sampleData, setSampleData] = useState<FutCardPropDataTypes | null>(null)
    const activeListPageNation: PageNationType = { total: 100, currentPage: 1, lastPage: 10, perPage: 25 }
    const activeListViewPageType = "Card"

    const fetchList = async () => {
        const data: FutCardPropDataTypes[] | null = await PackService.fetchPackCardList({ year: year.toString() as YearType });
        setList(data);
        setSampleData(data?.[0] ?? JSON.parse(JSON.stringify(examplePlayerData)) as FutCardPropDataTypes);
    }

    const refresh = async () => {
        setLoading(true);
        await fetchList();
    }

    useEffect(() => {
        if (loading) {
            setTimeout(() => {
                setLoading(false);
            }, 8000)
        }
    }, [loading])

    useEffect(() => {
        void fetchList();
    }, [])

    useEffect(() => {
        if (list) {
            const sumValue = list.reduce((accumulator, currentItem) => {
                return accumulator + currentItem.overallrating;
            }, 0);

            const averageValue = sum / list.length;
            setSum(sumValue)
            setAverage(averageValue);
        }
    }, [list])

    return <ListsLayout
        header={<div className="flex flex-col gap-4">
            <div className='text-page-title font-semibold'>{capitalizeFirstLetters(packtype)} Players Pack</div>
            <div className="flex justify-end">
                <div className="flex gap-2 justify-center items-center p-4 border border-teal-500">
                    <div>Average Rating:&nbsp;</div>
                    <div className="font-bold">{average}</div>
                </div>

                <div className="flex gap-2 justify-center items-center p-4 bg-teal-500 border border-teal-500 text-white">
                    <div>Pack Score:&nbsp;</div>
                    <div className="font-bold">{sum}</div>
                </div>
            </div>
            <div className='flex gap-2'>
                <Link href={`/games/pack/data?v=${year}`}>
                    <Button variant="outline">Back</Button>
                </Link>
                <Button variant="solid" colorScheme="green" onClick={async () => await refresh()}>Try Again</Button>
            </div>
        </div>}

        body={
            !loading ? (<PlayerListViewLayout
                list={list ?? []}
                {...activeListPageNation}
                type={activeListViewPageType}
                year={parseInt(year)}
                showPagination={false}
            />) : (
                <div className="fixed w-screen h-screen left-0 top-0">
                    <motion.div
                        initial="hidden"
                        animate={"visible"}
                        variants={itemVariantsFadeIn(0.1, 0.5)}
                        className="w-full h-full"
                    >
                        <PlayerPackPageAnimation year={year} data={sampleData}
                            onClick={() => setLoading(false)} />
                    </motion.div>
                </div>
            )
        }
    />
}