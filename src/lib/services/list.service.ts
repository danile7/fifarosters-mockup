import type {FetchListPlayersPropType, PlayerPageDataType} from "@/lib/types";

const fetchListPlayers = async ({color, year, page}:FetchListPlayersPropType): Promise<PlayerPageDataType> => {

    const params = new URLSearchParams();

    if (color) {
        params.append('color', color);
    }

    if (year) {
        params.append('v', year.toString());
    }

    if (page) {
        params.append('page', page.toString());
    }

    const route = `${process.env.NEXT_PUBLIC_BACKEND_URL}/players?${params.toString()}`

    // console.log('🎪', [route])
    const res = await fetch(route, { method : 'GET', cache : 'no-store'});
    if (!res.ok) {
        throw new Error('Network response was not ok');
    }
    // Explicitly type the result of res.json()
    const data = (await res.json()) as PlayerPageDataType;
    return data;
};


const fetchPowerPlayers = async ({color, year}:FetchListPlayersPropType): Promise<PlayerPageDataType> => {

    const params = new URLSearchParams();

    if (year) {
        params.append('v', year.toString());
    }

    const route = `${process.env.NEXT_PUBLIC_BACKEND_URL}/power-players?${params.toString()}`

    // console.log('🎪', [route])
    const res = await fetch(route, { method : 'GET', cache : 'no-store'});
    if (!res.ok) {
        throw new Error('Network response was not ok');
    }
    // Explicitly type the result of res.json()
    return (await res.json()) as PlayerPageDataType;
};



export const ListService = {
    fetchListPlayers,
    fetchPowerPlayers
}
