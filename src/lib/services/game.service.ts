import type {FutCardPropDataTypes, YearType, PlayerPageDataType} from "@/lib/types";
/**
 * FUT Memory
 * */
const fetchPlayers = async ({year}: {year: YearType}): Promise< FutCardPropDataTypes[] | null> => {

    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/power-players?&v=${year}`
    const res = await fetch(url,{method: "GET", cache: "no-store"});

    if (!res.ok) {
        throw new Error("Network response was not ok");
    }

    const data =(await res.json()) as PlayerPageDataType;
    console.log('data:', data.data)
    return data?.data;
};

/**
 * FUT Pack
 **/
import type {PlayerPickCardType} from "@/lib/types";
import data from '@/lib/data/game-player-pick.json'

const fetchPackCardBundle = async ({year}: {year: YearType}): Promise< PlayerPickCardType[] | null> => {

    // const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/power-players?&v=${year}`
    // const res = await fetch(url,{method: "GET", cache: "no-store"});

    // if (!res.ok) {
    //     throw new Error("Network response was not ok");
    // }

    // const data =(await res.json()) as PlayerPageDataType;
    // console.log('data:', data.data)
    // return data?.data;
    return data;
};

const fetchPackCardList = async ({year}: {year: YearType}): Promise< FutCardPropDataTypes[] | null> => {

    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/power-players?&v=${year}`
    const res = await fetch(url,{method: "GET", cache: "no-store"});

    if (!res.ok) {
        throw new Error("Network response was not ok");
    }

    const data =(await res.json()) as PlayerPageDataType;
    console.log('data:', data.data)
    return data?.data.slice(0, 12);
};

/**
 * FUT Player Pick
 * */
const fetchRandomCards = async ({year}: {year: YearType}): Promise< FutCardPropDataTypes[] | null> => {

    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/power-players?&v=${year}`
    const res = await fetch(url,{method: "GET", cache: "no-store"});

    if (!res.ok) {
        throw new Error("Network response was not ok");
    }

    const data =(await res.json()) as PlayerPageDataType;
    return data?.data;
};




/**
 * FUT Spins
 * */

export const FutMemoryService = {
    fetchPlayers
};

export const PackService = {
    fetchPackCardList,
    fetchPackCardBundle
}

export const PlayerPickService = {
    fetchRandomCards
};
