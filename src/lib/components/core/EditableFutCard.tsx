'use client'

import type {CSSProperties} from 'react'
import React, {useEffect, useRef, useState,} from 'react';
import {ReactSVG} from "react-svg";
import {editableFutCardYearOfLayouts, yearOfLayouts} from './FutCardStyles'
import type {BasicLayoutType, EditableFutCardPropTypes, PlayStyleType, RatingKeys, YearType} from '@/lib/types'
import {FOOT, OVERLAY, PLAY_STYLE, YEAR_CARD_COLORS, YEAR_VALUES} from '@/lib/utils/enums'
import {
    generateImageFilterStyle,
    getChemistrySVGPath,
    getFeatureIconSVGPath,
    getHexColor,
    getOverlayStyle,
    getOverlaySVGPath,
    getPlayStyleSVGPath
} from "@/lib/utils";
import AppDraggable from "@/lib/components/core/AppDraggable";
import {cardCreatorAction} from "@/store/tools/cardCreatorSlice";
import {useAppDispatch} from "@/store";
import { examplePlayerData } from '@/lib/utils/data';

export default function EditableFutCard(props: EditableFutCardPropTypes) {

    const dispatch = useAppDispatch()

    const {
        width,
        year = YEAR_VALUES['24'],
        mini = false,
        data = examplePlayerData,
        isCapturing,
        filterDetail
    } = props;

    const {
        player_name,
        alt_positions,
        attackingWorkRate,
        defensiveWorkRate,
        carrer_player,
        chemistrytype,
        foot,
        playstyles,
        prefpos1,
        rating,
        futcolors,
        isdynamicportrait,
        nationality,
        overallrating,
        team_id,
        weakfootabilitytypecode,
        skillmoves,
        img_onerror,
        league_img_url,
        club_img_url,
        nation_img_url,
        player_img_url,
        background_img_url_l,
        background_img_url_s,
    } = data;

    const containerRef = useRef<HTMLDivElement>(null);
    const [fontSize, setFontSize] = useState('1rem');
    const playerAvatarRef = useRef(null)
    const [avatarLayout, setAvatarLayout] = useState<BasicLayoutType | null>(null);
    const [nameLayout, setNameLayout] = useState<BasicLayoutType | null>(null);
    const [featureIconLayout, setFeatureIconLayout] = useState<BasicLayoutType | null>(null);


    // const [isCapturing, setIsCapturing] = useState(false);

    useEffect(() => {
        // Make sure that the year value exists in YEAR_VALUES before using it
        const yearKey = YEAR_VALUES[year];

        if (yearKey) {
            const currentYearLayouts = editableFutCardYearOfLayouts[yearKey];

            if (isdynamicportrait) {
                setAvatarLayout(currentYearLayouts.avatar.dynamic);
            } else {
                setAvatarLayout(currentYearLayouts.avatar.default);
            }

            setNameLayout(currentYearLayouts.playerName);
            setFeatureIconLayout(currentYearLayouts.featureIcon);
        }
    }, [year, isdynamicportrait]);

    useEffect(() => {
        const handleResize = () => {
            if (containerRef.current !== null) {
                const containerWidth: number = containerRef.current?.offsetWidth;
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

    useEffect(() => {
        const avatarLayout: BasicLayoutType = isdynamicportrait ? editableFutCardYearOfLayouts[YEAR_VALUES[year]].avatar.dynamic : editableFutCardYearOfLayouts[YEAR_VALUES[year]].avatar.default;
        dispatch(cardCreatorAction.setImageSize(avatarLayout.width));
    }, [dispatch, isdynamicportrait, year])

    const setDefaultPlayerImage = () => {
        const DefaultPlayerImage = 'https://e7.pngegg.com/pngimages/27/762/png-clipart-football-player-silhouette-sport-football-hand-sports-equipment.png'
        dispatch(cardCreatorAction.setPlayerAvatarImage(DefaultPlayerImage))
    }

    /**
     * DOM Components
     */
    const AltPositions = (
        <div
            className={`absolute roles-group z-2 text-center flex flex-col`}>
            {
                alt_positions.map(altPosition => {
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
            className={`right-features absolute text-center flex flex-col z-2`}
        >
            <div
                title={``}
                style={{
                    backgroundColor: getHexColor(futcolors[YEAR_CARD_COLORS[year].features.bg]),
                    color: getHexColor(futcolors[YEAR_CARD_COLORS[year].features.color]),
                    borderColor: getHexColor(futcolors[YEAR_CARD_COLORS[year].features.stroke]),
                }}
                className="right-feature-item whitespace-nowrap font-semibold flex flex-col items-center justify-center relative"
            >
                <div className="text-[0.6em] tracking-normal uppercase font-extrabold">Skill</div>
                <div className="text-[0.8em]">{skillmoves}<span className="text-[1.3em]">★</span></div>
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
                <div className="text-[0.6em] tracking-normal uppercase font-extrabold">Weak</div>
                <div className="text-[0.8em]">{weakfootabilitytypecode}<span className="text-[1.3em]">★</span></div>
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
                <div className="text-[0.6em] tracking-normal uppercase font-extrabold">Foot</div>
                <div className="text-[0.8em]">{foot === FOOT.LEFT ? 'L' : 'R'}</div>
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
                <div className="text-[0.6em] tracking-normal uppercase font-extrabold">Work</div>
                <div className="text-[0.8em]">{attackingWorkRate}/{defensiveWorkRate}</div>
            </div>
        </div>
    );

    const PlayerStyles = (
        <div
            className={`absolute left-badges text-transparent z-2`}>
            {
                playstyles.map((item: PlayStyleType, index: number) => {
                    if (item !== PLAY_STYLE.NONE) {
                        return (
                            <div className={`left-badge-item relative aspect-[1] -my-[4px]`} key={`${item}${index}`}>
                                <AppDraggable widthPercent={13} top={5} left={7} containerRef={containerRef}
                                              disableDrag={isCapturing}>
                                    <ReactSVG src="/assets/svg/playstyle/badge-container.svg"
                                              style={{
                                                  '--fill-color': getHexColor(futcolors[YEAR_CARD_COLORS[year].playstyles.bg]),
                                                  '--stroke-color': getHexColor(futcolors[YEAR_CARD_COLORS[year].playstyles.stroke]),
                                              } as CSSProperties}
                                    />
                                </AppDraggable>

                                <AppDraggable widthPercent={8} top={4} left={7} containerRef={containerRef}
                                              disableDrag={isCapturing}>
                                    <ReactSVG src={getPlayStyleSVGPath(item)}
                                              style={{
                                                  color: getHexColor(futcolors[YEAR_CARD_COLORS[year].playstyles.color]),
                                              }}
                                    />
                                </AppDraggable>

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
            {
                rating && Object.keys(rating).map(key => {

                    const ratingKey = key as RatingKeys;

                    return (<div className="relative feature-score-item" key={ratingKey}>
                        <div
                            className={`feature-score-name text-center uppercase`}
                            style={{color: getHexColor(futcolors[YEAR_CARD_COLORS[year].rating.label])}}
                        >
                            {ratingKey}
                        </div>
                        <div
                            className={`feature-score-value font-bold text-center relative`}
                            style={{color: getHexColor(futcolors[YEAR_CARD_COLORS[year].rating.value])}}
                        >
                            {rating[ratingKey]}
                        </div>
                    </div>)
                })
            }
        </div>
    )


    const Overlay = (
        <AppDraggable
            top={10}
            left={75}
            widthPercent={15}
            containerRef={containerRef}
            disableDrag={isCapturing}
        >
            <div className="p-[10%]">
                {props?.etc?.overlay && (<div
                    className={`w-full aspect-[1] rounded-full shadow-sm shadow-black flex justify-center items-center ${getOverlayStyle(props.etc.overlay)}`}>
                    {
                        props.etc.overlay !== OVERLAY.LOAN ?
                            (<ReactSVG src={getOverlaySVGPath(props.etc.overlay)} className="w-full"/>) :
                            (<div className="text-lg font-bold">{props?.etc?.overlayContracts}</div>)
                    }
                </div>)}
            </div>
        </AppDraggable>
    )

    return <div
        className={`${layout} ${mini ? 'aspect-[0.9]' : 'aspect-[0.71527778]'} w-full bg-cover relative hidden overflow-hidden`}
        style={{width, fontSize}} ref={containerRef}>

        <img
            width={0}
            height={0}
            className={`fut-card-bg absolute w-full h-full top-0 left-0 select-none `}
            draggable={false}
            src={mini ? background_img_url_s : background_img_url_l} alt={`card-bg`}/>


        <AppDraggable
            top={avatarLayout?.top ?? 0}
            left={avatarLayout?.left ?? 0}
            widthPercent={props.etc?.size ? props.etc?.size : avatarLayout?.width ? avatarLayout?.width : 100}
            heightPercent={props.etc?.size ? props.etc?.size : avatarLayout?.height? avatarLayout?.height: 100}
            center={true}
            containerRef={containerRef}
            disableDrag={isCapturing}
        >
            <img
                ref={playerAvatarRef}
                width={0}
                height={0}
                className={`w-full h-full`}
                src={player_img_url}
                draggable={false}
                onError={() => setDefaultPlayerImage()}
                style = { filterDetail !== null ? {...generateImageFilterStyle(filterDetail)} : { }}
                alt="player_avatar"/>
        </AppDraggable>

        {!mini && (
            <AppDraggable
                top={nameLayout?.top ?? 0}
                left={nameLayout?.left ?? 0}
                widthPercent={nameLayout?.top ?? 100}
                containerRef={containerRef}
                disableDrag={isCapturing}>
                <div
                    className={`editable-card-player-name font-bold whitespace-nowrap flex justify-center items-center text-overflow-ellipsis text-center`}
                    style={{color: getHexColor(futcolors[YEAR_CARD_COLORS[year].player_name])}}
                >
                    {player_name}
                </div>
            </AppDraggable>
        )}

        <div
            className={`absolute total-score flex flex-col items-center gap-[1px] text-center`}>
            <div className={`player-score font-bold `}
                 style={{color: getHexColor(futcolors[YEAR_CARD_COLORS[year].overallrating])}}
            >
                {overallrating}
            </div>

            <div className={`player-role font-bold `}
                 style={{color: getHexColor(futcolors[YEAR_CARD_COLORS[year].prefpos1])}}
            >
                {prefpos1}
            </div>

            {
                props.visibility.first_owner &&
                <ReactSVG className='player-role-mark first-owner w-[80%] aspect-1'
                          src={'/assets/svg/first-owner.svg'}
                          style={{color: getHexColor(futcolors[YEAR_CARD_COLORS[year].chemistry])}}
                />
            }

        </div>

        {
            props.visibility.chmeistry_style &&
            (
                <ReactSVG className='chemistry-style aspect-1'
                          src={getChemistrySVGPath(chemistrytype)}
                          style={{color: getHexColor(futcolors[YEAR_CARD_COLORS[year].chemistry])}}
                />
            )
        }

        {!mini && Ratings}

        <div
            className={`absolute n-c-l-group`}>
            <img
                width={0} height={0}
                src={nation_img_url}
                className={`nation aspect-[1.6]`} alt="Nation"/>
            <img
                width={0} height={0}
                src={league_img_url}
                className={`league aspect-[1]`} alt="League"/>
            <img
                width={0} height={0}
                src={club_img_url}
                className={`club aspect-[1]`} alt="Club"/>
        </div>

        {props.visibility?.alt_positions && AltPositions}

        {props.visibility?.features && Features}

        {props.visibility?.playstyles && PlayerStyles}

        {props.visibility?.overlay && props.etc?.overlay && Overlay}

        {props.visibility?.feature_icon && props.etc?.featureIcon && (
            <AppDraggable
                top={featureIconLayout?.top ?? 0}
                left={featureIconLayout?.left ?? 0}
                widthPercent={featureIconLayout?.width ?? 10}
                containerRef={containerRef}
                disableDrag={isCapturing}>
                <ReactSVG
                    className=""
                    src={getFeatureIconSVGPath(props.etc.featureIcon)}
                    style={{color: getHexColor(futcolors[YEAR_CARD_COLORS[year].chemistry])}}
                />
            </AppDraggable>
        )}

        <div
            className={`hidden absolute total-cost bg-[#13151d] text-center font-din  whitespace-nowrap flex items-center justify-center border-[--line-color] font-medium `}>
            <span className={`!mt-0 h-[0.8em] w-[0.8em] mr-[0.3em]`}></span>
            <span>999,000</span>
        </div>
    </div>
}
