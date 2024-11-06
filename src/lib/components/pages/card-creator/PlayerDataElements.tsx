'use client'

import {
    Button,
    ButtonGroup,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Portal,
    Radio,
    RadioGroup,
    Stack,
    useOutsideClick
} from '@chakra-ui/react'
import {IoIosArrowDown} from "react-icons/io";
import AppInput from "@/lib/components/core/AppInput";
import type {ChangeEvent} from 'react';
import {useEffect, useRef, useState} from "react";
import type {
    CardCreatorSliceType,
    ClubCard,
    FutCardPropDataTypes,
    ImageFadeType,
    ImageFilterType,
    LeagueCard,
    NationCard,
    Preposition_Type,
    RATING,
    YearType
} from '@/lib/types'
import {
    ALL_PLAYER_POSITION,
    CARD_CREATOR_PLAYER_DATA_IMAGE_TYPE,
    IMAGE_FADE,
    IMAGE_FILTER,
    YEAR_VALUES
} from '@/lib/utils/enums'
import {useAppDispatch} from "@/store";
import {useSelector} from "react-redux";
import {cardCreatorAction} from "@/store/tools/cardCreatorSlice";
import AppButton from "@/lib/components/core/AppButton";
import SearchPlayerCard from "@/lib/components/core/SearchPlayerCard";
import SearchClubCard from "@/lib/components/core/SearchClubCard";
import {ToolService} from "@/lib/services";
import SearchNationCard from "@/lib/components/core/SearchNationCard";
import SearchLeagueCard from "@/lib/components/core/SearchLeagueCard";
import CustomImageFilterSetting from "@/lib/components/pages/card-creator/CustomImageFilterSetting";

