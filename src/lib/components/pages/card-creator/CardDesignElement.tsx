'use client'

import {ChangeEvent, useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {Button, ButtonGroup, Menu, MenuButton, MenuItem, MenuList, Portal} from '@chakra-ui/react'
import {IoIosArrowDown} from "react-icons/io";
import Image from "next/image";
import type {
    CardCreatorSliceType,
    CardFormatType,
    ChemistryPointType,
    ChemistryType,
    FeatureIconType,
    PlayStyleType,
    OverlayType,
    YearType,
    CardColorType
} from "@/lib/types";
import AppButton from "@/lib/components/core/AppButton";
import {cardCreatorAction} from "@/store/tools/cardCreatorSlice";
import {useAppDispatch} from "@/store";
import {
    CARD_FORMAT,
    CHEMISTRY_POINTS,
    CHEMISTRY_STYLE,
    FEATURE_ICON,
    OVERLAY,
    PLAY_STYLE,
    YEAR_VALUES
} from "@/lib/utils/enums";
import OfficialCardModal from "@/lib/components/pages/card-creator/OfficialCardModal";
import AppInput from "@/lib/components/core/AppInput";
import {capitalizeFirstLetters} from "@/lib/utils";

export default function CardDesignElement() {

    const dispatch = useAppDispatch();

    const {
        loading,
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
        }
    } = useSelector(({cardCreator} : {cardCreator: CardCreatorSliceType}) => cardCreator);

    const [isOpenModal, setOpenModal] = useState<boolean>(false);
    const [shineValid, setShineValid] = useState<boolean>(true);
    const [curvedShineValid, setCurvedShineValid] = useState<boolean>(true);
    const [overlayValid, setOverlayValid] = useState<boolean>(true);
    const [featureIconValid, setFeatureIconValid] = useState<boolean>(true);
    const [squadChemistryValid, setSquadChemistryValid] = useState<boolean>(true);
    const [chemistryStyleValid, setChemistryStyleValid] = useState<boolean>(true);
    const [playStyleValid, setPlayStyleValid] = useState<boolean>(true);
    const [firstOwnerValid, setFirstOwnerValid] = useState<boolean>(true);
    const [playerFeaturesValid, setPlayerFeaturesValid] = useState<boolean>(true);
    const [cardFormatValid, setCardFormatValid] = useState<boolean>(true);


    useEffect(() => {

        //init
        setShineValid(true);
        setCurvedShineValid(true);
        setOverlayValid(true)
        setOverlayValid(true)
        setFeatureIconValid(true)
        setSquadChemistryValid(true)
        setChemistryStyleValid(true)
        setPlayStyleValid(true)
        setFirstOwnerValid(true)
        setPlayerFeaturesValid(true)
        setCardFormatValid(true)

        switch(year){
            case YEAR_VALUES['23']: {
                setPlayStyleValid(false);
                dispatch(cardCreatorAction.setCardExtraPlayStyle(false));
                break;
            }
            case YEAR_VALUES['22']:{
                setPlayStyleValid(false);
                setSquadChemistryValid(false);
                dispatch(cardCreatorAction.setCardExtraPlayStyle(false));
                dispatch(cardCreatorAction.setCardExtraSquadChemistry(false));
                break;
            }
            case YEAR_VALUES['21']:{
                setPlayStyleValid(false);
                setSquadChemistryValid(false);
                dispatch(cardCreatorAction.setCardExtraPlayStyle(false));
                dispatch(cardCreatorAction.setCardExtraSquadChemistry(false));
                break;
            }
            case YEAR_VALUES['20']:{
                setPlayStyleValid(false);
                setSquadChemistryValid(false);
                dispatch(cardCreatorAction.setCardExtraPlayStyle(false));
                dispatch(cardCreatorAction.setCardExtraSquadChemistry(false));
                break;
            }
            case YEAR_VALUES['19']:{
                setPlayStyleValid(false);
                setSquadChemistryValid(false);
                dispatch(cardCreatorAction.setCardExtraPlayStyle(false));
                dispatch(cardCreatorAction.setCardExtraSquadChemistry(false));
                break;
            }
            case YEAR_VALUES['18']:{
                setPlayStyleValid(false);
                setSquadChemistryValid(false);
                setCurvedShineValid(false);
                dispatch(cardCreatorAction.setCardExtraPlayStyle(false));
                dispatch(cardCreatorAction.setCardExtraSquadChemistry(false));
                dispatch(cardCreatorAction.setCardExtraCurvedShine(false));
                break;
            }

            case YEAR_VALUES['17']:{
                setPlayStyleValid(false);
                setSquadChemistryValid(false);
                setCurvedShineValid(false);
                dispatch(cardCreatorAction.setCardExtraPlayStyle(false));
                dispatch(cardCreatorAction.setCardExtraSquadChemistry(false));
                dispatch(cardCreatorAction.setCardExtraCurvedShine(false));
                break;
            }

            case YEAR_VALUES['16']:{
                setPlayStyleValid(false);
                setSquadChemistryValid(false);
                setCurvedShineValid(false);
                setCardFormatValid(false);
                dispatch(cardCreatorAction.setCardExtraPlayStyle(false));
                dispatch(cardCreatorAction.setCardExtraSquadChemistry(false));
                dispatch(cardCreatorAction.setCardExtraCurvedShine(false));
                dispatch(cardCreatorAction.setCardFormat(CARD_FORMAT.FULL))
                break;
            }
        }
    }, [dispatch, year])



    const handleChangeCardFormat = (value:CardFormatType) => {
        dispatch(cardCreatorAction.setCardFormat(value))
    }

    const handleChangeFeatureIcon = (value:FeatureIconType) => {
        dispatch(cardCreatorAction.setFeatureIcon(value))
    }

    const handleChangeChemistryPoints = (value:ChemistryPointType) => {
        dispatch(cardCreatorAction.setChemistryPoints(value))
    }

    const handleChangeChemistryStyle = (value:ChemistryType) => {
        dispatch(cardCreatorAction.setCardChemistryStyle(value))
    }

    const handleChangePlayStyle = (index: number, value:PlayStyleType) => {
        dispatch(cardCreatorAction.setPlayStyle({index, value}))
    }

    const handleChangeOverlay = (value:OverlayType) => {
        dispatch(cardCreatorAction.setOverlay(value))
    }

    const handleChangeContracts = (e: ChangeEvent<HTMLInputElement>) => {

        const contracts:number = parseInt(e.target.value);
        dispatch(cardCreatorAction.setOverlayContracts(contracts))
    }

    const handleChangeYear = (value:YearType) => {
        dispatch(cardCreatorAction.setYear(value))
    }

    const handleChangeCardColor = (data:CardColorType) => {
        dispatch(cardCreatorAction.setCardColor(data))
        setOpenModal(false)
    }

    return <table className="w-full ">

        <tbody>
        <tr>
            <td className="w-1/4 py-2">
                <div className="w-full flex justify-end font-semibold">
                    Year:
                </div>
            </td>
            <td className="pl-2 py-2">
                <div className="w-full flex"
                >
                    <Menu>
                        <MenuButton fontWeight="normal" fontSize="sm" as={Button} rightIcon={<IoIosArrowDown/>}
                                    variant="outline"
                                    colorScheme='gray'>
                            EAFC {year}
                        </MenuButton>

                        <MenuList>
                            <MenuItem fontWeight="normal" fontSize="sm" onClick = {() => handleChangeYear(YEAR_VALUES['24'])}> FIFA 24 </MenuItem>
                            <MenuItem fontWeight="normal" fontSize="sm" onClick = {() => handleChangeYear(YEAR_VALUES['23'])}> FIFA 23 </MenuItem>
                            <MenuItem fontWeight="normal" fontSize="sm" onClick = {() => handleChangeYear(YEAR_VALUES['22'])}> FIFA 22 </MenuItem>
                            <MenuItem fontWeight="normal" fontSize="sm" onClick = {() => handleChangeYear(YEAR_VALUES['21'])}> FIFA 21 </MenuItem>
                            <MenuItem fontWeight="normal" fontSize="sm" onClick = {() => handleChangeYear(YEAR_VALUES['20'])}> FIFA 20 </MenuItem>
                            <MenuItem fontWeight="normal" fontSize="sm" onClick = {() => handleChangeYear(YEAR_VALUES['19'])}> FIFA 19 </MenuItem>
                            <MenuItem fontWeight="normal" fontSize="sm" onClick = {() => handleChangeYear(YEAR_VALUES['18'])}> FIFA 18 </MenuItem>
                            <MenuItem fontWeight="normal" fontSize="sm" onClick = {() => handleChangeYear(YEAR_VALUES['17'])}> FIFA 17 </MenuItem>
                            <MenuItem fontWeight="normal" fontSize="sm" onClick = {() => handleChangeYear(YEAR_VALUES['16'])}> FIFA 16 </MenuItem>
                        </MenuList>
                    </Menu>
                </div>
            </td>
        </tr>


        <tr>
            <td className="w-1/4 py-2">
                <div className="w-full flex justify-end font-semibold">
                    Card Color:
                </div>
            </td>
            <td className="pl-2 py-2">
                <div className="w-full flex items-center gap-1">
                    <div className="w-[44.5px] h-[67.5px]  mr-2">
                        <Image width = {0} height = {0} alt = "" src = { cardColor !== null ?  cardColor.background_img_url_l : '' }  className = "w-12"/>
                    </div>
                    <Button fontWeight="normal" fontSize="sm" variant="outline" colorScheme="gray" onClick = {() => setOpenModal(true)}>
                        Official Cards
                    </Button>
                    <Button fontWeight="normal" fontSize="sm" variant="outline" colorScheme="gray">
                        Custom Designs
                    </Button>
                    <OfficialCardModal isOpen={isOpenModal} year = {year} onClose={() => setOpenModal(false)} onSelect = {handleChangeCardColor}/>
                </div>
            </td>
        </tr>


        {
            cardFormatValid && (
                <tr>
                    <td className="w-1/4 py-2">
                        <div className="w-full flex justify-end font-semibold">
                            Card Format:
                        </div>
                    </td>
                    <td className="pl-2 py-2">
                        <div className="w-full flex items-center">
                            <ButtonGroup colorScheme="gray" variant="outline" isAttached>
                                <AppButton active={cardFormat === CARD_FORMAT.FULL} onClick={() => handleChangeCardFormat(CARD_FORMAT.FULL)}>Full</AppButton>
                                <AppButton active={cardFormat === CARD_FORMAT.MINI} onClick={() => handleChangeCardFormat(CARD_FORMAT.MINI)}>Mini</AppButton>
                            </ButtonGroup>
                        </div>
                    </td>
                </tr>
            )
        }


        <tr>
            <td className="w-1/4 py-2">
                <div className="w-full flex justify-end font-semibold">
                    Card Extras:
                </div>
            </td>
            <td className="pl-2 py-2">
                <div className="w-full flex items-center gap-1 flex-wrap">
                    <AppButton
                        active={cardExtras.shine}
                        disabled={!shineValid}
                        onClick={() => {
                            dispatch(cardCreatorAction.setCardExtraShine(!cardExtras.shine));
                        }}
                    >
                        Shine
                    </AppButton>

                    <AppButton
                        active={cardExtras.curvedShine}
                        disabled={!curvedShineValid}
                        onClick={() => {
                            dispatch(cardCreatorAction.setCardExtraCurvedShine(!cardExtras.curvedShine));
                        }}
                    >
                        Curved Shine
                    </AppButton>

                    <AppButton
                        active={cardExtras.overlay}
                        disabled={!overlayValid}
                        onClick={() => {
                            dispatch(cardCreatorAction.setCardExtraOverlay(!cardExtras.overlay));
                        }}
                    >
                        Overlay
                    </AppButton>

                    <AppButton
                        active={cardExtras.featureIcon}
                        disabled={!featureIconValid}
                        onClick={() => {
                            dispatch(cardCreatorAction.setCardExtraFeatureIcon(!cardExtras.featureIcon));
                        }}
                    >
                        Feature Icon
                    </AppButton>

                    <AppButton
                        active={cardExtras.squadChemistry}
                        disabled={!squadChemistryValid}
                        onClick={() => {
                            dispatch(cardCreatorAction.setCardExtraSquadChemistry(!cardExtras.squadChemistry));
                        }}
                    >
                        Squad Chemistry
                    </AppButton>

                    <AppButton
                        active={cardExtras.chemistryStyle}
                        disabled={!chemistryStyleValid}
                        onClick={() => {
                            dispatch(cardCreatorAction.setCardExtraChemistryStyle(!cardExtras.chemistryStyle));
                        }}
                    >
                        Chemistry Style
                    </AppButton>

                    <AppButton
                        active={cardExtras.playStyle}
                        disabled={!playStyleValid}
                        onClick={() => {
                            dispatch(cardCreatorAction.setCardExtraPlayStyle(!cardExtras.playStyle));
                        }}
                    >
                        Play Style
                    </AppButton>

                    <AppButton
                        active={cardExtras.firstOwner}
                        disabled={!firstOwnerValid}
                        onClick={() => {
                            dispatch(cardCreatorAction.setCardExtraFirstOwner(!cardExtras.firstOwner));
                        }}
                    >
                        First Owner
                    </AppButton>

                    <AppButton
                        active={cardExtras.playerFeatures}
                        disabled={!playerFeaturesValid}
                        onClick={() => {
                            dispatch(cardCreatorAction.setCardExtraPlayerFeatures(!cardExtras.playerFeatures));
                        }}
                    >
                        Workrates, Skill Moves, Weak Foot
                    </AppButton>
                    {/*<AppButton active={cardExtras.playerName} onClick={() => {dispatch(cardCreatorAction.togglePlayerName())} }>Player Name</AppButton>*/}
                </div>
            </td>
        </tr>


        { cardExtras.overlay && (<tr>
            <td className="w-1/4 py-2">
                <div className="w-full flex justify-end">
                    Overlay:
                </div>
            </td>
            <td className="pl-2 py-2">
                <div className="w-full flex">
                    <Menu>
                        <MenuButton fontWeight="normal" fontSize="sm" className="w-full text-start " as={Button}
                                    rightIcon={<IoIosArrowDown/>}
                                    variant="outline"
                                    colorScheme='gray'>
                            {overlay}
                        </MenuButton>

                        <MenuList className="w-full">
                            <MenuItem fontWeight="normal" fontSize="sm" onClick = {() => handleChangeOverlay(OVERLAY.EXPIRED)}> Expired </MenuItem>
                            <MenuItem fontWeight="normal" fontSize="sm" onClick = {() => handleChangeOverlay(OVERLAY.LOAN)}> Loan </MenuItem>
                            <MenuItem fontWeight="normal" fontSize="sm" onClick = {() => handleChangeOverlay(OVERLAY.OUTBID)}> Outbid </MenuItem>
                            <MenuItem fontWeight="normal" fontSize="sm" onClick = {() => handleChangeOverlay(OVERLAY.WINNING)}> Winning </MenuItem>
                            <MenuItem fontWeight="normal" fontSize="sm" onClick = {() => handleChangeOverlay(OVERLAY.WON)}> Won </MenuItem>
                        </MenuList>
                    </Menu>
                </div>
            </td>
        </tr>)}


        { cardExtras.overlay && overlay === OVERLAY.LOAN && (<tr>
            <td className="w-1/4 py-2">
                <div className="w-full flex justify-end">
                    Contracts:
                </div>
            </td>
            <td className="pl-2 py-2">
                <div className="w-full flex">
                    <AppInput className="font-light" onChange={handleChangeContracts} value={overlayContracts} type="number" min = {0} max = {100}/>
                </div>
            </td>
        </tr>)}


        { cardExtras.featureIcon && featureIcon && (<tr>
            <td className="w-1/4 py-2">
                <div className="w-full flex justify-end">
                    Feature Icon:
                </div>
            </td>
            <td className="pl-2 py-2">
                <div className="w-full flex items-center">
                    <ButtonGroup colorScheme="gray" variant="outline" isAttached>
                        <AppButton active={featureIcon === FEATURE_ICON.STAR} onClick={() => handleChangeFeatureIcon(FEATURE_ICON.STAR)}>Star</AppButton>
                        <AppButton active={featureIcon === FEATURE_ICON.TWIN} onClick={() => handleChangeFeatureIcon(FEATURE_ICON.TWIN)}>Twin</AppButton>
                    </ButtonGroup>
                </div>
            </td>
        </tr>)}


        {cardExtras.squadChemistry && (<tr>
            <td className="w-1/4 py-2">
                <div className="w-full flex justify-end">
                    Chemistry Points:
                </div>
            </td>
            <td className="pl-2 py-2">
                <div className="w-full flex items-center">
                    <Menu>
                        <MenuButton fontWeight="normal" fontSize="sm" as={Button} rightIcon={<IoIosArrowDown/>}
                                    variant="outline"
                                    colorScheme='gray'>
                            {chemistryPoints}
                        </MenuButton>

                        <MenuList>
                            <MenuItem fontWeight="normal" fontSize="sm" onClick = {() => handleChangeChemistryPoints(CHEMISTRY_POINTS.ONE)}> 1 </MenuItem>
                            <MenuItem fontWeight="normal" fontSize="sm" onClick = {() => handleChangeChemistryPoints(CHEMISTRY_POINTS.TWO)}> 2 </MenuItem>
                            <MenuItem fontWeight="normal" fontSize="sm" onClick = {() => handleChangeChemistryPoints(CHEMISTRY_POINTS.THREE)}> 3 </MenuItem>
                            <MenuItem fontWeight="normal" fontSize="sm" onClick = {() => handleChangeChemistryPoints(CHEMISTRY_POINTS.GREEN)}> Green </MenuItem>
                            <MenuItem fontWeight="normal" fontSize="sm" onClick = {() => handleChangeChemistryPoints(CHEMISTRY_POINTS.RED)}> Red </MenuItem>
                            <MenuItem fontWeight="normal" fontSize="sm" onClick = {() => handleChangeChemistryPoints(CHEMISTRY_POINTS.OUT_OF_POSITION)}> Out of position </MenuItem>
                        </MenuList>
                    </Menu>
                </div>
            </td>
        </tr>)}


        {cardExtras.chemistryStyle && (<tr>
            <td className="w-1/4 py-2">
                <div className="w-full flex justify-end font-semibold">
                    Chemistry Style:
                </div>
            </td>
            <td className="pl-2 py-2 relative">
                <div className="w-full flex items-center">
                    <Menu>
                        <MenuButton fontWeight="normal" fontSize="sm" as={Button} rightIcon={<IoIosArrowDown/>}
                                    variant="outline"
                                    colorScheme='gray'>
                            {capitalizeFirstLetters(chemistryStyle)}
                        </MenuButton>

                        <Portal>
                            <MenuList zIndex = {99} maxHeight="400px" overflowY="auto">
                                {(Object.values<ChemistryType>(CHEMISTRY_STYLE)).map((value: ChemistryType) => (
                                    <MenuItem key={value} fontWeight="normal" fontSize="sm" onClick={() => handleChangeChemistryStyle(value)}>
                                        {capitalizeFirstLetters(value)}
                                    </MenuItem>
                                ))}
                            </MenuList>
                        </Portal>
                    </Menu>
                </div>
            </td>
        </tr>)}


        {cardExtras.playStyle && (<tr>
            <td className="w-1/4 py-2">
                <div className="w-full flex justify-end">
                    Play style:
                </div>
            </td>
            <td className="pl-2 py-2">
                <div className="w-full flex items-center flex-wrap gap-1">
                    {
                        playStyle.map((style: PlayStyleType, index:number) => (
                            <Menu key = {style + index}>
                                <MenuButton fontWeight="normal" fontSize="sm" as={Button} rightIcon={<IoIosArrowDown/>}
                                            variant="outline"
                                            colorScheme='gray'>
                                    {capitalizeFirstLetters(style)}
                                </MenuButton>

                                <Portal>
                                    <MenuList zIndex = {99} maxHeight="400px" overflowY="auto">
                                        {(Object.values<PlayStyleType>(PLAY_STYLE)).map((value: PlayStyleType) => (
                                            <MenuItem key= {`${style}${value}${index}`} fontWeight="normal" fontSize="sm" onClick={() => handleChangePlayStyle(index, value)}>
                                                {capitalizeFirstLetters(value)}
                                            </MenuItem>
                                        ))}
                                    </MenuList>
                                </Portal>
                            </Menu>
                        ))
                    }

                </div>
            </td>
        </tr>)}
        </tbody>
    </table>
}