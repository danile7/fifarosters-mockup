'use client'

import {useState} from "react";
import StarRatings from 'react-star-ratings'

export default function SMWF() {

    const [skillRating, setSkillRating] = useState(0)
    const [weakRating, setWeakRating] = useState(0)

    return <div className="flex flex-col h-full py-2">
        <div className="">
            <div className="uppercase font-bold">
                MIN.SKILL MOVES
            </div>

            <div className="flex py-2">
                <StarRatings
                    rating={skillRating}
                    starDimension="32px"
                    starSpacing="7px"
                    changeRating={(value:number) => setSkillRating(value)}
                    starRatedColor="#00ff45"
                    starHoverColor="#00ff45"
                />
            </div>
        </div>

        <div className="">
            <div className="uppercase font-bold">
                MIN.WEAK FOOT
            </div>

            <div className="flex py-2">
                <StarRatings
                    rating={weakRating}
                    starDimension="32px"
                    starSpacing="7px"
                    changeRating={(value:number) => setWeakRating(value)}
                    starRatedColor="#00ff45"
                    starHoverColor="#00ff45"
                />
            </div>
        </div>
    </div>

}