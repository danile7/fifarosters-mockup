'use client'

import { useEffect, useState } from 'react';
import { Image } from '@chakra-ui/react'
import _ from 'lodash'
import ValueHighLighter from "@/lib/components/core/ValueHighlighter";
import type { FutStats, PositionalDataType, Preposition_Type } from '@/lib/types';
import { getPositionalRating, getRankedPosition } from '@/lib/utils';

const positions: Preposition_Type[] = ["LW", "ST", "RW", "CF", "CAM", "LM", "CM", "RM", "LWB", "CDM", "RWB", "LB", "CB", "RB", "GK"];

const Position = ({ className, labelClassName, valueClassName, label, value }: { className?: string, labelClassName?: string, valueClassName?: string, label: string, value: number }) => {

    const getBorderColor = (value: number): string => {
        if (value >= 90) return 'border-[#0b6700]';
        if (value >= 80) return 'border-[#379c37]';
        if (value >= 70) return 'border-[#eb5c00]';
        if (value >= 50) return 'border-[#b8160e]';
        return 'border-[#b8160e]';
    };

    return <div
        className={`${className} absolute flex items-center justify-center text-gray-700 border-2 border-opacity-0 hover:border-opacity-100 ${getBorderColor(value)}`}
    >
        <div className='flex justify-center items-center'>
            <div className={`${valueClassName} m-[4px]`}>
                <ValueHighLighter size='sm' value={value} />
            </div>
            <span className={`${labelClassName} font-semibold text-[11px] text-center w-[35px]`}>{label}</span>
        </div>
    </div>
}

export default function PositionalRatings({ data: rawData }: { data: FutStats | null }) {
    const [ratings, setRatings] = useState<Record<Preposition_Type, number>>(
        positions.reduce((acc, pos) => ({ ...acc, [pos]: 0 }), {} as Record<Preposition_Type, number>)
    );

    useEffect(() => {
        if (rawData) {
            const positionalRating: PositionalDataType[] = getPositionalRating(rawData);

            const updatedRatings = positions.reduce((acc: Record<Preposition_Type, number>, pos) => {
                const positionData = _.find(positionalRating, { position: getRankedPosition(pos) });
                acc[pos] = Math.round(positionData?.value ?? 0);
                return acc;
            }, {} as Record<Preposition_Type, number>);

            setRatings(updatedRatings);
        }
    }, [rawData]);

    return <div className={`flex flex-col`}>
        <div className="text-xl text-gray-800 mt-5 mb-2">Positional Ratings</div>
        <div className="flex mt-2 relative bg-blue-400 max-w-[266px]">
            <Image src="/assets/images/fifa-board.png" width="100%" alt='' />
            <div className="absolute w-full h-full ">
                <div className="relative w-full h-full">
                    <Position label='ST' value={ratings.ST} className='top-[7%] left-[31%] w-[39%] h-[12%]' />
                    <Position label='F' value={ratings.CF} className='top-[19%] left-[31%] w-[39%] h-[12%]' />
                    <Position label='CAM' value={ratings.CAM} className='top-[31%] left-[31%] w-[39%] h-[12%]' />
                    <Position label='CM' value={ratings.CM} className='top-[43%] left-[31%] w-[39%] h-[18%]' />
                    <Position label='CDM' value={ratings.CDM} className='top-[61%] left-[31%] w-[39%] h-[12%]' />
                    <Position label='CB' value={ratings.CB} className='top-[73%] left-[31%] w-[39%] h-[16%]' />
                    <Position label='GK' value={ratings.GK} className='top-[89%] left-[31%] w-[39%] h-[8%]' />
                    <Position label='LW' value={ratings.LW} valueClassName='!m-0' labelClassName='!w-[25px]' className='top-[7%] left-[7%] w-[24%] h-[30%]' />
                    <Position label='LM' value={ratings.LM} valueClassName='!m-0' labelClassName='!w-[25px]' className='top-[37%] left-[7%] w-[24%] h-[24%]' />
                    <Position label='LWB' value={ratings.LWB} valueClassName='!m-0' labelClassName='!w-[28px]' className='top-[61%] left-[7%] w-[24%] h-[12%]' />
                    <Position label='LB' value={ratings.LB} valueClassName='!m-0' labelClassName='!w-[25px]' className='top-[73%] left-[7%] w-[24%] h-[20%]' />
                    <Position label='RW' value={ratings.RW} valueClassName='!m-0' labelClassName='!w-[25px]' className='top-[7%] right-[7%] w-[24%] h-[30%]' />
                    <Position label='RM' value={ratings.RM} valueClassName='!m-0' labelClassName='!w-[25px]' className='top-[37%] right-[7%] w-[24%] h-[24%]' />
                    <Position label='RWB' value={ratings.RWB} valueClassName='!m-0' labelClassName='!w-[28px]' className='top-[61%] right-[7%] w-[24%] h-[12%]' />
                    <Position label='RB' value={ratings.RB} valueClassName='!m-0' labelClassName='!w-[25px]' className='top-[73%] right-[7%] w-[24%] h-[20%]' />
                </div>
            </div>
        </div>

    </div>
}

