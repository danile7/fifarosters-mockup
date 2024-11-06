import type {CardGenerationType, FutCardPropDataTypes} from "@/lib/types";

const fetchPlayerById = async ({playerId, futId, year}:{playerId: string | null, futId: string | null, year: number}): Promise<FutCardPropDataTypes | null> => {

    const params = new URLSearchParams();

    if (futId) {
        params.append('futid', futId.toString());
    }

    if (playerId) {
        params.append('player', playerId.toString());
    }

    if (year) {
        params.append('v', year.toString());
    }

    const route = `${process.env.NEXT_PUBLIC_BACKEND_URL}/player?${params.toString()}`
    // const route= 'https://v2.fifarosters.com/api/player?futid=117679597';

    // console.log('route:::', route)

    const res = await fetch(route, { method : 'GET', cache : 'no-store'});
    if (!res.ok) {
        throw new Error('Network response was not ok');
    }
    // Explicitly type the result of res.json()
    const data = (await res.json()) as FutCardPropDataTypes;

    if(Object.keys(data).length === 0){
        return null;
    }

    return data;
};


const fetchSimiliarCards = async (): Promise<FutCardPropDataTypes[] | null> => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/team-players/24`,
        {method: "GET", cache: "no-store"},
    );
    if (!res.ok) {
        throw new Error("Network response was not ok");
    }
    // Explicitly type the result of res.json(
    // ')
    const data = (await res.json()) as FutCardPropDataTypes[];

    const returnValue: FutCardPropDataTypes[] = data
        .sort((a, b) => b.overallrating - a.overallrating)
        .slice(0, 5);


    if (returnValue.length < 5) {
        return null;
    }

    const safeReturnValue: FutCardPropDataTypes[] = [
        returnValue[3],
        returnValue[1],
        returnValue[0],
        returnValue[2],
        returnValue[4],
    ].filter((item): item is FutCardPropDataTypes => item !== undefined);

    if (safeReturnValue.length < 5) {
        return null;
    }

    return safeReturnValue;
};

const fetchGenerationByPlayerId = async ({playerId}:{playerId: string | null}): Promise<Record<string, CardGenerationType[]> | null> => {

    const params = new URLSearchParams();

    // if (futId) {
    //     params.append('futid', futId.toString());
    // }

    if (playerId) {
        params.append('playerid', playerId.toString());
    }

    const route = `${process.env.NEXT_PUBLIC_BACKEND_URL}/fut-links?${params.toString()}`
    // const route= 'https://v2.fifarosters.com/api/player?futid=117679597';

    // console.log('route:::', route)

    const res = await fetch(route, { method : 'GET', cache : 'no-store'});
    if (!res.ok) {
        throw new Error('Network response was not ok');
    }
    // Explicitly type the result of res.json()
    const data = (await res.json()) as Record<string, CardGenerationType[]>;

    if(Object.keys(data).length === 0){
        return null;
    }

    return data;
};


export const PlayerService = {
    fetchPlayerById,
    fetchSimiliarCards,
    fetchGenerationByPlayerId
}
