'use client'

import { Button } from "@chakra-ui/react";
import SearchPlayer from "./SearchPlayer";

export default function PlayersToShow() {

    const handleUpdateTeam = () => {
        console.log('handle update team')
    }

    return <div className="flex flex-col">
        <div className="text-xl font-semibold flex items-center gap-2 mb-2">
            Players to show
            <div className="text-sm font-normal">(type to change any player)</div>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-1/2 flex flex-col gap-1">
                <SearchPlayer onSelectPlayer={data => console.log(data)} />
                <SearchPlayer onSelectPlayer={data => console.log(data)} />
                <SearchPlayer onSelectPlayer={data => console.log(data)} />
                <SearchPlayer onSelectPlayer={data => console.log(data)} />
                <SearchPlayer onSelectPlayer={data => console.log(data)} />
            </div>

            <div className="w-full md:w-1/2 flex flex-col gap-1">
                <SearchPlayer onSelectPlayer={data => console.log(data)} />
                <SearchPlayer onSelectPlayer={data => console.log(data)} />
                <SearchPlayer onSelectPlayer={data => console.log(data)} />
                <SearchPlayer onSelectPlayer={data => console.log(data)} />
                <SearchPlayer onSelectPlayer={data => console.log(data)} />
            </div>
        </div>

        <div className="mt-4 flex justify-center">
            <Button colorScheme="blue" fontWeight="normal" onClick={handleUpdateTeam}>
                Update Teams
            </Button>
        </div>
    </div>
}