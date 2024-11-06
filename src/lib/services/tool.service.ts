import type {CardColorType, ClubCard, FutCardPropDataTypes, LeagueCard, NationCard, YearType} from "@/lib/types";

const searchPlayerByName = async ({name, year}: {name: string, year: YearType}): Promise< FutCardPropDataTypes[] | null> => {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/player-lookup?name=${name}&v=${year}`
    const res = await fetch(url,{method: "GET", cache: "no-store"});

    if (!res.ok) {
        throw new Error("Network response was not ok");
    }

    const data =(await res.json()) as FutCardPropDataTypes[];
    // console.log('data:', data)
    return data;
};


const searchClubByName = async ({name}: {name: string}): Promise< ClubCard[] | null> => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/lookup-teams?term=${name}`,
        {method: "GET", cache: "no-store"},
    );

    if (!res.ok) {
        throw new Error("Network response was not ok");
    }

    const data =(await res.json()) as ClubCard[];
    // console.log('data:', data)
    return data;
};

const searchNationByName = async ({name}: {name: string}): Promise< NationCard[] | null> => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/lookup-nations?term=${name}`,
        {method: "GET", cache: "no-store"},
    );

    if (!res.ok) {
        throw new Error("Network response was not ok");
    }

    const data =(await res.json()) as NationCard[];
    // console.log('data:', data)
    return data;
};

const searchLeagueByName = async ({name}: {name: string}): Promise< LeagueCard[] | null> => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/lookup-leagues?term=${name}`,
        {method: "GET", cache: "no-store"},
    );

    if (!res.ok) {
        throw new Error("Network response was not ok");
    }

    const data =(await res.json()) as LeagueCard[];
    // console.log('data:', data)
    return data;
};


const fetchCardColors = async ({version}: {version: number}): Promise<CardColorType[] | null> => {

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/card-colors?v=${version}`,
        {method: "GET", cache: "no-store"},
    );

    if (!res.ok) {
        throw new Error("Network response was not ok");
    }

    const data =(await res.json()) as CardColorType[];
    // console.log('data:', data)
    return data;
};


export const ToolService = {
    searchPlayerByName,
    searchClubByName,
    searchNationByName,
    searchLeagueByName,
    fetchCardColors
};