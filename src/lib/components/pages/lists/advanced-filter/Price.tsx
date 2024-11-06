'use client'

import {useState} from "react";
import {RangeSlider, RangeSliderFilledTrack, RangeSliderThumb, RangeSliderTrack} from "@chakra-ui/react";
import data from '@/lib/data/mockdata.json';
import type {PriceOption} from "@/lib/types";

const priceRanges = data?.advancedFilter?.price?.priceRanges as PriceOption[];
const min:number = data?.advancedFilter?.price?.min;
const max:number = data?.advancedFilter?.price?.max;
const step:number = data?.advancedFilter?.price?.step;

const convertUnit = (num: number): string => {
    if (num >= 0 && num < 1000) {
        return num.toString();
    } else if (num >= 1000 && num < 100000) {
        const newNumber: number = Math.floor(num / 1000);
        return newNumber + 'K';
    } else if (num >= 100000) {
        const newNumber: number = Math.floor(num / 100000);
        return newNumber + 'M';
    }
    return ''
};


export default function Price() {

    const [range, setRange] = useState<number[]>([min, 5000])

    return <div className="flex flex-col h-full">
        <div className="text-page-subtitle pb-2">Price</div>
        <div className="flex flex-col py-2">
            <div className="flex items-center py-1 gap-2">
                <div>{convertUnit(range[0]!)}</div>
                <span>~</span>
                <div>{convertUnit(range[1]!)}</div>
            </div>
            <RangeSlider
                min={min}
                max={max}
                step={step}
                defaultValue={range}
                onChange={(value:number[]) => setRange(value)}>
                <RangeSliderTrack>
                    <RangeSliderFilledTrack/>
                </RangeSliderTrack>
                <RangeSliderThumb index={0}/>
                <RangeSliderThumb index={1}/>
            </RangeSlider>

            <div className="flex flex-col py-4">
                {priceRanges.map(({id, title}: PriceOption) => (
                    <div key={id}
                         className="p-2 bg-black bg-opacity-0 hover:bg-opacity-5 transition-all duration-200 cursor-pointer">
                        {title}
                    </div>
                ))}
            </div>
        </div>
    </div>
}