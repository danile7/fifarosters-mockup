import React from "react";
import {ReactSVG} from "react-svg";
import {Radio} from "@chakra-ui/react";
import data from '@/lib/data/mockdata.json'
import type {PlayStyleOption, PlayStyleOptionItemType} from "@/lib/types";

const playStyleOptions = data?.advancedFilter?.playStyleOptions as PlayStyleOption[]

export default function PlayStyle() {
    return <div className="flex flex-col h-full">
        <div className="text-page-subtitle pb-2">PlayStyle</div>
        <div className="flex flex-col">
            {playStyleOptions.map(({id, title, options}:PlayStyleOption) => (
                <div key={`1st-level-${id}`} className="flex flex-col">
                    <div className="font-bold uppercase py-2">{title}</div>
                    {options?.map(({id: optionId, title: optionTitle, src}:PlayStyleOptionItemType) => (
                        <div key={`2nd-level-${id}-${optionId}`} className="flex flex-col gap-1">
                            <Radio>
                                <div className="text-[#024fc9] text-lg flex items-center gap-2">
                                    <div className="relative !w-[1.3em] !h-[1.3em] text-[#024fc9]">
                                        <ReactSVG src="/assets/svg/badge-container.svg"/>
                                        <ReactSVG src={src ? src : ''}
                                                  className="absolute top-1/2 left-1/2 transform -translate-y-[65%] -translate-x-1/2 max-w-[90%] max-h-[90%] bg-transparent !h-[0.6em] aspect-[1]"/>
                                    </div>
                                    <div>{optionTitle}</div>
                                </div>
                            </Radio>
                        </div>))}
                </div>
            ))}
        </div>
    </div>
}