import type {PayloadAction} from "@reduxjs/toolkit";
import {createSlice} from "@reduxjs/toolkit";
import type {
    CardColorType,
    CardCreatorSliceType,
    CardFormatType,
    ChemistryPointType,
    ChemistryType,
    ClubCard,
    FeatureIconType,
    ImageFadeType,
    ImageFilterType,
    OverlayType,
    PlayerFeatureType,
    Preposition_Type,
    RATING,
    SetPlayStylePropType,
    YearType
} from "@/lib/types";
import {ImageFilterDetail} from "@/lib/types";

import {
    ADVANCED_LEVEL,
    ALL_PLAYER_POSITION,
    CARD_CREATOR_PLAYER_DATA_IMAGE_TYPE,
    CARD_FORMAT,
    CHEMISTRY_POINTS,
    CHEMISTRY_STYLE,
    FEATURE_ICON,
    IMAGE_FADE,
    IMAGE_FILTER,
    OVERLAY,
    PLAY_STYLE,
    STANDARD_LEVEL,
    YEAR_VALUES
} from "@/lib/utils/enums";
import {fetchPlayerData} from "@/store/player/playerSlice";

const initialState: CardCreatorSliceType = {
    loading: false,
    cardDesign: {
        year: YEAR_VALUES['24'],
        cardColor: null,
        cardFormat: CARD_FORMAT.FULL,
        cardExtras: {
            shine: false,
            curvedShine: false,
            overlay: false,
            featureIcon: false,
            squadChemistry: false,
            chemistryStyle: true,
            playStyle: true,
            firstOwner: false,
            playerFeatures: true,
            playerName: false
        },
        overlay: OVERLAY.EXPIRED,
        overlayContracts: 99,
        featureIcon: FEATURE_ICON.STAR,
        chemistryPoints: CHEMISTRY_POINTS.ONE,
        chemistryStyle: CHEMISTRY_STYLE.BASIC,
        playStyle: [PLAY_STYLE.NONE, PLAY_STYLE.NONE, PLAY_STYLE.NONE, PLAY_STYLE.NONE],
        playerFeatures: {
            attWorkRate: STANDARD_LEVEL.LOW,
            defWorkRate: STANDARD_LEVEL.LOW,
            skillMoves: ADVANCED_LEVEL.LOW,
            weakFoot: ADVANCED_LEVEL.LOW
        }

    },
    playerData: {
        image: {
            type: CARD_CREATOR_PLAYER_DATA_IMAGE_TYPE.PLAYER_IMAGE,
            url: '',
            size: 100,
            isDynamic: false,
            clipEdges: false,
        },
        imageFade: IMAGE_FADE.NO_FADE,
        imageFilter: IMAGE_FILTER.NO_FILTER,
        filterDetail: {
            saturation: false,
            brightness: false,
            contrast: false,
            sepia: false,
            grayscale: false,
            blackAndWhite: false,
            blur: false,
            hueRotate: false,
            invert: false,

            brightnessValue: 0.5,
            contrastValue: 0.5,
            saturationValue: 0,
            grayscaleValue: 0,
            sepiaValue: 0,
            blurValue: 0,
            hueRotateValue: 0,
            invertValue: 0,
        },
        newFade: '#ffffff',
        name: '',
        overallRating: 0,
        position: ALL_PLAYER_POSITION[0] ?? null,
        club: {
            id: 0,
            img: '',
            label: '',
            rating: 0
        },
        league: '',
        nation: '',
        attributes: {
            def: 92,
            dri: 92,
            pac: 98,
            pas: 89,
            phy: 87,
            sho: 86
        },
        calculateFromFullAttributes: {
            acceleration: 90,
            aggression: 90,
            agility: 90,
            attack_pos: 90,
            ballcontrol: 90,
            balance: 90,
            composure: 90,
            crossing: 90,
            curve: 90,
            dribbling: 90,
            finishing: 90,
            fk_acc: 90,
            gkdiving: 90,
            gkhandling: 90,
            gkkicking: 90,
            gkpositioning: 90,
            gkreflexes: 90,
            heading_acc: 90,
            interceptions: 90,
            jumping: 90,
            long_passing: 90,
            long_shots: 90,
            penalties: 90,
            reactions: 90,
            short_passing: 90,
            shot_power: 90,
            slide_tackle: 90,
            sprintspeed: 90,
            stamina: 90,
            stand_tackle: 90,
            strength: 90,
            vision: 90,
            volleys: 90,
        }
    }
}

