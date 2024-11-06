import type {
    CardFormatType,
    ChemistryPointType,
    ChemistryType,
    ColorSettingsType,
    FeatureIconType,
    FootType,
    ImageFadeType,
    ImageFilterType,
    OverlayType,
    PlayStyleType,
    Preposition_Type,
    StandardLevelType,
    YearType
} from '@/lib/types'

export const CARD_FORMAT = {
    FULL: 'FULL' as CardFormatType,
    MINI: 'MINI' as CardFormatType
}

export const STANDARD_LEVEL = {
    LOW: 'LOW' as StandardLevelType,
    MEDIUM: 'MEDIUM' as StandardLevelType,
    HIGH: 'HIGH' as StandardLevelType,
}

export const ADVANCED_LEVEL = {
    VERY_LOW: 0,
    LOW: 1,
    MEDIUM: 2,
    HIGH: 3,
    VERY_HIGH: 4
}


export const IMAGE_FADE = {
    NO_FADE: 'NO_FADE' as ImageFadeType,
    NEW_FADE: 'NEW_FADE' as ImageFadeType,
    OLD_FADE: 'OLD_FADE' as ImageFadeType,
}

export const IMAGE_FILTER = {
    NO_FILTER: 'NO_FILTER' as ImageFilterType,
    ICON_FILTER: 'ICON_FILTER' as ImageFilterType,
    CUSTOM_FILTER: 'CUSTOM_FILTER' as ImageFilterType,
}

export const FOOT = {
    LEFT: 'Left' as FootType,
    RIGHT: 'Right' as FootType
}


export const YEAR_VALUES = {
    '24': '24' as YearType,
    '23': '23' as YearType,
    '22': '22' as YearType,
    '21': '21' as YearType,
    '20': '20' as YearType,
    '19': '19' as YearType,
    '18': '18' as YearType,
    '17': '17' as YearType,
    '16': '16' as YearType,
}


const YearCardColorDefaultValue: ColorSettingsType = {
    overallrating: 0,
    prefpos1: 0,
    playstyles: {
        bg: 6,
        stroke: 0,
        color: 0
    },
    player_name: 1,
    rating: {
        label: 3,
        value: 2
    },
    alt_positions: {
        bg: 6,
        stroke: 0,
        color: 0,
    },
    features: {
        bg: 6,
        stroke: 0,
        color: 0
    },
    fifarosters: 4,
    chemistry: 4
}

export const YEAR_CARD_COLORS: Record<YearType, ColorSettingsType> = {
    '24': YearCardColorDefaultValue,
    '23': YearCardColorDefaultValue,
    '22': YearCardColorDefaultValue,
    '21': YearCardColorDefaultValue,
    '20': YearCardColorDefaultValue,
    '19': YearCardColorDefaultValue,
    '18': YearCardColorDefaultValue,
    '17': YearCardColorDefaultValue,
    '16': YearCardColorDefaultValue,
}

export const CHEMISTRY_STYLE = {
    FIFAROSTERS: "fifarosters" as ChemistryType,
    BASIC: "basic" as ChemistryType,
    SNIPER: "sniper" as ChemistryType,
    FINISHER: "finisher" as ChemistryType,
    DEADEYE: "deadeye" as ChemistryType,
    MARKSMAN: "marksman" as ChemistryType,
    HAWK: "hawk" as ChemistryType,
    ARTIST: "artist" as ChemistryType,
    ARCHITECT: "architect" as ChemistryType,
    POWER_HOUSE: "power house" as ChemistryType,
    MAESTRO: "maestro" as ChemistryType,
    ENGINE: "engine" as ChemistryType,
    SENTINEL: "sentinel" as ChemistryType,
    GUARDIAN: "guardian" as ChemistryType,
    GLADIATOR: "gladiator" as ChemistryType,
    BACKBONE: "backbone" as ChemistryType,
    ANCHOR: "anchor" as ChemistryType,
    HUNTER: "hunter" as ChemistryType,
    CATALYST: "catalyst" as ChemistryType,
    SHADOW: "shadow" as ChemistryType,
    GK_WALL: "gk wall" as ChemistryType,
    GK_SHIELD: "gk shield" as ChemistryType,
    GK_CAT: "gk cat" as ChemistryType,
    GK_GLOVE: "gk glove" as ChemistryType,
    GK_BASIC: "gk basic" as ChemistryType,

}

export const LIST_PAGE_ENDPOINT = {
    TOTY: 'toty',
    TOTY_NOMINEES: 'toty_nominees',
    FUT_MAS: 'fut_mas',
    POWER_PLAYERS: 'power-players',
    CARNIBALL: 'carniball',
    PRIME_ICON: 'prime_icon_moments',
    FUT_FUTURE_STARS: 'fut_future_stars',
    LEGENDS: 'legend',
    TOTS: 'tots_gold',
    FESTIVAL_OF_FUTBALL: '',
    PTG_SELECTED: '',
    FUT_BIRTHDAY: 'fut_birthday',
    TOTT: '',
    MOVEMBER: 'movember',
    ONES_TO_WATCH: 'ones_to_watch',
    FUTTIES: 'pink,pink_gold,futties_winner',
    IMOTM: 'imotm',
    TOTW: 'totw_gold,totw_silver,totw_bronze',
    SPECIAL_CARDS: 'record_breaker,green,motm,purple,continental_champions_motm,award_winner,sbc_base,sbc_premium',
    PLAYERS_LIST: '',
    MEM_OF_MIDAS: '',
    KNIGHTS_OF_NAINGGOLAN: '',
    SILVER_STARS: '',
    CARRER_MODE_GEMS: '',
    WORLD_CUP: '',
    RTTF: ''
}

