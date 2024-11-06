import {Radio} from "@chakra-ui/react";
import data from '@/lib/data/mockdata.json'
import type {PositionOption, PositionOptionItemType} from "@/lib/types";

const positions = data?.advancedFilter?.positionOptions as PositionOption[]

export default function Position() {
    return <div className="flex flex-col h-full">
        <div className="text-page-subtitle pb-2">Position</div>
        <div className="flex flex-col">
            {positions.map(({id, title, options}: PositionOption) => (
                <div key={`1st-level-${id}`} className="flex flex-col pb-2">
                    <div className="uppercase font-bold">{title}</div>
                    <div className="grid grid-cols-3 py-1">
                        {options?.map(({id: optionId, title: optionTitle}: PositionOptionItemType) => (
                            <Radio key={`2nd-level-${id}-${optionId}`}>{optionTitle}</Radio>
                        ))}
                    </div>
                </div>
            ))}
        </div>


    </div>
}