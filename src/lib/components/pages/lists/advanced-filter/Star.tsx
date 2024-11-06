'use client'

import {useState} from "react";
import {RangeSlider, RangeSliderFilledTrack, RangeSliderThumb, RangeSliderTrack} from "@chakra-ui/react";
import data from '@/lib/data/mockdata.json'

const min:number = data?.advancedFilter?.star.min;
const max:number = data?.advancedFilter?.star.max;

export default function Star() {

    const [pace, setPace] = useState<[number, number]>([min, 30])
    const [acceleration, setAcceleration] = useState<[number, number]>([min, 30])
    const [sprintSpeed, setSprintSpeed] = useState<[number, number]>([min, 30])

    return <div className="flex flex-col h-full">
        <div className="text-page-subtitle pb-2">Star</div>
        <div className="flex py-2 flex-col">
            <div className="font-bold p-2 uppercase bg-cyan-400 rounded-md shadow-md text-white">
                Pace
            </div>

            <div className="flex flex-col py-2 gap-2">
                <div className="flex gap-2 items-center pr-3">
                    <div className="w-1/2">Pace</div>
                    <div className="flex-grow">
                        <RangeSlider min={min}
                                     max={max}
                                     defaultValue={pace}
                                     onChange={(value:[number, number]) => setPace(value)}>
                            <RangeSliderTrack>
                                <RangeSliderFilledTrack/>
                            </RangeSliderTrack>
                            <RangeSliderThumb boxSize={8} index={0}>
                                {pace[0]}
                            </RangeSliderThumb>
                            <RangeSliderThumb boxSize={8} index={1}>
                                {pace[1]}
                            </RangeSliderThumb>
                        </RangeSlider>
                    </div>
                </div>


                <div className="flex gap-2 items-center pr-3">
                    <div className="w-1/2">Acceleration</div>
                    <div className="flex-grow">
                        <RangeSlider min={min}
                                     max={max}
                                     defaultValue={acceleration}
                                     onChange={(value:[number, number]) => setAcceleration(value)}>
                            <RangeSliderTrack>
                                <RangeSliderFilledTrack/>
                            </RangeSliderTrack>
                            <RangeSliderThumb boxSize={8} index={0}>
                                {acceleration[0]}
                            </RangeSliderThumb>
                            <RangeSliderThumb boxSize={8} index={1}>
                                {acceleration[1]}
                            </RangeSliderThumb>
                        </RangeSlider>
                    </div>
                </div>


                <div className="flex gap-2 items-center pr-3">
                    <div className="w-1/2">Sprint Speed</div>
                    <div className="flex-grow">
                        <RangeSlider min={min}
                                     max={max}
                                     defaultValue={sprintSpeed}
                                     onChange={(value:[number, number]) => setSprintSpeed(value)}>
                            <RangeSliderTrack>
                                <RangeSliderFilledTrack/>
                            </RangeSliderTrack>
                            <RangeSliderThumb boxSize={8} index={0}>
                                {sprintSpeed[0]}
                            </RangeSliderThumb>
                            <RangeSliderThumb boxSize={8} index={1}>
                                {sprintSpeed[1]}
                            </RangeSliderThumb>
                        </RangeSlider>
                    </div>
                </div>
            </div>
        </div>


    </div>
}