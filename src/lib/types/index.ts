import type { ReactNode, MouseEvent } from "react";
import { FEATURE_ICON } from "@/lib/utils/enums";

export interface TableCardItemPropType {
  club_img_url?: string;
  league_img_url?: string;
  nationality_img_url?: string;
  avatar_img_url?: string;
  playerName?: string;
  OVR?: number;
  POT?: number;
  Pos?: string;
  Age?: number;
  teamId?: number;
  leagueId?: number;
  playerId?: number;
  nationalityId?: number;
}

export type PlayerListType = "Card" | "Table";

export interface PageNationType {
  total: number;
  currentPage: number;
  lastPage: number;
  perPage: number;
}

export interface ListSlice {
  loading: boolean;
  activeList: FutCardPropDataTypes[];
  activeListPageNation: PageNationType;
  activeListViewPageType: PlayerListType;
  etc: {
    totyNominees: FutCardPropDataTypes[];
  };
}

export type OverlayType = "expired" | "loan" | "outbid" | "winning" | "won";

export interface CardColorType {
  id?: number;
  background_img_url_l: string;
  background_img_url_s: string;
  has_card_bar?: null;
  dark_card?: number;
  futcolors: number[];
  futlabel?: string;
}

export interface ImageFilterDetail {
  saturation: boolean;
  brightness: boolean;
  contrast: boolean;
  sepia: boolean;
  grayscale: boolean;
  blackAndWhite: boolean;
  blur: boolean;
  hueRotate: boolean;
  invert: boolean;

  brightnessValue: number;
  contrastValue: number;
  saturationValue: number;
  grayscaleValue: number;
  sepiaValue: number;
  blurValue: number;
  hueRotateValue: number;
  invertValue: number;
}

export interface CardCreatorSliceType {
  loading: boolean;
  cardDesign: {
    year: YearType;
    cardColor: CardColorType | null;
    cardFormat: CardFormatType;
    cardExtras: {
      shine: boolean;
      curvedShine: boolean;
      overlay: boolean;
      featureIcon: boolean;
      squadChemistry: boolean;
      chemistryStyle: boolean;
      playStyle: boolean;
      firstOwner: boolean;
      playerFeatures: boolean;
      playerName: boolean;
    };
    overlay: OverlayType;
    overlayContracts: number;
    featureIcon: FeatureIconType;
    chemistryPoints: ChemistryPointType;
    chemistryStyle: ChemistryType;
    playStyle: PlayStyleType[];
    playerFeatures: PlayerFeatureType;
  };
  playerData: {
    image: {
      type: number;
      url: string;
      size: number;
      isDynamic: boolean;
      clipEdges: boolean;
    };
    imageFade: ImageFadeType;
    imageFilter: ImageFilterType;
    filterDetail: ImageFilterDetail;
    newFade: string;
    name: string;
    overallRating: number;
    position: Preposition_Type | null;
    club: ClubCard;
    league: string;
    nation: string;
    attributes: RATING;
    calculateFromFullAttributes: FutStats;
  };
}

export interface PlayerListViewLayoutPropType {
  list: FutCardPropDataTypes[];
  type?: PlayerListType;
  year: number;
  total: number;
  lastPage: number;
  currentPage: number;
  perPage: number;
  showPagination?: boolean;
}

export interface ListComponentEntry {
  header?: JSX.Element;
  body?: JSX.Element;
}

export type ListComponentsType = Record<string, ListComponentEntry>;

export interface ListHeaderPropType {
  titleYear?: number;
  titleCardType?: string;
  yearSelector?: {
    from: number;
    to: number;
    label?: string;
  };
  subtitle?: string;
  extraContent?: ReactNode;
}

export interface LinkItemType {
  id: number;
  href: string;
  text: string;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface OfficialCardModalProps {
  isOpen: boolean;
  year: YearType;
  onClose: () => void;
  onSelect: (param: CardColorType) => void;
}

export interface FutMemoryGameSettingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOK: (param: {
    year: YearType;
    cardBackground: string;
    difficulty: number;
    cards: FutMemoryCardType[] | null;
  }) => void;
}

export interface TestSearchPlayerType {
  card_id: string;
  player_img_url: string;
  club_img_url: string;
  nationality_img_url: string;
  player_name: string;
  position: string;
  number: number;
}

export interface FilterDataOptionType {
  id: number;
  title?: string;
  component?: JSX.Element;
}

export interface VersionOptionItemType {
  id: number;
  title: string;
}

