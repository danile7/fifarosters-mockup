import _ from "lodash";
import type {
  PositionalDataType,
  Preposition_Type,
  RankedPosition,
  RankedPosition_Type,
} from "../types";
import {
  ALL_PLAYER_POSITION,
  CHEMISTRY_STYLE,
  LIST_PAGE_ENDPOINT,
  OVERLAY,
  PLAY_STYLE,
  PLAYER_POSITION,
  PLAYER_POSITION_TYPE,
} from "./enums";
import type {
  ChemistryType,
  FeatureIconType,
  OverlayType,
  PlayStyleType,
  YearType,
} from "@/lib/types";
import type { FutStats } from "@/lib/types";
import DATA from "./data";

export * as API from "./API";

export const getHexColor = (value: number | undefined): string => {

  if(!value){
    return '#000000'
  }
  
  const hex:string = value.toString(16);
  return hex.length === 5 ? "#0" + hex : "#" + hex;
}

export const getPositionType = (type: Preposition_Type): number => {
  if (PLAYER_POSITION.ATTACKER.includes(type)) {
    return PLAYER_POSITION_TYPE.ATTACKER;
  }

  if (PLAYER_POSITION.MODIFIER.includes(type)) {
    return PLAYER_POSITION_TYPE.MODIFIER;
  }

  if (PLAYER_POSITION.DEFENDER.includes(type)) {
    return PLAYER_POSITION_TYPE.DEFENDER;
  }

  if (PLAYER_POSITION.GOALKEEPER.includes(type)) {
    return PLAYER_POSITION_TYPE.GOALKEEPER;
  }

  return PLAYER_POSITION_TYPE.ATTACKER;
};

export const getPageColor = (data: string): string => {
  const dataToColorMap: Record<string, string> = {
    toty: LIST_PAGE_ENDPOINT.TOTY,
    "toty-nominess": LIST_PAGE_ENDPOINT.TOTY_NOMINEES,
    futmas: LIST_PAGE_ENDPOINT.FUT_MAS,
    "power-players": LIST_PAGE_ENDPOINT.POWER_PLAYERS,
    carniball: LIST_PAGE_ENDPOINT.CARNIBALL,
    "prime-icon-moments": LIST_PAGE_ENDPOINT.PRIME_ICON,
    "fut-future-stars": LIST_PAGE_ENDPOINT.FUT_FUTURE_STARS,
    legends: LIST_PAGE_ENDPOINT.LEGENDS,
    "festival-of-futball": LIST_PAGE_ENDPOINT.FESTIVAL_OF_FUTBALL,
    "ptg-selected": LIST_PAGE_ENDPOINT.PTG_SELECTED,
    rttf: LIST_PAGE_ENDPOINT.RTTF,
    tots: LIST_PAGE_ENDPOINT.TOTS,
    "fut-birthday": LIST_PAGE_ENDPOINT.FUT_BIRTHDAY,
    tott: LIST_PAGE_ENDPOINT.TOTT,
    movember: LIST_PAGE_ENDPOINT.MOVEMBER,
    onestowatch: LIST_PAGE_ENDPOINT.ONES_TO_WATCH,
    futties: LIST_PAGE_ENDPOINT.FUTTIES,
    imotm: LIST_PAGE_ENDPOINT.IMOTM,
    totw: LIST_PAGE_ENDPOINT.TOTW,
    "special-cards": LIST_PAGE_ENDPOINT.SPECIAL_CARDS,
    playerslist: LIST_PAGE_ENDPOINT.PLAYERS_LIST,
    "men-of-midas": LIST_PAGE_ENDPOINT.MEM_OF_MIDAS,
    "knights-of-nainggolan": LIST_PAGE_ENDPOINT.KNIGHTS_OF_NAINGGOLAN,
    "silver-stars": LIST_PAGE_ENDPOINT.SILVER_STARS,
    "career-mode-gems": LIST_PAGE_ENDPOINT.CARRER_MODE_GEMS,
    "world-cup": LIST_PAGE_ENDPOINT.WORLD_CUP,
  };

  return dataToColorMap[data] ?? "";
};