export const PLAYER_POSITION:
    {
        ATTACKER: Preposition_Type[],
        MODIFIER: Preposition_Type[],
        DEFENDER: Preposition_Type[],
        GOALKEEPER: Preposition_Type[]
    } = {
    ATTACKER: ['ST', 'LF', 'RF', 'CF', 'LW', 'RW'],
    MODIFIER: ['CAM', 'LM', 'RM', 'CM', 'CDM'],
    DEFENDER: ['RWB', 'LWB', 'LB', 'RB', 'CB'],
    GOALKEEPER: ['GK']
}

export const ALL_PLAYER_POSITION: Preposition_Type[] = [
    ...PLAYER_POSITION.ATTACKER,
    ...PLAYER_POSITION.MODIFIER,
    ...PLAYER_POSITION.DEFENDER,
    ...PLAYER_POSITION.GOALKEEPER
]

export const PLAYER_POSITION_TYPE = {
    ATTACKER: 0,
    MODIFIER: 1,
    DEFENDER: 2,
    GOALKEEPER: 3
}


export const CARD_CREATOR_PLAYER_DATA_IMAGE_TYPE = {
    PLAYER_IMAGE: 0,
    CUSTOM_IMAG: 1,
    UPLOAD_IMAGE: 2,
}

export const OVERLAY = {
    EXPIRED: 'expired' as OverlayType,
    LOAN: 'loan' as OverlayType,
    OUTBID: 'outbid' as OverlayType,
    WINNING: 'winning' as OverlayType,
    WON: 'won' as OverlayType,
}

export const FEATURE_ICON = {
    STAR: 'STAR' as FeatureIconType,
    TWIN: 'TWIN' as FeatureIconType
}

export const CHEMISTRY_POINTS = {
    ONE: '1' as ChemistryPointType,
    TWO: '2' as ChemistryPointType,
    THREE: '3' as ChemistryPointType,
    RED: 'RED' as ChemistryPointType,
    GREEN: 'GREEN' as ChemistryPointType,
    OUT_OF_POSITION: 'OUT_OF_POSITION' as ChemistryPointType,
}


export const PLAY_STYLE = {
    NONE: 'None' as PlayStyleType,
    CHIP_SHOT: 'Chip shot' as PlayStyleType,
    FINESSE_SHOT: 'Finesse Shot' as PlayStyleType,
    POWER_HEADER: 'Power Header' as PlayStyleType,
    POWER_SHOT: 'Power Shot' as PlayStyleType,
    DEAD_BALL: 'Dead Ball' as PlayStyleType,
    INCISIVE_PASS: 'Incisive Pass' as PlayStyleType,
    PINGED_PASS: 'Pinged Pass' as PlayStyleType,
    LONG_BALL_PASS: 'Long Ball Pass' as PlayStyleType,
    TIKI_TAKA: 'Tiki Taka' as PlayStyleType,
    WHIPPED_PASS: 'Whipped Pass' as PlayStyleType,
    FIRST_TOUCH: 'First Touch' as PlayStyleType,
    FLAIR: 'Flair' as PlayStyleType,
    PRESS_PROVEN: 'Press Proven' as PlayStyleType,
    RAPID: 'Rapid' as PlayStyleType,
    TECHNICAL: 'Technical' as PlayStyleType,
    TRICKSTER: 'Trickster' as PlayStyleType,
    BLOCK: 'Block' as PlayStyleType,
    BRUISER: 'Bruiser' as PlayStyleType,
    INTERCEPT: 'Intercept' as PlayStyleType,
    JOCKEY: 'Jockey' as PlayStyleType,
    SLIDE_TACKLE: 'Slide tackle' as PlayStyleType,
    ANTICIPATE: 'Anticipate' as PlayStyleType,
    ACROBATIC: 'Acrobatic' as PlayStyleType,
    AERIAL: 'Aerial' as PlayStyleType,
    TRIVELA: 'Trivela' as PlayStyleType,
    RELENTLESS: 'Relentless' as PlayStyleType,
    QUICK_STEP: 'Quick Step' as PlayStyleType,
    LONG_THROW: 'Long Throw' as PlayStyleType,
    FAR_THROW: 'Far Throw' as PlayStyleType,
    FOOTWORK: 'Footwork' as PlayStyleType,
    CROSS_CLAIMER: 'Cross Claimer' as PlayStyleType,
    RUSH_OUT: 'Rush Out' as PlayStyleType,
    FAR_REACH: 'Far Reach' as PlayStyleType,
    QUICK_REFLEXE: 'Quick Reflexe' as PlayStyleType,
}

export const FUT_MEMORY_DIFFICULTY = {
    EASY : 1,
    MEDIUM : 2,
    HARD: 3,
    VERY_HARD: 4
}

export const REACTIVE_CARD_RARITY_VALUE = {
    AMAZING_RARE: 'amazing rare',
    RARE_HOLO: 'rare holo',
    RARE_HOLO_COSMOS: 'rare holo cosmos',
    RADIANT_RARE: 'radiant rare',
    RARE_RAINBOW_ALT: 'rare rainbow alt',
    RARE_HOLO_VMAX: 'rare holo vmax',
    REVERSE_HOLO: 'reverse holo',
    RARE_SECRET: 'rare secret',
    RARE_SHINY_V: 'rare shiny v',
    RARE_SHINY: 'rare shiny',

}