const cardCreatorSlice = createSlice({
    name: 'cardCreatorSlice',
    initialState,
    reducers: {
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload
        },
        setYear: (state, action: PayloadAction<YearType>) => {
            state.cardDesign.year = action.payload
        },
        setCardFormat: (state, action: PayloadAction<CardFormatType>) => {
            state.cardDesign.cardFormat = action.payload
        },
        setFeatureIcon: (state, action: PayloadAction<FeatureIconType>) => {
            state.cardDesign.featureIcon = action.payload
        },
        setCardChemistryStyle: (state, action: PayloadAction<ChemistryType>) => {
            state.cardDesign.chemistryStyle = action.payload
        },
        setChemistryPoints: (state, action: PayloadAction<ChemistryPointType>) => {
            state.cardDesign.chemistryPoints = action.payload
        },
        toggleShine: (state) => {
            state.cardDesign.cardExtras.shine = !state.cardDesign.cardExtras.shine;
        },
        setCardExtraShine: (state, action: PayloadAction<boolean>) => {
            state.cardDesign.cardExtras.shine = action.payload;
        },
        setCardExtraCurvedShine: (state, action: PayloadAction<boolean>) => {
            state.cardDesign.cardExtras.curvedShine = action.payload;
        },
        setCardExtraOverlay: (state, action: PayloadAction<boolean>) => {
            state.cardDesign.cardExtras.overlay = action.payload;
        },
        setCardExtraFeatureIcon: (state, action: PayloadAction<boolean>) => {
            state.cardDesign.cardExtras.featureIcon = action.payload;
        },
        setCardExtraSquadChemistry: (state, action: PayloadAction<boolean>) => {
            state.cardDesign.cardExtras.squadChemistry = action.payload;
        },
        setCardExtraChemistryStyle: (state, action: PayloadAction<boolean>) => {
            state.cardDesign.cardExtras.chemistryStyle = action.payload;
        },
        setCardExtraPlayStyle: (state, action: PayloadAction<boolean>) => {
            state.cardDesign.cardExtras.playStyle = action.payload;
        },
        setCardExtraFirstOwner: (state, action: PayloadAction<boolean>) => {
            state.cardDesign.cardExtras.firstOwner = action.payload;
        },
        setCardExtraPlayerFeatures: (state, action: PayloadAction<boolean>) => {
            state.cardDesign.cardExtras.playerFeatures = action.payload;
        },
        setCardExtraPlayerName: (state, action: PayloadAction<boolean>) => {
            state.cardDesign.cardExtras.playerName = action.payload;
        },
        setImageFade: (state, action: PayloadAction<ImageFadeType>) => {
            state.playerData.imageFade = action.payload
        },
        setImageFilter: (state, action: PayloadAction<ImageFilterType>) => {
            state.playerData.imageFilter = action.payload
        },
        setName: (state, action: PayloadAction<string>) => {
            state.playerData.name = action.payload
        },
        setOverallRating: (state, action: PayloadAction<number>) => {
            state.playerData.overallRating = action.payload
        },
        setPosition: (state, action: PayloadAction<Preposition_Type>) => {
            state.playerData.position = action.payload
        },
        setClub: (state, action: PayloadAction<ClubCard>) => {
            state.playerData.club = action.payload
        },
        setLeague: (state, action: PayloadAction<string>) => {
            state.playerData.league = action.payload
        },
        setNation: (state, action: PayloadAction<string>) => {
            state.playerData.nation = action.payload
        },
        setAttributes: (state, action: PayloadAction<RATING>) => {
            state.playerData.attributes = {...action.payload}
        },
        setPlayStyle: (state, action: PayloadAction<SetPlayStylePropType>) => {
            const {index, value} = action.payload;
            state.cardDesign.playStyle[index] = value;
        },
        setOverlay: (state, action: PayloadAction<OverlayType>) => {
            state.cardDesign.overlay = action.payload;
        },
        setOverlayContracts: (state, action: PayloadAction<number>) => {
            state.cardDesign.overlayContracts = action.payload;
        },
        setImageType: (state, action: PayloadAction<number>) => {
            state.playerData.image.type = action.payload
        },
        setPlayerFeatures: (state, action: PayloadAction<PlayerFeatureType>) => {
            state.cardDesign.playerFeatures = {...state.cardDesign.playerFeatures, ...action.payload}
        },
        setPlayerAvatarImage: (state, action: PayloadAction<string>) => {
            state.playerData.image.url = action.payload;
        },
        setCardColor: (state, action: PayloadAction<CardColorType>) => {
            state.cardDesign.cardColor = action.payload;
        },
        setDynamicImage: (state, action: PayloadAction<boolean>) => {
            state.playerData.image.isDynamic = action.payload;
        },
        setImageSize: (state, action: PayloadAction<number>) => {
            state.playerData.image.size = action.payload;
        },
        setFilterDetail: (state, action: PayloadAction<ImageFilterDetail>) => {
            state.playerData.filterDetail =  action.payload;
        }
    }
})


export const cardCreatorAction = cardCreatorSlice.actions;
export default cardCreatorSlice.reducer;