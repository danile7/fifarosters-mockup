'use client'

import {useState} from "react";
import {RangeSlider, RangeSliderFilledTrack, RangeSliderThumb, RangeSliderTrack} from "@chakra-ui/react";

export default function Price() {

    const min = 0;
    const max = 100;
    const step = 1;
    const [range, setRange] = useState<number[]>([min, 20])

    return <div className="flex flex-col h-full">
        <div className="text-page-subtitle pb-2">Rating</div>
        <div className="flex flex-col py-2">
            <div className="flex items-center py-1 gap-2">
                <div>{range[0]}</div>
                <span>~</span>
                <div>{range[1]}</div>
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
        </div>

    </div>
}