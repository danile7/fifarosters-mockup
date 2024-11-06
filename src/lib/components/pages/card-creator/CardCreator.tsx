'use client'

import {useEffect, useRef, useState} from "react";
import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Button,
    ButtonGroup,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    useOutsideClick,
} from "@chakra-ui/react";
import {FaPlus} from "react-icons/fa";
import downloadjs from 'downloadjs';
import html2canvas from 'html2canvas';
import AppInput from "@/lib/components/core/AppInput";
import CardDesignElement from "@/lib/components/pages/card-creator/CardDesignElement";
import PlayerDataElements from "@/lib/components/pages/card-creator/PlayerDataElements";
import {HomeService, PlayerService, ToolService} from "@/lib/services";
import type {CardCreatorSliceType, FutCardPropDataTypes, YearType} from "@/lib/types";
import EditableFutCard from "@/lib/components/core/EditableFutCard";
import {useSelector} from "react-redux";
import {CARD_FORMAT, IMAGE_FILTER, PLAY_STYLE, YEAR_VALUES} from "@/lib/utils/enums";
import {useAppDispatch} from "@/store";
import {cardCreatorAction} from "@/store/tools/cardCreatorSlice";
import {getChemistry, getPlayPosition, getPlayStyle} from "@/lib/utils";
import SearchPlayerCard from "@/lib/components/core/SearchPlayerCard";
import {IoIosArrowDown} from "react-icons/io";
import type {CardCreatorPropType} from "@/lib/types";

