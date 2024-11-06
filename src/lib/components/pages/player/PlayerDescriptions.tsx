import type { FutCardPropDataTypes } from "@/lib/types";
import {Divider} from "@chakra-ui/react";

export default function PlayerDescriptions({data}:{data:FutCardPropDataTypes | null}){
    let desc = ``
    if(data){
        const {
            player_name,
            prefpos1,
            nationname,
            teamname,
            leaguename
        } = data;
        
        desc = `${player_name} is a ${prefpos1} from ${nationname} playing for ${teamname} in the ${leaguename} League.`
    }

        return <div className="flex flex-col py-4">
        <div className="text-xl text-gray-800 mt-5 ">Player Description</div>

        <Divider orientation='horizontal' my="2"/>

        <div className="text-sm">
            {desc}
        </div>

        <div className="text-sm mt-2">
            This is his Futties card.
        </div>
    </div>
}