export interface VersionOption {
  id: number;
  title: string;
  options?: VersionOptionItemType[];
}

export interface PositionOptionItemType {
  id: number;
  title: string;
}

export interface PositionOption {
  id: number;
  title: string;
  options?: PositionOptionItemType[];
}

export interface LeagueOptionItemType {
  id: number;
  title: string;
}

export interface LeagueOption {
  id: number;
  title: string;
  options?: LeagueOptionItemType[];
}

export interface NationOptionItemType {
  id: number;
  title: string;
}

export interface NationOption {
  id: number;
  title: string;
  options?: NationOptionItemType[];
}

export interface ClubOptionItemType {
  id: number;
  title: string;
}

export interface ClubOption {
  id: number;
  title: string;
  options?: ClubOptionItemType[];
}

export interface PriceOption {
  id: number;
  title: string;
}

export interface PlayStyleOptionItemType {
  id: number;
  title: string;
  src?: string;
}

export interface PlayStyleOption {
  id: number;
  title: string;
  options?: PlayStyleOptionItemType[];
}

export type YearType =
  | "24"
  | "23"
  | "22"
  | "21"
  | "20"
  | "19"
  | "18"
  | "17"
  | "16";

export type AltPositionType = "RM" | "ST" | "LW";

export type AttackingWorkRate = "M";

export type ChemistryType =
  | "fifarosters"
  | "basic"
  | "sniper"
  | "finisher"
  | "deadeye"
  | "marksman"
  | "hawk"
  | "artist"
  | "architect"
  | "power house"
  | "maestro"
  | "engine"
  | "sentinel"
  | "guardian"
  | "gladiator"
  | "backbone"
  | "anchor"
  | "hunter"
  | "catalyst"
  | "shadow"
  | "gk wall"
  | "gk shield"
  | "gk cat"
  | "gk glove"
  | "gk basic";

export type DefensiveWorkRate = "M";

export type FootType = "left" | "right";

export type PlayStyleType =
  | "None"
  | "Chip Shot"
  | "Finesse Shot"
  | "Power Header"
  | "Power Shot"
  | "Dead Ball"
  | "Incisive Pass"
  | "Pinged Pass"
  | "Long Ball Pass"
  | "Tiki Taka"
  | "Whipped Pass"
  | "First Touch"
  | "Flair"
  | "Press Proven"
  | "Rapid"
  | "Technical"
  | "Trickster"
  | "Block"
  | "Bruiser"
  | "Intercept"
  | "Jockey"
  | "Slide tackle"
  | "Anticipate"
  | "Acrobatic"
  | "Aerial"
  | "Trivela"
  | "Relentless"
  | "Quick Step"
  | "Long Throw"
  | "Far Throw"
  | "Footwork"
  | "Cross Claimer"
  | "Rush Out"
  | "Far Reach"
  | "Quick Reflexe";

export interface SetPlayStylePropType {
  index: number;
  value: PlayStyleType;
}
// export type PREFPOS1 = Preposition;

export type RatingKeys = "def" | "dri" | "pac" | "pas" | "phy" | "sho";

export interface RATING {
  def: number;
  dri: number;
  pac: number;
  pas: number;
  phy: number;
  sho: number;
}

export type FullRatingAttributeKeys =
  | "acceleration"
  | "agility"
  | "jumping"
  | "strength"
  | "aggression"
  | "attack pos"
  | "ball control"
  | "dribbling"
  | "finishing"
  | "heading acc"
  | "short passing"
  | "shot power"
  | "stand tackle"
  | "volleys"
  | "penalties"
  | "gk handling"
  | "gk reflexes"
  | "sprint speed"
  | "balance"
  | "stamina"
  | "reactions"
  | "interceptions"
  | "vision"
  | "crossing"
  | "composure"
  | "fk acc"
  | "long passing"
  | "def awareness"
  | "long shots"
  | "slide tackle"
  | "curve"
  | "gk diving"
  | "gk kicking"
  | "gk positioning";

