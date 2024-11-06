'use client'

import { ToolService } from "@/lib/services";
import type { CardColorType, YearType } from "@/lib/types";
import { YEAR_VALUES } from "@/lib/utils/enums";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from 'framer-motion';
import { itemVariantsBounceInUp } from "@/lib/motion";


const CardColorCard = ({
    data,
    isActive,
}: { data: CardColorType, isActive: boolean }) => {

    return <div
        className={`max-w-14 min-w-14 flex flex-col items-center justify-start border-2 border-yellow-500 border-opacity-0 ${isActive ? 'border-opacity-100' : ''}`}
    >
        <Image src={data.background_img_url_l} className="w-12 aspect-[0.7]" alt={''} width={0} height={0}
            loading={"eager"} placeholder="blur"
            blurDataURL="data:image/jpeg;base64,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"
            quality={2} />
    </div>
}

interface CardListPropType{
    startSpinning: boolean; 
    stopSpinning: boolean;
    onStopSpinning: () => void
}

export default function CardList({startSpinning, stopSpinning, onStopSpinning}: CardListPropType) {

    const [loading, setLoading] = useState(false);
    const [listData, setListData] = useState<CardColorType[] | null>(null);
    const [listShowData, setListShowData] = useState<CardColorType[] | null>(null);
    const year = YEAR_VALUES['24'];

    useEffect(() => {
        void fetchData(year);
    }, [year])

    useEffect(() => {
        if (listData !== null) {
            const newList = listData.filter((item: CardColorType) =>
                item.futlabel?.toLowerCase().includes('')
            );
            setListShowData(newList);
        }
    }, [listData]);


    const fetchData = async (year: YearType) => {
        try {
            setLoading(true)
            setListData(null);
            const res: CardColorType[] | null = await ToolService.fetchCardColors({ version: parseInt(year) })
            setListData(res)
        } catch (e) {
            console.log(e)
        } finally {
            setLoading(false);
        }
    }


    return <div className="flex flex-wrap w-4/5 py-4">
        {listShowData?.map((data: CardColorType, index:number) => (
            <motion.div
            initial = "hidden"
            animate = "visible"
            variants={itemVariantsBounceInUp(0.02 * index, 0.8)}
            key = {data.id}
            >
                <CardColorCard
                    key={data.id}
                    data={data}
                    isActive={false}
                />
            </motion.div>
        ))}
    </div>
}