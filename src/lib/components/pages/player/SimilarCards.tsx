import {useSelector} from "react-redux";
import type {FutCardPropDataTypes, playerSlice} from "@/lib/types";
import FutCard from "@/lib/components/core/FutCard";

export default function SimilarCards() {
    const {similarCards} = useSelector(({player}: {player: playerSlice}) => (player));

    return <div className="flex flex-col py-4">
        <div className="text-xl text-gray-800 mt-5 mb-4 ">Similar Cards</div>

        <div className="flex flex-wrap">
            {similarCards?.map((item:FutCardPropDataTypes, index:number) => <div key = {`${item.team_id} ${item.player_name} ${index}`} className="flex">
                <FutCard  width={128} data = {item} visibility={{
                    features:true,
                    alt_positions:true,
                    playstyles:true,
                    first_owner:true,
                    squad_chemistry:true,
                    rating:true,
                    feature_label:true
                }}/>
            </div>)}
        </div>

    </div>
}