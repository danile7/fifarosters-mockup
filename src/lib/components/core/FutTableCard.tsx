import {Td, Tr} from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import ValueHighLighter from "@/lib/components/core/ValueHighlighter";
import type {TableCardItemPropType} from "@/lib/types";

export default function FutTableCard(props: TableCardItemPropType) {

    const {
        club_img_url,
        league_img_url,
        nationality_img_url,
        avatar_img_url,
        playerName,
        OVR,
        POT,
        Pos,
        Age,
        playerId,
        teamId,
        leagueId,
        nationalityId
    } = props;

    return <Tr className="[&>td]:py-0">
        <Td>
            <Link href={`playerlist?teamid=${teamId}`}>
                <Image className="w-[3em] aspect-1" src={club_img_url!} width={0} height={0} alt="club"/>
            </Link>
        </Td>
        <Td>
            <Link href={`playerlist?leagueid=${leagueId}`}>
                <Image className="w-[5em] aspect-1" src={league_img_url!} width={0} height={0} alt="league"/>
            </Link>
        </Td>

        <Td>
            <Link href={`playerlist?nationality=${nationalityId}`}>
                <Image className="w-[4em] aspect-1" src={nationality_img_url!} width={0} height={0} alt="nationality"/>
            </Link>
        </Td>

        <Td>
            <Link href={`/players?player=${playerId}`} className="text-blue-500 hover:underline">
                <Image className="w-[2.5em] aspect-1" src={avatar_img_url!} width={0} height={0} alt="avatar"/>
            </Link>
        </Td>
        <Td>
            <Link href={`/players?player=${playerId}`} className="text-blue-500 hover:underline">{playerName}</Link>
        </Td>
        <Td>
            <ValueHighLighter value={OVR!}/>
        </Td>

        <Td>
            <ValueHighLighter value={POT!}/>
        </Td>

        <Td>
            {Pos}
        </Td>

        <Td>
            {Age}
        </Td>
    </Tr>
}