export interface FutStats {
  acceleration?: number;
  aggression?: number;
  agility?: number;
  attack_pos?: number;
  ballcontrol?: number;
  balance?: number;
  composure?: number;
  crossing?: number;
  curve?: number;
  dribbling?: number;
  finishing?: number;
  fk_acc?: number;
  gkdiving?: number;
  gkhandling?: number;
  gkkicking?: number;
  gkpositioning?: number;
  gkreflexes?: number;
  heading_acc?: number;
  interceptions?: number;
  jumping?: number;
  long_passing?: number;
  long_shots?: number;
  penalties?: number;
  reactions?: number;
  short_passing?: number;
  shot_power?: number;
  slide_tackle?: number;
  sprintspeed?: number;
  stamina?: number;
  stand_tackle?: number;
  strength?: number;
  vision?: number;
  volleys?: number;
  def_awareness?: number;
  positioning?: number;
  freekickaccuracy?: number;
  longpassing?: number;
  longshots?: number;
  slidingtackle?: number;
  headingaccuracy?: number;
  shortpassing?: number;
  shotpower?: number;
  standingtackle?: number;
  marking?: number;
}

export interface FutCardPropDataTypes {
  card_id?: string;
  team_id: number;
  futid: number;
  playerid: number;
  player_name: string;
  teamname: string;
  nationname: string;
  leaguename: string;
  age: number;
  height: number;
  weight: number;
  alt_positions: AltPositionType[];
  attackingWorkRate: AttackingWorkRate;
  carrer_player: boolean;
  chemistrytype: ChemistryType;
  defensiveWorkRate: DefensiveWorkRate;
  foot: FootType;
  playstyles: PlayStyleType[];
  prefpos1: Preposition_Type;
  rating: RATING;
  fut_stats: FutStats;
  isdynamicportrait: boolean;
  nationality: number;
  overallrating: number;
  weakfootabilitytypecode: number;
  skillmoves: number;
  futlabel: string;
  futcolors: number[];
  img_onerror: string;
  league_img_url: string;
  nation_img_url: string;
  player_img_url: string;
  club_img_url: string;
  background_img_url_l: string;
  background_img_url_s: string;
}

export interface FutCardPropTypes {
  width?: number;
  year?: YearType;
  visibility?: {
    features?: boolean;
    alt_positions?: boolean;
    playstyles?: boolean;
    first_owner?: boolean;
    squad_chemistry?: boolean;
    rating?: boolean;
    feature_label?: boolean;
  };
  mini?: boolean;
  data?: FutCardPropDataTypes;
}

export interface EditableFutCardPropTypes extends FutCardPropTypes {
  visibility: FutCardPropTypes["visibility"] & {
    playerName?: boolean;
    chmeistry_style?: boolean;
    first_owner?: boolean;
    feature_icon?: boolean;
    overlay?: boolean;
  };

  etc?: {
    featureIcon: FeatureIconType;
    overlay: OverlayType;
    overlayContracts: number;
    size: number;
  };

  isCapturing: boolean;

  filterDetail: ImageFilterDetail | null;
}

export interface YearOfLayoutsType {
  "24"?: string;
  "23"?: string;
  "22"?: string;
  "21"?: string;
  "20"?: string;
  "19"?: string;
  "18"?: string;
  "17"?: string;
  "16"?: string;
}

export type CardFormatType = "FULL" | "MINI";

export type StandardLevelType = "LOW" | "MEDIUM" | "HIGH";

export type ImageFadeType = "NO_FADE" | "NEW_FADE" | "OLD_FADE";

export type ImageFilterType = "NO_FILTER" | "ICON_FILTER" | "CUSTOM_FILTER";

export interface ColorSettingsType {
  overallrating: number;
  prefpos1: number;
  playstyles: {
    bg: number;
    stroke: number;
    color: number;
  };
  player_name: number;
  rating: {
    label: number;
    value: number;
  };
  alt_positions: {
    bg: number;
    stroke: number;
    color: number;
  };
  features: {
    bg: number;
    stroke: number;
    color: number;
  };
  fifarosters: number;
  chemistry: number;
}

export interface PlayerPageDataType {
  current_page: number;
  total: number;
  per_page: number;
  last_page: number;
  data: FutCardPropDataTypes[];
}
export interface FetchListPlayersPropType {
  color?: string;
  year?: number;
  page?: number;
}

export type RankedPosition_Type =
  | "GK"
  | "CB"
  | "FB"
  | "WB"
  | "DM"
  | "CM"
  | "WM"
  | "AM"
  | "W"
  | "F"
  | "ST"
  | "SW";

export type Preposition_Type =
  | "ST"
  | "CF"
  | "LW"
  | "RW"
  | "CAM"
  | "LM"
  | "RM"
  | "CM"
  | "CDM"
  | "RWB"
  | "LWB"
  | "LB"
  | "RB"
  | "CB"
  | "GK"
  | "LAM"
  | "RAM"
  | "LF"
  | "RF";

export type FeatureIconType = "STAR" | "TWIN";