export default function PlayerDataElements() {

    const dispatch = useAppDispatch();

    const {
        cardDesign: {year},
        playerData: {
            image,
            imageFade,
            imageFilter,
            filterDetail,
            name,
            overallRating,
            position,
            club,
            league,
            nation,
            attributes,
            calculateFromFullAttributes
        }
    } = useSelector(({cardCreator}: { cardCreator: CardCreatorSliceType }) => cardCreator);

    const [fetchYear, setFetchYear] = useState<YearType>(year);
    useEffect(() => {
        setFetchYear(year)
    }, [year])
    const [attrTab, setAttrTab] = useState(0);
    const [loading, setLoading] = useState<boolean>(false);
    const [loadingPlayer, setLoadingPlayer] = useState<boolean>(false);
    const [loadingClub, setLoadingClub] = useState<boolean>(false);
    const [loadingNation, setLoadingNation] = useState<boolean>(false);
    const [loadingLeague, setLoadingLeague] = useState<boolean>(false);
    const [list, setList] = useState<FutCardPropDataTypes[] | null>(null);
    const [openList, setOpenList] = useState<boolean>(false);
    const [clubList, setClubList] = useState<ClubCard[] | null>(null);
    const [openClubList, setOpenClubList] = useState<boolean>(true);
    const [nationList, setNationList] = useState<NationCard[] | null>(null);
    const [openNationList, setOpenNationList] = useState<boolean>(true);
    const [leagueList, setLeagueList] = useState<LeagueCard[] | null>(null);
    const [openLeagueList, setOpenLeagueList] = useState<boolean>(true);
    const [brightnessValue, setBrightnessValue] = useState<number>(filterDetail.brightnessValue);
    const [contrastValue, setContrastValue] = useState<number>(filterDetail.contrastValue);
    const [saturationValue, setSaturationValue] = useState<number>(filterDetail.saturationValue);
    const playerListRef = useRef(null);
    const clubListRef = useRef(null);
    const nationListRef = useRef(null);
    const leagueListRef = useRef(null);


    useOutsideClick({
        ref: playerListRef,
        handler: () => setOpenList(false)
    })

    useOutsideClick({
        ref: clubListRef,
        handler: () => setOpenClubList(false)
    })

    useOutsideClick({
        ref: nationListRef,
        handler: () => setOpenNationList(false)
    })

    useOutsideClick({
        ref: leagueListRef,
        handler: () => setOpenLeagueList(false)
    })

    const handleChangeAttrTab = (value: string) => {
        setAttrTab(parseInt(value))
    }

    const handleChangeAttributes = ({value, attr}: { value: number, attr: string }) => {

        let updates: RATING = {...attributes}

        switch (attr) {
            case 'def':
                updates = {...updates, def: value};
                break;
            case 'dri':
                updates = {...updates, dri: value};
                break;
            case 'pac':
                updates = {...updates, pac: value};
                break;
            case 'pas':
                updates = {...updates, pas: value};
                break;
            case 'phy':
                updates = {...updates, phy: value};
                break;
            case 'sho':
                updates = {...updates, sho: value};
                break;
        }

        dispatch(cardCreatorAction.setAttributes(updates))
    }

    const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
        const name: string = e.target.value;
        dispatch(cardCreatorAction.setName(name))
    }

    const handleChangeClub = (data: ClubCard) => {
        setOpenClubList(false);
        dispatch(cardCreatorAction.setClub(data))
    }

    const handleChangeLeague = (data: LeagueCard) => {
        setOpenLeagueList(false)
        dispatch(cardCreatorAction.setLeague(data.img))
    }

    const handleChangeNation = (data: NationCard) => {
        setOpenNationList(false);
        dispatch(cardCreatorAction.setNation(data.img))
    }

    const handleChangeRating = (e: ChangeEvent<HTMLInputElement>) => {
        const rating: number = parseInt(e.target.value);
        dispatch(cardCreatorAction.setOverallRating(rating))
    }

    const handleChangeImageFade = (value: ImageFadeType) => {
        dispatch(cardCreatorAction.setImageFade(value))
    }

    const handleChangeImageFilter = (value: ImageFilterType) => {
        dispatch(cardCreatorAction.setImageFilter(value))
    }

    const handleChangePosition = (value: Preposition_Type) => {
        dispatch(cardCreatorAction.setPosition(value))
    }

    const handleChangeImageType = (value: string) => {
        dispatch(cardCreatorAction.setImageType(parseInt(value)));
    }

    const searchPlayers = async (value: string) => {
        setList(null);
        if (value.trim().length !== 0) {
            setLoadingPlayer(true)
            setOpenList(false)
            const res: FutCardPropDataTypes[] | null = await ToolService.searchPlayerByName({
                name: value,
                year: fetchYear
            })
            setList(res)
            setOpenList(true)
            setLoadingPlayer(false);
        }
    }

    const searchClub = async (value: string) => {
        setClubList(null);

        if (value.trim().length !== 0) {
            setLoadingClub(true);
            setOpenClubList(false);
            const res: ClubCard[] | null = await ToolService.searchClubByName({name: value.toLocaleLowerCase()})
            setClubList(res);
            setOpenClubList(true)
            setLoadingClub(false);
        }
    }

    const searchNation = async (value: string) => {
        setNationList(null);

        if (value.trim().length !== 0) {
            setLoadingNation(true);
            setOpenNationList(false);
            const res: NationCard[] | null = await ToolService.searchNationByName({name: value})
            setNationList(res);
            setOpenNationList(true)
            setLoadingNation(false);
        }
    }

    const searchLeague = async (value: string) => {
        setLeagueList(null);

        if (value.trim().length !== 0) {
            setLoadingLeague(true);
            setOpenLeagueList(false);
            const res: LeagueCard[] | null = await ToolService.searchLeagueByName({name: value})
            setLeagueList(res);
            setOpenLeagueList(true)
            setLoadingLeague(false);
        }
    }

    const handleChangeCardData = (data: FutCardPropDataTypes) => {
        const avatar: string = data.player_img_url;
        const dynamic: boolean = data.isdynamicportrait;
        dispatch(cardCreatorAction.setPlayerAvatarImage(avatar))
        dispatch(cardCreatorAction.setDynamicImage(dynamic));
        setOpenList(false);
    }

    const handleCustomPlayerImage = (data: string) => {
        dispatch(cardCreatorAction.setPlayerAvatarImage(data))
    }

    const handleToggleDynamic = () => {
        dispatch(cardCreatorAction.setDynamicImage(!image.isDynamic));
    }

    const handleChangeImageSize = (e: ChangeEvent<HTMLInputElement>) => {
        const size: number = parseInt(e.target.value);
        dispatch(cardCreatorAction.setImageSize(size));
    }

    return <table className="w-full ">
        <tbody>
        <tr>
            <td className="w-1/4 py-2">
                <div className="w-full flex justify-end font-semibold">
                    Image:
                </div>
            </td>
            <td className="pl-2 py-2">
                <div className="w-full flex flex-col gap-2"
                >
                    <div className="w-full flex gap-3">

                    </div>

                    <RadioGroup onChange={handleChangeImageType} value={image.type.toString()}>
                        <Stack direction='row'>
                            <Radio value={CARD_CREATOR_PLAYER_DATA_IMAGE_TYPE.PLAYER_IMAGE.toString()}>
                                <div className="font-semibold">Use a player Image</div>
                            </Radio>
                            <Radio value={CARD_CREATOR_PLAYER_DATA_IMAGE_TYPE.CUSTOM_IMAG.toString()}>
                                <div className="font-semibold">Enter a custom image url</div>
                            </Radio>
                            <Radio value={CARD_CREATOR_PLAYER_DATA_IMAGE_TYPE.UPLOAD_IMAGE.toString()}>
                                <div className="font-semibold">Upload an image</div>
                            </Radio>
                        </Stack>
                    </RadioGroup>


                    {
                        image.type === CARD_CREATOR_PLAYER_DATA_IMAGE_TYPE.PLAYER_IMAGE && (
                            <div className="w-full flex gap-1">
                                <div className="flex-grow">
                                    <div className="flex-grow">
                                        <AppInput
                                            placeholder="Type a player name"
                                            onFinishTyping={(value) => searchPlayers(value as string)}
                                            loading={loadingPlayer}
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
                                    <MenuButton fontWeight="normal" className="text-start " as={Button}
                                                rightIcon={<IoIosArrowDown/>}
                                                variant="outline"
                                                colorScheme='gray'>
                                        FIFA {fetchYear}
                                    </MenuButton>

                                    <MenuList>
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
                        )
                    }

                    {
                        image.type === CARD_CREATOR_PLAYER_DATA_IMAGE_TYPE.CUSTOM_IMAG && (
                            <div className="w-full flex flex-col gap-2">
                                <div className="flex gap-2 items-center">
                                    <div className="font-semibold min-w-16 flex justify-end">URL</div>
                                    <div className="flex-grow flex flex-col">
                                        <AppInput
                                            placeholder="https://"
                                            onFinishTyping={(value) => handleCustomPlayerImage(value as string)}
                                        />
                                    </div>
                                </div>

                                <div className="flex gap-2 items-center">
                                    <div className="font-semibold min-w-16 flex justify-end">Size</div>
                                    <div className="flex-grow flex items-center gap-1">
                                        <AppInput
                                            type="number"
                                            min={0}
                                            placeholder=""
                                            value={image.size}
                                            onChange={handleChangeImageSize}
                                        />
                                        <div className="font-semibold">% {image.size}</div>
                                    </div>
                                </div>


                            </div>
                        )
                    }

                    <div className="flex gap-1">
                        <AppButton active={image.isDynamic} onClick={() => handleToggleDynamic()}>Dynamic
                            Image</AppButton>
                        <Button fontWeight="normal" colorScheme="gray" variant="outline">Clip Image</Button>
                    </div>
                </div>
            </td>
        </tr>


        <tr>
            <td className="w-1/4 py-2">
                <div className="w-full flex justify-end font-semibold">
                    Image Fade:
                </div>
            </td>
            <td className="pl-2 py-2">
                <div className="w-full flex">
                    <ButtonGroup colorScheme="gray" variant="outline" isAttached>
                        <AppButton active={imageFade === IMAGE_FADE.NO_FADE}
                                   onClick={() => handleChangeImageFade(IMAGE_FADE.NO_FADE)}>No Fade</AppButton>
                        <AppButton active={imageFade === IMAGE_FADE.NEW_FADE}
                                   onClick={() => handleChangeImageFade(IMAGE_FADE.NEW_FADE)}>New Fade</AppButton>
                        <AppButton active={imageFade === IMAGE_FADE.OLD_FADE}
                                   onClick={() => handleChangeImageFade(IMAGE_FADE.OLD_FADE)}>Old Fade</AppButton>
                    </ButtonGroup>
                </div>
            </td>
        </tr>


        <tr>
            <td className="w-1/4 py-2">
                <div className="w-full flex justify-end font-semibold">
                    Image Filter:
                </div>
            </td>
            <td className="pl-2 py-2">
                <div className="w-full flex flex-col">
                    <ButtonGroup colorScheme="gray" variant="outline" isAttached>
                        <AppButton active={imageFilter === IMAGE_FILTER.NO_FILTER}
                                   onClick={() => handleChangeImageFilter(IMAGE_FILTER.NO_FILTER)}>No Filter</AppButton>
                        <AppButton active={imageFilter === IMAGE_FILTER.ICON_FILTER}
                                   onClick={() => handleChangeImageFilter(IMAGE_FILTER.ICON_FILTER)}>Icon
                            Filter</AppButton>
                        <AppButton active={imageFilter === IMAGE_FILTER.CUSTOM_FILTER}
                                   onClick={() => handleChangeImageFilter(IMAGE_FILTER.CUSTOM_FILTER)}>Custom
                            Filter</AppButton>
                    </ButtonGroup>

                    <CustomImageFilterSetting/>
                </div>
            </td>
        </tr>


        <tr>
            <td className="w-1/4 py-2">
                <div className="w-full flex justify-end font-semibold">
                    Name:
                </div>
            </td>
            <td className="pl-2 py-2">
                <div className="w-full ">
                    <AppInput className="font-light" onChange={handleChangeName} value={name}/>
                </div>
            </td>
        </tr>


        <tr>
            <td className="w-1/4 py-2">
                <div className="w-full flex justify-end font-semibold">
                    Rating:
                </div>
            </td>
            <td className="pl-2 py-2">
                <div className="flex"
                >
                    <AppInput className="font-light" onChange={handleChangeRating} value={overallRating} type="number"
                              min={0} max={100}/>
                </div>
            </td>
        </tr>


        <tr>
            <td className="w-1/4 py-2">
                <div className="w-full flex justify-end font-semibold">
                    Position:
                </div>
            </td>
            <td className="pl-2 py-2">
                <div className="w-full flex items-center">
                    <Menu>
                        <MenuButton fontWeight="normal" fontSize="sm" as={Button} rightIcon={<IoIosArrowDown/>}
                                    variant="outline"
                                    colorScheme='gray'>
                            {position}
                        </MenuButton>

                        <Portal>
                            <MenuList zIndex={99} maxHeight="200px" overflowY="auto">
                                {(Object.values<Preposition_Type>(ALL_PLAYER_POSITION)).map((value: Preposition_Type) => (
                                    <MenuItem key={value} fontWeight="normal" fontSize="sm"
                                              onClick={() => handleChangePosition(value)}>
                                        {value}
                                    </MenuItem>
                                ))}
                            </MenuList>
                        </Portal>
                    </Menu>
                </div>
            </td>
        </tr>

        <tr>
            <td className="w-1/4 py-2">
                <div className="w-full flex justify-end font-semibold">
                    Club:
                </div>
            </td>
            <td className="pl-2 py-2">
                <div className="w-full flex flex-col">
                    <div className="text-sm">Search by name or enter custom url</div>
                    <div className="flex-grow">
                        <div className="flex-grow">
                            <AppInput
                                placeholder="Club"
                                onFinishTyping={(value) => searchClub(value as string)}
                                loading={loadingClub}
                            />
                        </div>
                        <div className="flex relative w-full z-[99]">
                            <div
                                className="absolute bg-gray-100 flex flex-col w-full top-0 max-h-[200px] overflow-y-auto border-l border-r"
                                ref={clubListRef}>
                                {clubList !== null && openClubList && clubList.map((data: ClubCard, index: number) =>
                                    (<SearchClubCard key={data?.id + '' + index} data={data}
                                                     onClick={() => handleChangeClub(data)}/>))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </td>
        </tr>

        <tr>
            <td className="w-1/4 py-2">
                <div className="w-full flex justify-end font-semibold">
                    League:
                </div>
            </td>
            <td className="pl-2 py-2">
                <div className="w-full flex flex-col">
                    <div className="text-sm">Search by name or enter custom url</div>
                    <div className="flex-grow">
                        <div className="flex-grow">
                            <AppInput
                                placeholder="League"
                                onFinishTyping={(value) => searchLeague(value as string)}
                                loading={loadingLeague}
                            />
                        </div>
                        <div className="flex relative w-full z-[99]">
                            <div
                                className="absolute bg-gray-100 flex flex-col w-full top-0 max-h-[200px] overflow-y-auto border-l border-r"
                                ref={leagueListRef}>
                                {leagueList !== null && openLeagueList && leagueList.map((data: LeagueCard, index: number) =>
                                    (<SearchLeagueCard key={data?.id + '' + index} data={data}
                                                       onClick={() => handleChangeLeague(data)}/>))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </td>
        </tr>

        <tr>
            <td className="w-1/4 py-2">
                <div className="w-full flex justify-end font-semibold">
                    Nation:
                </div>
            </td>
            <td className="pl-2 py-2">
                <div className="w-full flex flex-col">
                    <div className="text-sm">Search by name or enter custom url</div>
                    <div className="flex-grow">
                        <div className="flex-grow">
                            <AppInput
                                placeholder="Nation"
                                onFinishTyping={(value) => searchNation(value as string)}
                                loading={loadingNation}
                            />
                        </div>
                        <div className="flex relative w-full z-[99]">
                            <div
                                className="absolute bg-gray-100 flex flex-col w-full top-0 max-h-[200px] overflow-y-auto border-l border-r"
                                ref={nationListRef}>
                                {nationList !== null && openNationList && nationList.map((data: NationCard, index: number) =>
                                    (<SearchNationCard key={data?.id + '' + index} data={data}
                                                       onClick={() => handleChangeNation(data)}/>))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </td>
        </tr>

        <tr>
            <td className="w-1/4 py-2">
                <div className="w-full flex justify-end font-semibold">
                    Attributes:
                </div>
            </td>
            <td className="pl-2 py-2">
                <div className="w-full flex flex-col gap-2">
                    <RadioGroup value={attrTab.toString()} onChange={(value) => handleChangeAttrTab(value)}>
                        <Stack direction='row'>
                            <Radio value={"0"}>
                                <div className="font-semibold">Directly enter in FUT attributes</div>
                            </Radio>
                            <Radio value={"1"}>
                                <div className="font-semibold">Calculate from full attributes</div>
                            </Radio>
                        </Stack>
                    </RadioGroup>

                    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
                        <AppInput className="font-light" onChange={({target: {value}}) => handleChangeAttributes({
                            value: parseInt(value),
                            attr: 'pac'
                        })} value={attributes.pac} type="number" min={0} max={100}/>
                        <AppInput className="font-light" value="PAC" readOnly/>

                        <AppInput className="font-light" onChange={({target: {value}}) => handleChangeAttributes({
                            value: parseInt(value),
                            attr: 'dri'
                        })} value={attributes.dri} type="number" min={0} max={100}/>
                        <AppInput className="font-light" value="DRI" readOnly/>

                        <AppInput className="font-light" onChange={({target: {value}}) => handleChangeAttributes({
                            value: parseInt(value),
                            attr: 'sho'
                        })} value={attributes.sho} type="number" min={0} max={100}/>
                        <AppInput className="font-light" value="SHO" readOnly/>

                        <AppInput className="font-light" onChange={({target: {value}}) => handleChangeAttributes({
                            value: parseInt(value),
                            attr: 'def'
                        })} value={attributes.def} type="number" min={0} max={100}/>
                        <AppInput className="font-light" value="DEF" readOnly/>

                        <AppInput className="font-light" onChange={({target: {value}}) => handleChangeAttributes({
                            value: parseInt(value),
                            attr: 'pas'
                        })} value={attributes.pas} type="number" min={0} max={100}/>
                        <AppInput className="font-light" value="PAS" readOnly/>

                        <AppInput className="font-light" onChange={({target: {value}}) => handleChangeAttributes({
                            value: parseInt(value),
                            attr: 'phy'
                        })} value={attributes.phy} type="number" min={0} max={100}/>
                        <AppInput className="font-light" value="PHY" readOnly/>
                    </div>
                </div>
            </td>
        </tr>
        </tbody>
    </table>
}