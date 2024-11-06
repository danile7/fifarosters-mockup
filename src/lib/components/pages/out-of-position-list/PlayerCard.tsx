import Image from "next/image";
import HighlightedValue from "../../core/HighlightedValue";

interface PlayerCardPropType {
    player_img_url?: string;
    name?: string;
    nation_img_url?: string;
    club_img_url?: string;
    league_img_url?: string;
}

export default function PlayerCard(props: PlayerCardPropType) {
    const {
        player_img_url = "https://www.fifarosters.com/assets/players/fifa24/faces/199451.png",
        name = "Ben Yedder",
        nation_img_url = "https://fifarosters.com/assets/nations/fifa17/18.png",
        club_img_url = "https://fifarosters.com/assets/leagues/fifa24/16.png",
        league_img_url = "https://fifarosters.com/assets/clubs/fifa24/69.png"
    } = props;
    return (
        <div className="relative flex w-full text-base text-gray-light-dark">
            <div className="absolute leading-none flex flex-col items-center justify-center gap-[0.2em]">
                <div className="font-bold text-[1.2em]">85</div>
                <div className="text-[0.5em] font-bold uppercase">CM</div>
                <Image width={0} height={0} className="w-[0.8em] aspect-[1]" src="logo-dark.png" alt="logo"/>
            </div>

            <div className="relative flex w-3/5 flex-col items-center justify-center">
                <Image width={0} height={0} className="w-[6em] " src={player_img_url} alt="player"/>
                <div className=" text-[0.7em] font-bold leading-normal">
                    {name}
                </div>
                <div className="flex justify-between gap-[0.3em] leading-tight ">
                    <div className="flex flex-col">
                        <div className="text-[0.45em]">PAC</div>
                        <div className="text-[0.6em] font-semibold">84</div>
                    </div>

                    <div className="flex flex-col">
                        <div className="text-[0.45em]">PAC</div>
                        <div className="text-[0.6em] font-semibold">84</div>
                    </div>

                    <div className="flex flex-col">
                        <div className="text-[0.45em]">PAC</div>
                        <div className="text-[0.6em] font-semibold">84</div>
                    </div>

                    <div className="flex flex-col">
                        <div className="text-[0.45em]">PAC</div>
                        <div className="text-[0.6em] font-semibold">84</div>
                    </div>

                    <div className="flex flex-col">
                        <div className="text-[0.45em]">PAC</div>
                        <div className="text-[0.6em] font-semibold">84</div>
                    </div>

                    <div className="flex flex-col">
                        <div className="text-[0.45em]">PAC</div>
                        <div className="text-[0.6em] font-semibold">84</div>
                    </div>
                </div>

                <div className="flex items-center justify-center gap-1 py-[0.25em]">
                    <Image width={0} height={0}
                           className="aspect-[1.68] w-[1em] "
                           src={nation_img_url}
                           alt="nation"
                    />
                    <Image width={0} height={0}
                           className="aspect-[1] w-[1em]"
                           src={club_img_url}
                           alt="club"
                    />
                    <Image width={0} height={0}
                           className="aspect-[1] w-[1em]"
                           src={league_img_url}
                           alt="league"
                    />
                </div>
            </div>

            <div className="flex flex-col justify-center gap-1 text-[0.45em] leading-snug">
                <div className="flex items-center justify-center gap-1 border border-gray-main px-[0.25em]">
                    3★
                </div>
                <div className="flex items-center justify-center gap-1 border border-gray-main px-[0.25em]">
                    4★
                </div>
                <div className="flex items-center justify-center gap-1 border border-gray-main px-[0.25em]">
                    H/H
                </div>
                <div className="flex items-center justify-center gap-1 border border-gray-main px-[0.25em]">
                    ?
                </div>
            </div>

            <div className="flex flex-grow flex-col leading-none pl-[0.3em] gap-[0.2em]">
                <div className="flex items-center gap-[0.35em]">
                    <HighlightedValue value={86}/>

                    <div className="font-bold text-[0.85em]">CMD</div>
                </div>

                <div className="flex items-center gap-[0.35em]">
                    <HighlightedValue value={86}/>

                    <div className="text-[0.85em]">LB/RB</div>
                </div>

                <div className="flex items-center gap-[0.35em]">
                    <HighlightedValue value={86}/>
                    <div className="text-[0.85em]">LWB/RWB</div>
                </div>

                <div className="flex items-center gap-[0.35em]">
                    <HighlightedValue value={86}/>
                    <div className="text-[0.85em]">CM</div>
                </div>

                <div className="flex items-center gap-[0.35em]">
                    <HighlightedValue value={86}/>
                    <div className="text-[0.85em]">CB</div>
                </div>

                <hr className="my-[0.15em]"/>

                <div className="flex items-center gap-[0.35em]">
                    <HighlightedValue value={33}/>
                    <div className="text-[0.85em]">AGE</div>
                </div>

                <div className="flex items-center gap-[0.35em]">
                    <HighlightedValue value={88}/>
                    <div className="text-[0.85em]">POT</div>
                </div>
            </div>
        </div>
    );
}
