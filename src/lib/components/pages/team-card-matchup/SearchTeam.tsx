'use client'

import { useRef, useState } from "react";
import { useOutsideClick } from "@chakra-ui/react";
import { ToolService } from "@/lib/services";
import type { ClubCard } from "@/lib/types";
import AppInput from "@/lib/components/core/AppInput";
import SearchClubCard from "@/lib/components/core/SearchClubCard";

export default function SearchTeam ({ onSelectTeam }: { onSelectTeam: (data: ClubCard) => void })  {
    const [loadingClub, setLoadingClub] = useState<boolean>(false);
    const [openClubList, setOpenClubList] = useState<boolean>(true);
    const [clubList, setClubList] = useState<ClubCard[] | null>(null);
    const clubListRef = useRef(null);

    useOutsideClick({
        ref: clubListRef,
        handler: () => setOpenClubList(false)
    })

    const handleChangeClub = (data: ClubCard) => {
        setOpenClubList(false);
        onSelectTeam(data)
    }

    const searchClub = async (value: string) => {
        setClubList(null);

        if (value.trim().length !== 0) {
            setLoadingClub(true);
            setOpenClubList(false);
            const res: ClubCard[] | null = await ToolService.searchClubByName({ name: value.toLocaleLowerCase() })
            setClubList(res);
            setOpenClubList(true)
            setLoadingClub(false);
        }
    }

    return (
        <div className="w-full flex flex-col">
            <div className="text-sm">Search team by name</div>
            <div className="flex-grow">
                <div className="flex-grow">
                    <AppInput
                        placeholder="Club"
                        onFinishTyping={(value) => searchClub(value as string)}
                        loading={loadingClub}
                    />
                </div>
                <div className="flex relative w-full z-[99]">
                    <div
                        className="absolute bg-gray-100 flex flex-col w-full top-0 max-h-[200px] overflow-y-auto border-l border-r"
                        ref={clubListRef}>
                        {clubList !== null && openClubList && clubList.map((data: ClubCard, index: number) =>
                        (<SearchClubCard key={data?.id + '' + index} data={data}
                            onClick={() => handleChangeClub(data)} />))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
