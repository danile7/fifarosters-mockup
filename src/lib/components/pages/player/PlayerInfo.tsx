import dynamic from 'next/dynamic';
const StarRatings = dynamic(() => import("react-star-ratings"), { ssr: false });
import type {FutCardPropDataTypes} from "@/lib/types";

const cmToFeetInches = (cm:number):string => {
    const inchesTotal = cm / 2.54; // Convert cm to total inches
    const feet = Math.floor(inchesTotal / 12); // Calculate the number of full feet
    const inches = Math.round(inchesTotal % 12); // Calculate the remaining inches

    return `${feet}'${inches}"`;
}

const kgToLbs = (kg:number):string => {
    const lbs = kg * 2.20462;
    return lbs.toFixed(2) + ' lbs' // Round to 2 decimal places
}

export default function PlayerInfo({data}:{data:FutCardPropDataTypes | null}){

    let att;
    let def;

    switch (data?.attackingWorkRate){
        case 'M': att = 'Medium'; break;
    }

    switch (data?.defensiveWorkRate){
        case 'M': def = 'Medium'; break;
    }

    return <div className="flex flex-col">
        <div className="text-xl text-gray-800 mt-5 mb-2">Player Info</div>
        <div className="flex flex-col mt-2 gap-1">
            <div className="flex items-center gap-1"><div className="font-semibold">Age:&nbsp;</div> <div>{data?.age}</div></div>
            <div className="flex items-center gap-1"><div className="font-semibold">Workrates (Att/Def):&nbsp;</div> <div>{att}/{def}</div></div>
            <div className="flex items-center gap-1"><div className="font-semibold">Height:&nbsp;</div> <div>{data?.height} cm/{cmToFeetInches(data?.height ?? 0)}</div></div>
            <div className="flex items-center gap-1"><div className="font-semibold">Weight:&nbsp;</div> <div>{data?.weight} kg/{kgToLbs(data?.weight??0)}</div></div>
            <div className="flex items-center gap-1"><div className="font-semibold">Weak Foot:&nbsp;</div>
                <StarRatings
                    key={`weakfoot-`}
                    rating={data?.weakfootabilitytypecode ?? 0}
                    starDimension="16px"
                    starSpacing="0px"
                    starRatedColor="#333333"
                    starHoverColor="#333333"
                />
            </div>
            <div className="flex items-center gap-1"><div className="font-semibold">Skill Moves:&nbsp;</div>
                <StarRatings
                    key={`skillmoves-`}
                    rating={data?.skillmoves ?? 0}
                    starDimension="16px"
                    starSpacing="0px"
                    starRatedColor="#333333"
                    starHoverColor="#333333"
                />
            </div>
            <div className="flex items-center gap-1"><div className="font-semibold">Nation:&nbsp;</div> <div>{data?.nationname}</div></div>
            <div className="flex items-center gap-1"><div className="font-semibold">League:&nbsp;</div> <div>{data?.leaguename}</div></div>
            <div className="flex items-center gap-1"><div className="font-semibold">Club:&nbsp;</div> <div>{data?.teamname}</div></div>

        </div>
    </div>
}