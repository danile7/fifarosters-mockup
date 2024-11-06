import Image from "next/image";
import type {SearchClubCardPropType} from "@/lib/types";
import StarRatings from "react-star-ratings";

export default function SearchClubCard ({ onClick, data } : SearchClubCardPropType) {

    const {
        label,
        img,
        rating
    } = data;

    const ratingValue = typeof rating === 'string' ? 0: rating;

    return <button onClick={onClick} className="flex hover:underline justify-between items-center p-2 bg-white border-b min-h-[40px] [&>.hover-effect]:hover:opacity-100 [&>div>div>.player-name]:hover:text-blue-500 [&>div>div>.player-name]:hover:font-bold relative">
        <div className="flex gap-1 items-center">
            <Image width={0} height={0} alt={''} src={img} className="w-6 aspect-[1] border border-red-500"/>
            <span className="text-blue-dark">{label}</span>
        </div>

        <StarRatings
            rating={ratingValue}
            starDimension="15px"
            starSpacing="1px"
            starRatedColor="#3175b3"
        />

    </button>
}