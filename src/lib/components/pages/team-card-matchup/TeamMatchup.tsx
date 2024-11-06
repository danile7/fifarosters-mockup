'use client'

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from 'framer-motion'
import type { FutCardPropDataTypes, TeamMatchUpPropType } from "@/lib/types";
import { itemVariantsBounceInDown } from "@/lib/motion";
import FutCard from "@/lib/components/core/FutCard";
import { HomeService } from "@/lib/services";

export default function TeamMatchup({
    data,
    directionToRight = true
}: TeamMatchUpPropType) {

    const [team, setTeam] = useState<FutCardPropDataTypes[] | null>(null);

    const fetchTeamMembers = async () => {
        const res: FutCardPropDataTypes[] | null = await HomeService.fetchTopTeams()
        setTeam(res);
    }
    useEffect(() => {
        return () => {
            void fetchTeamMembers();
        }
    }, [data])

    const cardWidth = 135;

    return <div className="w-full flex-col min-h-[294px] max-h-[294px] relative overflow-hidden"
        style={{
            background: directionToRight ? 'linear-gradient(to right bottom, rgb(3, 57, 128), rgb(154, 0, 60))' : 'linear-gradient(to right bottom, rgb(255, 255, 255), rgb(220, 5, 45))',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}>

        <Image width={0} height={0}
            className="absolute -top-[25px] -right-[73px] opacity-20 w-[49%]"
            src={data.img}
            alt="team_logo" />

        <div className={`absolute w-full h-full left-0 flex ${directionToRight ? 'flex-col' : 'flex-col-reverse'} p-4`}>
            <div className="flex justify-center items-center flex-grow">
                <div className={`h-full bg-white bg-opacity-10 w-4/5 flex ${directionToRight ? 'flex-row' : 'flex-row-reverse'} justify-center items-center`}>
                    {team?.map((data: FutCardPropDataTypes, index: number) => (
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={itemVariantsBounceInDown(0.1 * index, 0.8)}
                            key={`top-team-${index}`}
                            style={{ margin: '0 -8px', zIndex: 2 - Math.abs(2 - index) }}
                        >
                            <FutCard
                                data={data}
                                width={cardWidth * (1.1 - Math.abs(index - 2.0) / 10 + (index === 2 ? 0.1 : 0))}
                                visibility={{ playstyles: true }}
                            // Use activeColor if applicable
                            />
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className={`font-bold text-white italic text-4xl flex ${directionToRight ? 'justify-start' : 'justify-end'}`}>
                {data.label}
            </div>
        </div>

    </div>
}