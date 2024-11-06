'use client'

import { useRef, useState } from "react";
import { Button, Menu, MenuButton, MenuItem, MenuList, useOutsideClick } from "@chakra-ui/react";
import type { FutCardPropDataTypes, YearType } from "@/lib/types";
import { YEAR_VALUES } from "@/lib/utils/enums";
import { ToolService } from "@/lib/services";
import AppInput from "@/lib/components/core/AppInput";
import SearchPlayerCard from "@/lib/components/core/SearchPlayerCard";
import { IoIosArrowDown } from "react-icons/io";

export default function SearchPlayer ({ onSelectPlayer }: { onSelectPlayer: (data: FutCardPropDataTypes) => void }) {
    
    const [loadingPlayer, setLoadingPlayer] = useState<boolean>(false);
    const [list, setList] = useState<FutCardPropDataTypes[] | null>(null);
    const [openList, setOpenList] = useState<boolean>(false);
    const [fetchYear, setFetchYear] = useState<YearType>(YEAR_VALUES['24']);
    const playerListRef = useRef(null);


    useOutsideClick({
        ref: playerListRef,
        handler: () => setOpenList(false)
    })

    const searchPlayers = async (value: string) => {
        setList(null);
        if (value.trim().length !== 0) {
            setLoadingPlayer(true)
            setOpenList(false)
            const res: FutCardPropDataTypes[] | null = await ToolService.searchPlayerByName({
                name: value,
                year: fetchYear
            })
            setList(res)
            setOpenList(true)
            setLoadingPlayer(false);
        }
    }

    const handleClick = (data: FutCardPropDataTypes) => {
        onSelectPlayer(data);
        setOpenList(false);
    }

    return (<div className="w-full flex gap-1">
        <div className="flex-grow">
            <div className="flex-grow">
                <AppInput
                    placeholder="Type a player name"
                    onFinishTyping={(value) => searchPlayers(value as string)}
                    loading={loadingPlayer}
                />
            </div>
            <div className="flex relative w-full z-[99]">
                <div
                    className="z-[99] absolute bg-gray-100 flex flex-col w-full top-0 max-h-[200px] overflow-y-auto"
                    ref={playerListRef}>
                    {list !== null && openList && list.map((data: FutCardPropDataTypes, index: number) => (
                        <SearchPlayerCard key={data?.card_id + '' + index} data={data}
                            onClick={() => handleClick(data)} />))}
                </div>
            </div>
        </div>
        <Menu>
            <MenuButton fontWeight="normal" className="text-start " as={Button}
                rightIcon={<IoIosArrowDown />}
                variant="outline"
                colorScheme='gray'>
                FIFA {fetchYear}
            </MenuButton>

            <MenuList>
                <MenuItem onClick={() => setFetchYear(YEAR_VALUES['24'])}> FIFA 24 </MenuItem>
                <MenuItem onClick={() => setFetchYear(YEAR_VALUES['23'])}> FIFA 23 </MenuItem>
                <MenuItem onClick={() => setFetchYear(YEAR_VALUES['22'])}> FIFA 22 </MenuItem>
                <MenuItem onClick={() => setFetchYear(YEAR_VALUES['21'])}> FIFA 21 </MenuItem>
                <MenuItem onClick={() => setFetchYear(YEAR_VALUES['20'])}> FIFA 20 </MenuItem>
                <MenuItem onClick={() => setFetchYear(YEAR_VALUES['19'])}> FIFA 19 </MenuItem>
                <MenuItem onClick={() => setFetchYear(YEAR_VALUES['18'])}> FIFA 18 </MenuItem>
                <MenuItem onClick={() => setFetchYear(YEAR_VALUES['17'])}> FIFA 17 </MenuItem>
                <MenuItem onClick={() => setFetchYear(YEAR_VALUES['16'])}> FIFA 16 </MenuItem>
            </MenuList>
        </Menu>

    </div>)
}