export type ChemistryPointType =
  | "ONE"
  | "TWO"
  | "THREE"
  | "RED"
  | "GREEN"
  | "OUT_OF_POSITION";

export interface PlayerFeatureType {
  attWorkRate?: StandardLevelType;
  defWorkRate?: StandardLevelType;
  skillMoves?: number;
  weakFoot?: number;
}

export interface BasicLayoutType {
  width: number;
  height: number;
  left: number;
  top: number;
}

export interface LayoutType {
  dynamic: BasicLayoutType;
  default: BasicLayoutType;
}

export interface YearLayouts {
  avatar: LayoutType;
  playerName: BasicLayoutType;
  featureIcon: BasicLayoutType;
}

export interface EditableFutCardYearOfLayoutsType {
  "24": YearLayouts;
  "23"?: YearLayouts;
  "22"?: YearLayouts;
  "21"?: YearLayouts;
  "20"?: YearLayouts;
  "19"?: YearLayouts;
  "18"?: YearLayouts;
  "17"?: YearLayouts;
  "16"?: YearLayouts;
}

export interface SearchPlayerCardPropType {
  onClick?: (event: MouseEvent) => void;
  data: FutCardPropDataTypes;
  year?: YearType;
}

export interface ClubCard {
  id: number;
  label: string;
  img: string;
  rating: number;
}

export interface SearchClubCardPropType {
  onClick?: (event: MouseEvent) => void;
  data: ClubCard;
}

export interface NationCard {
  id: number;
  label: string;
  img: string;
  confederation_id: number;
  confederation: string;
}

export interface SearchNationCardPropType {
  onClick?: (event: MouseEvent) => void;
  data: NationCard;
}

export interface LeagueCard {
  id: number;
  label: string;
  img: string;
}

export interface SearchLeagueCardPropType {
  onClick?: (event: MouseEvent) => void;
  data: LeagueCard;
}

export interface HomeSlice {
  loading: boolean;
  topTeams: null | FutCardPropDataTypes[];
  samplePlayer: null | FutCardPropDataTypes;
  cardColors: null | CardColorType[];
}

export interface CardCreatorPropType {
  year: number;
  playerId: string | null;
  futId: string | null;
}

export interface FutMemoryCardType {
  id: number;
  name: string;
  order?: number;
  isFlipped?: boolean;
  passed?: boolean;
  pairId?: number;
  data: FutCardPropDataTypes;
}

export interface FutMemoryCardPropType {
  year: YearType;
  cardBackground: string;
  card: FutMemoryCardType;
  onClick: (e: MouseEvent) => void;
}

export interface PlayerPickCardType {
  id: number;
  img: string;
  label: string;
  packtype: string;
}

export interface GlanceAttributeType {
  id: string;
  label: string;
  value: number;
}

export interface RankedPosition {
  shortlabel: string;
  positions: Preposition_Type[];
  label: string;
  region: string;
  id: string | number;
  rankedPosition: RankedPosition_Type;
}

export interface Segment {
  label: string;
  color?: string;
  strokeColor?: string;
  textColor?:string;
}

export interface RouletteProps {
  data: Segment[];
  onStopSpinning?: (res: {index: number, data?: Segment}) => void;
  startSpinning?: boolean;
  stopSpinning?: boolean;
  backgroundImage?: string;
  textColors?: string | string[];
  fontSize?: number;
  spinDuration?: number; // Used for deceleration
  spinSpeed?: number; // Initial speed of infinite spinning
  size?: number,
  labelDistance?: number
}

export interface SlotMachineProps {
  data: Segment[];
  onStopSpinning?: (res: { index: number, data: Segment }) => void;
  startSpinning?: boolean;
  stopSpinning?: boolean;
  spinSpeed?: number;
  spinDuration?: number;
  size?: number;
  fontSize?: number;
  aspect?: number;
}

export interface CardGenerationType {
  id?:number;
  baseid?:number;
  rating:number;
  position: Preposition_Type;
  background_img_url_l: string;
  background_img_url_s: string;
  club_img_url: string;
  color: number;
}


export interface playerSlice {
  loading: boolean,
  playerData: FutCardPropDataTypes | null,
  similarCards: FutCardPropDataTypes[] | null,
  generation: Record<string, CardGenerationType[]> | null
}

export interface PositionalDataType {
  position: RankedPosition_Type,
  value: number
}

export interface TeamMatchUpPropType {
  data: ClubCard,
  directionToRight?: boolean
}