export const getChemistry = (data: ChemistryType): ChemistryType => {
  const validValues = Object.values(CHEMISTRY_STYLE);

  if (!validValues.includes(data)) {
    return CHEMISTRY_STYLE.BASIC;
  }

  return data;
};

export const getPlayStyle = (data: PlayStyleType): PlayStyleType => {
  const validValues = Object.values(PLAY_STYLE);

  if (!validValues.includes(data)) {
    return PLAY_STYLE.NONE;
  }

  return data;
};

export const getPlayStyleSVGPath = (data: PlayStyleType): string =>
  `/assets/svg/playstyle/${data}.svg`;

export const getChemistrySVGPath = (data: ChemistryType): string =>
  `/assets/svg/chemistry/chemstyle_${data.replace(/ /, "")}.svg`;

export const getOverlaySVGPath = (data: OverlayType): string =>
  `/assets/svg/overlay/${data}.svg`;

export const getOverlayStyle = (data: OverlayType): string => {
  let returnValue = "";

  switch (data) {
    case OVERLAY.EXPIRED:
      returnValue = "bg-red-500 text-white p-[20%]";
      break;
    case OVERLAY.LOAN:
      returnValue = "bg-lime-500 text-white";
      break;
    case OVERLAY.OUTBID:
      returnValue = "bg-yellow-500 text-white p-[20%]";
      break;
    case OVERLAY.WINNING:
      returnValue = "bg-lime-500 text-white p-[20%]";
      break;
    case OVERLAY.WON:
      returnValue = "bg-yellow-200 text-lime-600 p-[20%]";
      break;
  }

  return returnValue;
};

export const getPlayPosition = (data: Preposition_Type): Preposition_Type => {
  if (data && !ALL_PLAYER_POSITION.includes(data)) {
    return ALL_PLAYER_POSITION[0]!;
  }

  return data;
};

export const getFeatureIconSVGPath = (data: FeatureIconType): string =>
  `/assets/svg/${data}.svg`;

