import Image from "next/image";
import {getHexColor} from "@/lib/utils";
import {YEAR_CARD_COLORS, YEAR_VALUES} from "@/lib/utils/enums";
import type {SearchPlayerCardPropType} from "@/lib/types";

export default function SearchPlayerCard ({ onClick, data, year = YEAR_VALUES['24'] } : SearchPlayerCardPropType) {

    const {
        player_name,
        prefpos1,
        overallrating,
        futlabel,
        futcolors,
        nation_img_url,
        player_img_url,
        club_img_url,
    } = data;

    return <button onClick={onClick} className="flex bg-white border-b min-h-[40px] [&>.hover-effect]:hover:opacity-100 [&>div>div>.player-name]:hover:text-blue-500 [&>div>div>.player-name]:hover:font-bold relative">
        <div className = "hover-effect opacity-0 absolute h-full w-[100px] left-0 top-0  overflow-hidden transition-all duration-100">
            <div className = "relative w-full h-full overflow-hidden">
                <div className = "absolute h-full w-full transform skew-x-[30deg] -left-[10px] bg-gradient-to-r from-blue-200 to-transparent"/>
            </div>
        </div>
        <div className="absolute w-full h-full top-0 left-0 flex justify-end ">
            <div className="w-2/3 h-full"
                 style={{
                     backgroundImage: `linear-gradient(-30deg, ${getHexColor(futcolors[YEAR_CARD_COLORS[year].alt_positions.color])}, ${getHexColor(futcolors[YEAR_CARD_COLORS[year].alt_positions.bg])} 20%, white 50%, white )`
                 }}
            />
        </div>
        <div className="absolute w-full h-full flex items-center px-5 gap-2">
            <Image width={0} height={0} className="w-[36px] aspect-1" src={player_img_url} alt = 'player'/>
            <Image width={0} height={0} className="w-[20px] aspect-1" src={club_img_url}  alt = 'club'/>
            <Image width={0} height={0} className="w-[30px] aspect-1 border" src={nation_img_url} alt = 'nationality'/>
            <div className = "flex-grow  flex flex-col justify-center">
                <div className = "player-name text-[0.9em]">{player_name}</div>
                <div className = "text-[0.7em] text-gray-400 flex uppercase">{prefpos1} - {futlabel}</div>
            </div>

            <div className = "flex h-full justify-center items-center font-semibold text-white" style={{textShadow: "1px 1px 2px #000"}}>
                {overallrating}
            </div>
        </div>
    </button>
}