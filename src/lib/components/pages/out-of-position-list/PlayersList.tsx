import AppPagination from "../../core/AppPagination";
import PlayerCard from "./PlayerCard";

export default function PlayerList(){
    return <div className = 'w-full flex flex-col'>

            <div className = 'flex justify-center py-4'>
                <div className  = "grid  grid-cols-2 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        
                    <div className="min-w-[230px] flex rounded min-h-[180px]">
                        <PlayerCard/>
                    </div>

                    <div className="min-w-[230px] flex rounded min-h-[180px]">
                        <PlayerCard/>
                    </div>

                    <div className="min-w-[230px] flex rounded min-h-[180px]">
                        <PlayerCard/>
                    </div>

                    <div className="min-w-[230px] flex rounded min-h-[180px]">
                        <PlayerCard/>
                    </div>

                    <div className="min-w-[230px] flex rounded min-h-[180px]">
                        <PlayerCard/>
                    </div>

                </div>
            </div>
        </div>
}