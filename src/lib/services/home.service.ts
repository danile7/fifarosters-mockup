import type {FutCardPropDataTypes} from "@/lib/types";

const fetchExamplePlayer = async (): Promise<FutCardPropDataTypes> => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/example-player/24`,
    );
    if (!res.ok) {
        throw new Error("Network response was not ok");
    }
    // Explicitly type the result of res.json()
    const data = (await res.json()) as FutCardPropDataTypes;
    return data;
};

const fetchTopTeams = async (): Promise<FutCardPropDataTypes[] | null> => {
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

    // if(data.length === 0){
    //     await fetchTopTeams()
    // }

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

export const HomeService = {
    fetchExamplePlayer,
    fetchTopTeams,
};