export default function CardCreator(prop: CardCreatorPropType) {

    const dispatch = useAppDispatch()

    const {
        cardDesign: {
            year,
            cardColor,
            cardFormat,
            cardExtras,
            overlay,
            overlayContracts,
            featureIcon,
            chemistryPoints,
            chemistryStyle,
            playStyle,
            playerFeatures
        },
        playerData: {
            position,
            name,
            overallRating,
            attributes,
            image: {
                url: playerImgURL,
                isDynamic,
                size
            },
            club,
            nation,
            league,
            imageFilter,
            filterDetail
        }
    } = useSelector(({cardCreator}: { cardCreator: CardCreatorSliceType }) => cardCreator);

    const [examplePlayer, setExamplePlayer] = useState<FutCardPropDataTypes | null>(null);
    const hasFetchedData = useRef(false);
    const captureRef = useRef(null);
    const [isCapturing, setIsCapturing] = useState<boolean>(false);
    const [cardResolution, setCardResolution] = useState<number>(2);
    const [loading, setLoading] = useState<boolean>(false);
    const [list, setList] = useState<FutCardPropDataTypes[] | null>(null);
    const [openList, setOpenList] = useState<boolean>(false);
    const [fetchYear, setFetchYear] = useState<YearType>(YEAR_VALUES['24']);
    const playerListRef = useRef(null);

    useOutsideClick({
        ref: playerListRef,
        handler: () => setOpenList(false)
    })

    const searchPlayers = async (value: string) => {
        setList(null);
        if (value.trim().length !== 0) {
            setLoading(true)
            setOpenList(false)
            const res: FutCardPropDataTypes[] | null = await ToolService.searchPlayerByName({
                name: value,
                year: fetchYear
            })
            setList(res)
            setOpenList(true)
            setLoading(false);
        }
    }

    const handleChangeCardData = (data: FutCardPropDataTypes) => {
        setCardData(data);
        setOpenList(false);
    }

    const captureDom = async () => {
        const element = captureRef.current;

        setIsCapturing(true); // Disable dragging before capturing

        try {
            await new Promise((resolve) => setTimeout(resolve, 1000)); // Delay to ensure fonts and SVGs are loaded

            if (element) {
                const canvas = await html2canvas(element, {scale: cardResolution, useCORS: true, allowTaint: false});
                const imageData = canvas.toDataURL('image/png', 1.0);
                downloadjs(imageData, 'fifia-fut-card', 'image/png');
            }
        } catch (error) {
            console.error("Error capturing DOM element:", error);
        } finally {
            setIsCapturing(false); // Re-enable dragging after capture
        }
    };

    const setCardData = (playerData: FutCardPropDataTypes) => {

        setExamplePlayer(playerData);

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
        } = playerData;

        dispatch(cardCreatorAction.setName(player_name))
        dispatch(cardCreatorAction.setOverallRating(overallrating))
        dispatch(cardCreatorAction.setCardChemistryStyle(getChemistry(chemistrytype)))
        dispatch(cardCreatorAction.setPosition(getPlayPosition(prefpos1)))
        dispatch(cardCreatorAction.setAttributes(rating))
        dispatch(cardCreatorAction.setPlayerAvatarImage(player_img_url))
        dispatch(cardCreatorAction.setClub({...club, img: club_img_url}));
        dispatch(cardCreatorAction.setNation(nation_img_url));
        dispatch(cardCreatorAction.setLeague(league_img_url));
        dispatch(cardCreatorAction.setCardColor({background_img_url_l, background_img_url_s, futcolors}))
        dispatch(cardCreatorAction.setDynamicImage(isdynamicportrait));
        dispatch(cardCreatorAction.setYear(fetchYear));

        Array(4).fill(null).map((_: null, index: number) => {

            // set new play style
            if (playstyles[index]) {
                dispatch(cardCreatorAction.setPlayStyle({index, value: getPlayStyle(playstyles[index])}))
            }
            // init play style with none
            else {
                dispatch(cardCreatorAction.setPlayStyle({index, value: PLAY_STYLE.NONE}));
            }
        })
    }

    useEffect(() => {
        if (hasFetchedData.current) return;

        const userData: {year: number, playerId: string | null, futId: string | null} = {
            year: prop.year,
            playerId: prop.playerId,
            futId: prop.futId
        }

        const fetchData = async () => {

            try {
                let res: FutCardPropDataTypes| null = await PlayerService.fetchPlayerById(userData);
                if(res === null || res && Object.keys(res).length === 0){
                    res = await HomeService.fetchExamplePlayer();
                }

                if (res) {
                    setCardData(res)
                }

                hasFetchedData.current = true;

            } catch (error) {
                console.log("Fetch player data failed.", error);
            }
        };

        void fetchData();

    }, [dispatch, prop.year, prop.playerId, prop.futId]);

    return (
        <div className="flex w-full flex-col">
            <div className="flex">
                <Button
                    fontWeight="normal"
                    leftIcon={<FaPlus/>}
                    colorScheme="blue"
                    className="mr-2"
                >
                    Add to Image Creator
                </Button>
                <ButtonGroup isAttached colorScheme="green" variant="solid">
                    <Button fontWeight="normal" onClick={captureDom}>Download Card</Button>

                    <Menu>
                        <MenuButton as={Button} fontWeight="normal">
                            {cardResolution}x
                        </MenuButton>

                        <MenuList zIndex={99}>
                            <MenuItem onClick={() => setCardResolution(1)}>1x</MenuItem>
                            <MenuItem onClick={() => setCardResolution(2)}>2x</MenuItem>
                            <MenuItem onClick={() => setCardResolution(3)}>3x</MenuItem>
                            <MenuItem onClick={() => setCardResolution(4)}>4x</MenuItem>
                        </MenuList>
                    </Menu>
                </ButtonGroup>
            </div>

            <div
                className="relative flex flex-col pb-4 md:flex-row z-10 max-h-screen overflow-y-auto overflow-x-hidden">
                <div className="sticky top-0 flex justify-center pr-4 bg-white z-10 pt-4 shadow-lg md:shadow-none">
                    <div className="max-h-[360px] min-h-[360px] min-w-[257px] max-w-[257px]" ref={captureRef}>
                        {examplePlayer && (
                            <EditableFutCard
                                data={{
                                    ...examplePlayer,
                                    player_name: name,
                                    overallrating: overallRating,
                                    prefpos1: position!,
                                    playstyles: playStyle,
                                    chemistrytype: chemistryStyle,
                                    player_img_url: playerImgURL,
                                    club_img_url: club.img,
                                    nation_img_url: nation,
                                    league_img_url: league,
                                    background_img_url_l: cardColor === null ? examplePlayer.background_img_url_l : cardColor.background_img_url_l,
                                    background_img_url_s: cardColor === null ? examplePlayer.background_img_url_s : cardColor.background_img_url_s,
                                    isdynamicportrait: isDynamic,
                                    futcolors: cardColor === null ? examplePlayer.futcolors : cardColor.futcolors
                                }}
                                visibility={{
                                    features: cardExtras.playerFeatures,
                                    playstyles: cardExtras.playStyle,
                                    playerName: cardExtras.playerName,
                                    chmeistry_style: cardExtras.chemistryStyle,
                                    first_owner: cardExtras.firstOwner,
                                    feature_icon: cardExtras.featureIcon,
                                    overlay: cardExtras.overlay
                                }}
                                mini={cardFormat === CARD_FORMAT.MINI}
                                isCapturing={isCapturing}
                                etc={{
                                    featureIcon,
                                    overlay,
                                    overlayContracts,
                                    size
                                }}
                                filterDetail={imageFilter === IMAGE_FILTER.NO_FILTER ? null : filterDetail}
                                year={year}
                            />)}
                    </div>
                </div>

                <div className="flex-grow flex-col pl-0 md:pl-4 pt-8 md:pt-4 pr-2">
                    <div className="flex items-center justify-start pl-0 md:pl-24 gap-1">
                        <div className="mr-6 font-semibold">Load a Card :</div>
                        <div className="flex-grow">
                            <div className="flex-grow">
                                <AppInput
                                    placeholder="Type a player name"
                                    onFinishTyping={(value) => searchPlayers(value as string)}
                                    loading={loading}
                                />
                            </div>
                            <div className="flex relative w-full z-[99]">
                                <div
                                    className="absolute bg-gray-100 flex flex-col w-full top-0 max-h-[200px] overflow-y-auto"
                                    ref={playerListRef}>
                                    {list !== null && openList && list.map((data: FutCardPropDataTypes, index: number) => (
                                        <SearchPlayerCard key={data?.card_id + '' + index} data={data}
                                                          onClick={() => handleChangeCardData(data)}/>))}
                                </div>
                            </div>
                        </div>
                        <Menu>
                            <MenuButton as={Button} variant="outline" colorScheme="gray" rightIcon={<IoIosArrowDown/>}>
                                FIFA {fetchYear}
                            </MenuButton>

                            <MenuList className="w-full">
                                <MenuItem onClick={() => setFetchYear(YEAR_VALUES['24'])}> FIFA 24 </MenuItem>
                                <MenuItem onClick={() => setFetchYear(YEAR_VALUES['23'])}> FIFA 23 </MenuItem>
                                <MenuItem onClick={() => setFetchYear(YEAR_VALUES['22'])}> FIFA 22 </MenuItem>
                                <MenuItem onClick={() => setFetchYear(YEAR_VALUES['21'])}> FIFA 21 </MenuItem>
                                <MenuItem onClick={() => setFetchYear(YEAR_VALUES['20'])}> FIFA 20 </MenuItem>
                                <MenuItem onClick={() => setFetchYear(YEAR_VALUES['19'])}> FIFA 19 </MenuItem>
                                <MenuItem onClick={() => setFetchYear(YEAR_VALUES['18'])}> FIFA 18 </MenuItem>
                                <MenuItem onClick={() => setFetchYear(YEAR_VALUES['17'])}> FIFA 17 </MenuItem>
                                <MenuItem onClick={() => setFetchYear(YEAR_VALUES['16'])}> FIFA 16 </MenuItem>
                            </MenuList>
                        </Menu>
                    </div>

                    <div className="flex items-center justify-start pl-0 md:pl-24">
                        <div className="mr-6 font-bold opacity-0">Load a Card :</div>
                        <div className="flex-grow text-sm">
                            All other values will be overwritten
                        </div>
                    </div>

                    <hr className="my-6"/>

                    <div className="">
                        <Accordion defaultIndex={[0]} allowMultiple>
                            <AccordionItem>
                                <h2>
                                    <AccordionButton
                                        className="rounded-sm border border-black border-opacity-20 bg-gray-200 shadow-md">
                                        <Box as="span" flex="1" textAlign="left">
                                            Card Design Elements
                                        </Box>
                                        <AccordionIcon/>
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4} pl={0} pr={0}>
                                    <CardDesignElement/>
                                </AccordionPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <h2>
                                    <AccordionButton
                                        className="rounded-sm border border-black border-opacity-20 bg-gray-200 shadow-md">
                                        <Box as="span" flex="1" textAlign="left">
                                            Player Data Elements
                                        </Box>
                                        <AccordionIcon/>
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4} pl={0} pr={0}>
                                    <PlayerDataElements/>
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </div>
        </div>
    );
}