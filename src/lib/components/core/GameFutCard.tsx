'use client'

import React, { useEffect, useRef, useState, } from 'react';
import type { CSSProperties } from 'react'
import { ReactSVG } from "react-svg";
import Image from "next/image";
import { yearOfLayouts } from './FutCardStyles'
import type { FutCardPropTypes, PlayStyleType, RatingKeys, YearType } from '@/lib/types'
import { FOOT, PLAY_STYLE, YEAR_CARD_COLORS, YEAR_VALUES } from '@/lib/utils/enums'
import { getHexColor, getPlayStyleSVGPath } from "@/lib/utils";
import { TiStarFullOutline } from "react-icons/ti";
import { examplePlayerData } from '@/lib/utils/data';

export default function GameFutCard(props: FutCardPropTypes) {

    const {
        width,
        year = YEAR_VALUES['24'],
        data = examplePlayerData,
        mini = false
    } = props;

    const {
        player_name,
        alt_positions,
        attackingWorkRate,
        defensiveWorkRate,
        foot,
        playstyles,
        prefpos1,
        rating,
        futcolors,
        isdynamicportrait,
        overallrating,
        weakfootabilitytypecode,
        skillmoves,
        league_img_url,
        club_img_url,
        nation_img_url,
        player_img_url,
        background_img_url_l,
        background_img_url_s,
    } = data;

    const containerRef = useRef<HTMLDivElement | null>(null);
    const [fontSize, setFontSize] = useState('1rem');

    useEffect(() => {
        const handleResize = () => {
            if (containerRef.current !== null) {
                const containerWidth: number = containerRef.current?.offsetWidth ?? 135;
                setFontSize(`${containerWidth / 10}px`); // Adjust the division value as needed
            }
        };

        // Initial font size setting
        handleResize();

        // Update font size on window resize
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [width]);

    let newYear: YearType = year;

    if (year === YEAR_VALUES['22'] || year === YEAR_VALUES['21'] || year === YEAR_VALUES['20'] || year === YEAR_VALUES['19']) {
        newYear = YEAR_VALUES['22']
    }

    if (year === YEAR_VALUES['17']) {
        newYear = YEAR_VALUES['18']
    }

    const layout: string = yearOfLayouts[newYear] ?? '';


    const AltPositions = (
        <div
            className={`absolute roles-group z-2 text-center flex flex-col`}>
            {
                alt_positions?.map(altPosition => {
                    return (<div key={altPosition}

                        className={`role whitespace-nowrap font-semibold flex justify-center relative`}
                        style={{
                            backgroundColor: getHexColor(futcolors[YEAR_CARD_COLORS[year].alt_positions.bg]),
                            color: getHexColor(futcolors[YEAR_CARD_COLORS[year].alt_positions.color]),
                            borderColor: getHexColor(futcolors[YEAR_CARD_COLORS[year].alt_positions.stroke]),
                        }}
                    >
                        <span>{altPosition}</span>
                    </div>)
                })
            }
        </div>
    );


    const Features = (
        <div
            className={`right-features absolute text-center flex flex-col z-2`}>
            <div
                title={``}
                style={{
                    backgroundColor: getHexColor(futcolors[YEAR_CARD_COLORS[year].features.bg]),
                    color: getHexColor(futcolors[YEAR_CARD_COLORS[year].features.color]),
                    borderColor: getHexColor(futcolors[YEAR_CARD_COLORS[year].features.stroke]),
                }}
                className="right-feature-item whitespace-nowrap font-semibold flex flex-col items-center justify-center relative"
            >
                {props.visibility?.feature_label && (
                    <div className="text-[0.6em] tracking-normal">Skill</div>
                )}
                <div className="text-[0.9em] flex items-center">{skillmoves}<TiStarFullOutline
                    className="text-[1.3em] -ml-[1px]" /></div>
            </div>

            <div
                title={``}
                style={{
                    backgroundColor: getHexColor(futcolors[YEAR_CARD_COLORS[year].features.bg]),
                    color: getHexColor(futcolors[YEAR_CARD_COLORS[year].features.color]),
                    borderColor: getHexColor(futcolors[YEAR_CARD_COLORS[year].features.stroke]),
                }}
                className="right-feature-item whitespace-nowrap font-semibold flex flex-col items-center justify-center relative"
            >
                {props.visibility?.feature_label && (
                    <div className="text-[0.6em] tracking-normal">Weak</div>
                )}

                <div className="text-[0.9em] flex items-center">{weakfootabilitytypecode}<TiStarFullOutline
                    className="text-[1.3em] -ml-[1px]" /></div>
            </div>

            <div
                title={``}
                style={{
                    backgroundColor: getHexColor(futcolors[YEAR_CARD_COLORS[year].features.bg]),
                    color: getHexColor(futcolors[YEAR_CARD_COLORS[year].features.color]),
                    borderColor: getHexColor(futcolors[YEAR_CARD_COLORS[year].features.stroke]),
                }}
                className="right-feature-item !py-[0.25em] whitespace-nowrap font-semibold flex flex-col items-center justify-center relative"
            >
                {props.visibility?.feature_label && (
                    <div className="text-[0.6em] tracking-normal">Work</div>
                )}
                <div className="text-[0.8em]">{attackingWorkRate}/{defensiveWorkRate}</div>
            </div>

            <div
                title={``}
                style={{
                    backgroundColor: getHexColor(futcolors[YEAR_CARD_COLORS[year].features.bg]),
                    color: getHexColor(futcolors[YEAR_CARD_COLORS[year].features.color]),
                    borderColor: getHexColor(futcolors[YEAR_CARD_COLORS[year].features.stroke]),
                }}
                className="right-feature-item foot !py-[0.25em] whitespace-nowrap font-semibold flex flex-col items-center justify-center relative"
            >
                {props.visibility?.feature_label && (
                    <div className="text-[0.6em] tracking-normal">Foot</div>)
                }
                <div className="text-[1em]">{foot === FOOT.LEFT ? 'L' : 'R'}</div>
            </div>
        </div>
    );

    // console.log('❤❤❤❤❤', data)

    const PlayerStyles = (
        <div
            className={`absolute left-badges text-transparent z-2`}>
            {
                playstyles.map((item: PlayStyleType) => {
                    if (item !== PLAY_STYLE.NONE) {
                        return (
                            <div className={`left-badge-item relative aspect-[1] -my-[1px]`} key={item}>
                                <ReactSVG src="/assets/svg/playstyle/badge-container.svg"
                                    style={{
                                        '--fill-color': getHexColor(futcolors[YEAR_CARD_COLORS[year].playstyles.bg]),
                                        '--stroke-color': getHexColor(futcolors[YEAR_CARD_COLORS[year].playstyles.stroke]),
                                    } as CSSProperties}
                                    className=""
                                />
                                <ReactSVG src={getPlayStyleSVGPath(item)}
                                    style={{
                                        color: getHexColor(futcolors[YEAR_CARD_COLORS[year].playstyles.color]),
                                    }}
                                    className={`absolute top-1/2 left-1/2 transform -translate-y-[60%] -translate-x-1/2 max-w-[97%] min-w-[58%] max-h-[97%] bg-transparent aspect-[1]`}
                                />
                            </div>
                        )
                    }
                })
            }
        </div>
    );

    const Ratings = (
        <div
            className={`absolute feature-score-container`}>
            <div className="splitter-1"
                style={{ backgroundColor: getHexColor(futcolors[YEAR_CARD_COLORS[year].rating.label]) }} />
            <div className="splitter-2"
                style={{ backgroundColor: getHexColor(futcolors[YEAR_CARD_COLORS[year].rating.label]) }} />
            <div className="splitter-3"
                style={{ backgroundColor: getHexColor(futcolors[YEAR_CARD_COLORS[year].rating.label]) }} />
            {
                rating && Object.keys(rating).map(key => {

                    const ratingKey = key as RatingKeys;

                    return (<div className="relative feature-score-item" key={ratingKey}>
                        <div
                            className={`feature-score-name font-bold text-center uppercase`}
                            style={{ color: getHexColor(futcolors[YEAR_CARD_COLORS[year].rating.label]) }}
                        >
                            {ratingKey}
                        </div>
                        <div
                            className={`feature-score-value font-bold text-center relative`}
                            style={{ color: getHexColor(futcolors[YEAR_CARD_COLORS[year].rating.value]) }}
                        >
                            {rating[ratingKey]}
                        </div>
                    </div>)
                })
            }
        </div>
    )


    return <div
        className={`${layout} ${mini ? 'aspect-[0.9]' : 'aspect-[0.71527778]'} w-full bg-cover relative hidden overflow-hidden`}
        style={{ width, fontSize }} ref={containerRef}>
        <Image width={0} height={0}
            className={`fut-card-bg absolute w-full h-full top-0 left-0 `}
            draggable={false}
            src={mini ? background_img_url_s : background_img_url_l}
            alt={`card-bg`} />
        <Image
            width={0} height={0}
            className={`absolute ${isdynamicportrait ? 'player-avatar-dynamic' : 'player-avatar'} ${mini ? 'mini' : ''} `}
            src={player_img_url}
            alt="player_avatar" />
        {!mini && (
            <div
                className={`absolute player-name font-bold leading-none whitespace-nowrap overflow-hidden text-overflow-ellipsis text-center`}
                style={{ color: getHexColor(futcolors[YEAR_CARD_COLORS[year].player_name]) }}
            >
                {player_name}
            </div>)}
        <div
            className={`absolute total-score flex flex-col gap-[1px] text-center`}>
            <div className={`player-score font-bold `}
                style={{ color: getHexColor(futcolors[YEAR_CARD_COLORS[year].overallrating]) }}
            >
                {overallrating}
            </div>
            <div className={`player-role font-bold `}
                style={{ color: getHexColor(futcolors[YEAR_CARD_COLORS[year].prefpos1]) }}
            >
                {prefpos1}
            </div>
            <ReactSVG className='player-role-mark flex justify-center items-center'
                src="/assets/svg/football-shoes.svg"
                style={{ color: getHexColor(futcolors[YEAR_CARD_COLORS[year].chemistry]) }}
            />

        </div>

        {!mini && Ratings}

        <div
            className={`absolute n-c-l-group`}>
            <Image
                width={0} height={0}
                src={nation_img_url}
                className={`nation aspect-[1.6]`} alt="Nation" />
            <Image
                width={0} height={0}
                src={league_img_url}
                className={`league aspect-[1]`} alt="League" />
            <Image
                width={0} height={0}
                src={club_img_url}
                className={`club aspect-[1]`} alt="Club" />
        </div>

        {props.visibility?.alt_positions && AltPositions}

        {props.visibility?.features && Features}

        {props.visibility?.playstyles && PlayerStyles}

        <div
            className={`hidden absolute total-cost bg-[#13151d] text-center font-din  whitespace-nowrap flex items-center justify-center border-[--line-color] font-medium `}>
            <span className={`!mt-0 h-[0.8em] w-[0.8em] mr-[0.3em]`}></span>
            <span>999,000</span>
        </div>
    </div>
}
