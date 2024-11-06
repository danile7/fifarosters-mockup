import Image from "next/image";
import type {SearchNationCardPropType} from "@/lib/types";

export default function SearchNationCard ({ onClick, data } : SearchNationCardPropType) {

    const {
        label,
        img,
    } = data;

    return <button onClick={onClick} className="flex hover:underline justify-between items-center p-2 bg-white border-b min-h-[40px] [&>.hover-effect]:hover:opacity-100 [&>div>div>.player-name]:hover:text-blue-500 [&>div>div>.player-name]:hover:font-bold relative">
        <div className="flex gap-1 items-center">
            <Image width={0} height={0} alt={''} src={img} className="w-6 aspect-[1] border border-red-500"/>
            <span className="text-blue-dark">{label}</span>
        </div>
    </button>
}