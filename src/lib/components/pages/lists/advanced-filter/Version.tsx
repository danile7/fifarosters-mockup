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
import type {VersionOption, VersionOptionItemType} from "@/lib/types";

const versionOptions = data?.advancedFilter?.versionOptions as VersionOption[];

export default function Version() {
    return <div className="flex flex-col h-full ">
        <div className="text-page-subtitle pb-2">Version</div>

        <InputGroup>
            <InputLeftElement>
                <IoIosSearch/>
            </InputLeftElement>
            <Input className="mb-2"/>
        </InputGroup>

        <div className="flex flex-col">
            <Accordion allowToggle>
                {versionOptions.map(({id, title, options}: VersionOption) => (
                    <AccordionItem key={`1st-level-${id}`}>
                        <h2>
                            <AccordionButton
                                _expanded={{bg: '#0000004d', color: 'white', fontWeight: 'bold'}}
                                className="w-full flex items-center justify-between">
                                {title}
                                <AccordionIcon/>
                            </AccordionButton>
                        </h2>
                        <AccordionPanel className="pl-2 !py-0 m-0">
                            <div className="flex flex-col max-h-[200px] overflow-y-auto">
                                {options?.map(({id: optionId, title: optionTitle}: VersionOptionItemType) => (
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