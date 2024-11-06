'use client'

import type {YearType} from "@/lib/types";
import {useParams, useSearchParams} from "next/navigation";
import CardBundle from "@/lib/components/pages/game-pack/CardBundle";
import PickCardsList from "@/lib/components/pages/game-pack/PickCardsList";

export default function Page() {

    const {route} = useParams();
    const searchParams = useSearchParams();
    const year: number = searchParams.get('v') ? parseInt(searchParams.get('v')!) : 24;
    const packtype: string | null = searchParams.get('packtype') ? searchParams.get('packtype') : null;

    return (<div className="w-full h-full" style={{
        backgroundImage: 'url("/assets/images/stadium-bg.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }}>
        {
            packtype === null ? <CardBundle year={year.toString() as YearType}/> :
                <PickCardsList year={year.toString() as YearType} packtype={packtype}/>
        }
    </div>)
}