export const capitalizeFirstLetter = (str: string): string => {
  if (!str) return ""; // Check for empty or null strings
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

export const capitalizeFirstLetters = (text: string): string => {
  text = text.replace(/_/g, " ").toLowerCase();
  return text.charAt(0).toUpperCase() + text.slice(1);
};

export const getPlayerDetailRoute = (data: {
  futId?: string | number;
  playerId?: string | number;
  year: YearType;
}): string => {
  const { futId, playerId, year } = data;

  let link = `/players/search-player?v=${year}`;

  if (futId) {
    link = `${link}&futId=${futId}`;
  }

  if (playerId) {
    link = `${link}&player=${playerId}`;
  }

  // console.log('Link:::', link)

  return link;
};

export const getCardCreatorRoute = (data: {
  futId?: string | number;
  playerId?: string | number;
  year: string | number;
}): string => {
  const { futId, playerId, year } = data;

  let link = `/tools/card-creator/card?v=${year}`;

  if (futId) {
    link = `${link}&futId=${futId}`;
  }

  if (playerId) {
    link = `${link}&player=${playerId}`;
  }

  return link;
};

export const convertRawDataForPlayerDetail = (data: FutStats | null) => {
  const filterStats = (stats: Record<string, number | undefined>) => {
    return Object.fromEntries(
      Object.entries(stats).filter(([_, value]) => value !== undefined),
    );
  };

  if (data === null) {
    return null;
  }
  return {
    physical: filterStats({
      acceleration: data?.acceleration ?? 0,
      agility: data?.agility ?? 0,
      jumping: data?.jumping ?? 0,
      strength: data?.strength ?? 0,
      sprint_speed: data?.sprintspeed ?? 0,
      balance: data?.balance ?? 0,
      stamina: data?.stamina ?? 0,
      reactions: data?.reactions ?? 0,
    }),
    mental: filterStats({
      aggression: data?.aggression ?? 0,
      attack_pos: data?.positioning ?? 0,
      interceptions: data?.interceptions ?? 0,
      vision: data?.vision ?? 0,
    }),
    technical: filterStats({
      ball_control: data?.ballcontrol ?? 0,
      dribbling: data?.dribbling ?? 0,
      fk_acc: data?.freekickaccuracy ?? 0,
      long_passing: data?.longpassing ?? 0,
      def_awareness: data?.def_awareness ?? 0,
      long_shots: data?.longshots ?? 0,
      slide_tackle: data?.slidingtackle ?? 0,
      curve: data?.curve ?? 0,
      crossing: data?.crossing ?? 0,
      finishing: data?.finishing ?? 0,
      heading_acc: data?.headingaccuracy ?? 0,
      short_passing: data?.shortpassing ?? 0,
      shot_power: data?.shotpower ?? 0,
      stand_tackle: data?.standingtackle ?? 0,
      volleys: data?.volleys ?? 0,
      penalties: data?.penalties ?? 0,
    }),
    goalkeeping: {
      gk_diving: data?.gkdiving ?? 0,
      gk_kicking: data?.gkkicking ?? 0,
      gk_positioning: data?.gkpositioning ?? 0,
      gk_handling: data?.gkhandling ?? 0,
      gk_reflexes: data?.gkreflexes ?? 0,
    },
  };
};

interface GenerateImageFilterStylePropType {
  saturation: boolean;
  brightness: boolean;
  contrast: boolean;
  sepia: boolean;
  grayscale: boolean;
  blackAndWhite: boolean;
  blur: boolean;
  hueRotate: boolean;
  invert: boolean;

  brightnessValue?: number;
  contrastValue?: number;
  saturationValue?: number;
  grayscaleValue?: number;
  sepiaValue?: number;
  blurValue?: number;
  hueRotateValue?: number;
  invertValue?: number;
}

export const generateImageFilterStyle = (
  props: GenerateImageFilterStylePropType,
): { filter: string } => {
  const {
    brightness,
    contrast,
    saturation,
    sepia,
    grayscale,
    blackAndWhite,
    blur,
    hueRotate,
    invert,
    brightnessValue,
    contrastValue,
    saturationValue,
    grayscaleValue,
    sepiaValue,
    blurValue,
    hueRotateValue,
    invertValue,
  } = props;

  const filterMap: Record<string, [boolean, string | undefined]> = {
    brightness: [
      brightness,
      brightnessValue !== undefined ? `${brightnessValue}` : undefined,
    ],
    contrast: [
      contrast,
      contrastValue !== undefined ? `${contrastValue}` : undefined,
    ],
    saturate: [
      saturation,
      saturationValue !== undefined ? `${saturationValue}` : undefined,
    ],
    sepia: [sepia, sepiaValue !== undefined ? `${sepiaValue}` : undefined],
    grayscale: [
      grayscale,
      grayscaleValue !== undefined ? `${grayscaleValue}` : undefined,
    ],
    blur: [blur, blurValue !== undefined ? `${blurValue}px` : undefined],
    "hue-rotate": [
      hueRotate,
      hueRotateValue !== undefined ? `${hueRotateValue}deg` : undefined,
    ],
    invert: [invert, invertValue !== undefined ? `${invertValue}` : undefined],
  };

  const filters = Object.entries(filterMap)
    .filter(([_, [flag, value]]) => flag && value !== undefined)
    .map(([name, [, value]]) => `${name}(${value})`);

  if (blackAndWhite) {
    filters.push("grayscale(1)", "contrast(1)");
  }

  return {
    filter: filters.length > 0 ? filters.join(" ") : "none",
  };
};

export const generateRandomNumber = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export const getRankedPosition = (
  position: Preposition_Type,
): RankedPosition_Type => {
  const data = _.find(DATA.rankPositions, (rankPosition: RankedPosition) =>
    _.includes(rankPosition.positions, position),
  );
  return data?.rankedPosition ?? ("ST" as RankedPosition_Type);
};

export const getPositionalRating = (
  futStats: FutStats,
): PositionalDataType[] => {
  const data: PositionalDataType[] = [];
  /* GK */
  data.push({
    position: "GK",
    value:
      0.21 * (futStats?.gkdiving ?? 0) +
      0.21 * (futStats?.gkhandling ?? 0) +
      0.21 * (futStats?.gkreflexes ?? 0) +
      0.21 * (futStats?.gkpositioning ?? 0) +
      0.11 * (futStats?.reactions ?? 0) +
      0.05 * (futStats?.gkkicking ?? 0),
  });

  /* CB */
  data.push({
    position: "CB",
    value:
      0.17 * (futStats?.standingtackle ?? 0) +
      0.14 * (futStats?.marking ?? 0) +
      0.13 * (futStats?.interceptions ?? 0) +
      0.1 * (futStats?.slidingtackle ?? 0) +
      0.1 * (futStats?.headingaccuracy ?? 0) +
      0.1 * (futStats?.strength ?? 0) +
      0.07 * (futStats?.aggression ?? 0) +
      0.05 * (futStats?.reactions ?? 0) +
      0.05 * (futStats?.shortpassing ?? 0) +
      0.04 * (futStats?.ballcontrol ?? 0) +
      0.03 * (futStats?.jumping ?? 0) +
      0.02 * (futStats?.sprintspeed ?? 0),
  });

  /* LB / RB */
  data.push({
    position: "FB",
    value:
      0.14 * (futStats?.slidingtackle ?? 0) +
      0.12 * (futStats?.interceptions ?? 0) +
      0.11 * (futStats?.standingtackle ?? 0) +
      0.09 * (futStats?.crossing ?? 0) +
      0.08 * (futStats?.reactions ?? 0) +
      0.08 * (futStats?.stamina ?? 0) +
      0.08 * (futStats?.marking ?? 0) +
      0.07 * (futStats?.sprintspeed ?? 0) +
      0.07 * (futStats?.shortpassing ?? 0) +
      0.07 * (futStats?.ballcontrol ?? 0) +
      0.05 * (futStats?.acceleration ?? 0) +
      0.04 * (futStats?.headingaccuracy ?? 0),
  });

  /* LWB / RWB */
  data.push({
    position: "WB",
    value:
      0.12 * (futStats?.crossing ?? 0) +
      0.12 * (futStats?.interceptions ?? 0) +
      0.11 * (futStats?.slidingtackle ?? 0) +
      0.1 * (futStats?.shortpassing ?? 0) +
      0.1 * (futStats?.stamina ?? 0) +
      0.08 * (futStats?.ballcontrol ?? 0) +
      0.08 * (futStats?.standingtackle ?? 0) +
      0.08 * (futStats?.reactions ?? 0) +
      0.07 * (futStats?.marking ?? 0) +
      0.06 * (futStats?.sprintspeed ?? 0) +
      0.04 * (futStats?.dribbling ?? 0) +
      0.04 * (futStats?.acceleration ?? 0),
  });

  /* CDM */
  data.push({
    position: "DM",
    value:
      0.14 * (futStats?.interceptions ?? 0) +
      0.14 * (futStats?.shortpassing ?? 0) +
      0.12 * (futStats?.standingtackle ?? 0) +
      0.1 * (futStats?.ballcontrol ?? 0) +
      0.1 * (futStats?.longpassing ?? 0) +
      0.09 * (futStats?.marking ?? 0) +
      0.07 * (futStats?.reactions ?? 0) +
      0.06 * (futStats?.stamina ?? 0) +
      0.05 * (futStats?.slidingtackle ?? 0) +
      0.05 * (futStats?.aggression ?? 0) +
      0.04 * (futStats?.vision ?? 0) +
      0.04 * (futStats?.strength ?? 0),
  });

  /* CM */
  data.push({
    position: "CM",
    value:
      0.17 * (futStats?.shortpassing ?? 0) +
      0.14 * (futStats?.ballcontrol ?? 0) +
      0.13 * (futStats?.vision ?? 0) +
      0.13 * (futStats?.longpassing ?? 0) +
      0.08 * (futStats?.reactions ?? 0) +
      0.07 * (futStats?.dribbling ?? 0) +
      0.06 * (futStats?.stamina ?? 0) +
      0.06 * (futStats?.positioning ?? 0) +
      0.05 * (futStats?.standingtackle ?? 0) +
      0.05 * (futStats?.interceptions ?? 0) +
      0.04 * (futStats?.longshots ?? 0) +
      0.02 * (futStats?.finishing ?? 0),
  });

  /* LM / RM */
  data.push({
    position: "WM",
    value:
      0.15 * (futStats?.dribbling ?? 0) +
      0.13 * (futStats?.ballcontrol ?? 0) +
      0.11 * (futStats?.shortpassing ?? 0) +
      0.1 * (futStats?.crossing ?? 0) +
      0.08 * (futStats?.positioning ?? 0) +
      0.07 * (futStats?.acceleration ?? 0) +
      0.07 * (futStats?.reactions ?? 0) +
      0.07 * (futStats?.vision ?? 0) +
      0.06 * (futStats?.sprintspeed ?? 0) +
      0.06 * (futStats?.finishing ?? 0) +
      0.05 * (futStats?.longpassing ?? 0) +
      0.05 * (futStats?.stamina ?? 0),
  });

  /* LAM/RAM/CAM */
  data.push({
    position: "AM",
    value:
      0.16 * (futStats?.shortpassing ?? 0) +
      0.15 * (futStats?.ballcontrol ?? 0) +
      0.14 * (futStats?.vision ?? 0) +
      0.13 * (futStats?.dribbling ?? 0) +
      0.09 * (futStats?.positioning ?? 0) +
      0.07 * (futStats?.reactions ?? 0) +
      0.07 * (futStats?.finishing ?? 0) +
      0.05 * (futStats?.longshots ?? 0) +
      0.04 * (futStats?.longpassing ?? 0) +
      0.04 * (futStats?.acceleration ?? 0) +
      0.03 * (futStats?.agility ?? 0) +
      0.03 * (futStats?.sprintspeed ?? 0),
  });

  /* LW/RW */
  data.push({
    position: "W",
    value:
      0.16 * (futStats?.dribbling ?? 0) +
      0.14 * (futStats?.ballcontrol ?? 0) +
      0.1 * (futStats?.finishing ?? 0) +
      0.09 * (futStats?.shortpassing ?? 0) +
      0.09 * (futStats?.positioning ?? 0) +
      0.09 * (futStats?.crossing ?? 0) +
      0.07 * (futStats?.reactions ?? 0) +
      0.07 * (futStats?.acceleration ?? 0) +
      0.06 * (futStats?.vision ?? 0) +
      0.06 * (futStats?.sprintspeed ?? 0) +
      0.04 * (futStats?.longshots ?? 0) +
      0.03 * (futStats?.agility ?? 0),
  });

  /* LF/RF/CF */
  data.push({
    position: "F",
    value:
      0.15 * (futStats?.ballcontrol ?? 0) +
      0.14 * (futStats?.dribbling ?? 0) +
      0.13 * (futStats?.positioning ?? 0) +
      0.11 * (futStats?.finishing ?? 0) +
      0.09 * (futStats?.reactions ?? 0) +
      0.09 * (futStats?.shortpassing ?? 0) +
      0.08 * (futStats?.vision ?? 0) +
      0.05 * (futStats?.shotpower ?? 0) +
      0.05 * (futStats?.acceleration ?? 0) +
      0.05 * (futStats?.sprintspeed ?? 0) +
      0.04 * (futStats?.longshots ?? 0) +
      0.02 * (futStats?.headingaccuracy ?? 0),
  });

  /* LS/RS/ST */
  data.push({
    position: "ST",
    value:
      0.18 * (futStats?.finishing ?? 0) +
      0.13 * (futStats?.positioning ?? 0) +
      0.1 * (futStats?.headingaccuracy ?? 0) +
      0.1 * (futStats?.ballcontrol ?? 0) +
      0.1 * (futStats?.shotpower ?? 0) +
      0.08 * (futStats?.reactions ?? 0) +
      0.07 * (futStats?.dribbling ?? 0) +
      0.05 * (futStats?.strength ?? 0) +
      0.05 * (futStats?.sprintspeed ?? 0) +
      0.05 * (futStats?.shortpassing ?? 0) +
      0.04 * (futStats?.acceleration ?? 0) +
      0.03 * (futStats?.longshots ?? 0) +
      0.02 * (futStats?.volleys ?? 0),
  });

  return data;
};
