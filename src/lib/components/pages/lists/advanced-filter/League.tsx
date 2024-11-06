import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Input,
    InputGroup,
    InputLeftElement,
} from '@chakra-ui/react'
import {IoIosSearch} from "react-icons/io";
import data from '@/lib/data/mockdata.json';
import type {LeagueOption, LeagueOptionItemType} from "@/lib/types";

const leagueOptions = data?.advancedFilter?.leagueOptions as LeagueOption[];

export default function League() {
    return <div className="flex flex-col h-full ">
        <div className="text-page-subtitle pb-2">League</div>

        <InputGroup>
            <InputLeftElement>
                <IoIosSearch/>
            </InputLeftElement>
            <Input className="mb-2"/>
        </InputGroup>

        <div className="flex flex-col">
            <Accordion allowToggle>
                {leagueOptions.map(({id, title, options}: LeagueOption) => (
                    <AccordionItem key={`1st-level-${id}`}>
                        <h2>
                            <AccordionButton className="w-full flex items-center justify-between">
                                {title}
                                <AccordionIcon/>
                            </AccordionButton>
                        </h2>
                        <AccordionPanel className="pl-2 !py-0 m-0">
                            <div className="flex flex-col max-h-[200px] overflow-y-auto">
                                {options?.map(({id: optionId, title: optionTitle}: LeagueOptionItemType) => (
                                    <div
                                        className="p-2 border-b cursor-pointer bg-black bg-opacity-0 transition-all duration-200 hover:bg-opacity-5"
                                        key={`2nd-level-${id}-${optionId}`}>
                                        {optionTitle}
                                    </div>
                                ))}
                            </div>
                        </AccordionPanel>
                    </AccordionItem>))}
            </Accordion>
        </div>

    </div>
}