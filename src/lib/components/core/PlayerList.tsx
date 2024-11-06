import NoResult from "@/lib/components/core/NoResult";
import FutCard from "@/lib/components/core/FutCard";
import { Table, TableContainer, Tbody, Th, Thead, Tr } from "@chakra-ui/react";
import type { FutCardPropDataTypes, PlayerListType, YearType } from "@/lib/types";
import FutTableCard from "@/lib/components/core/FutTableCard";
import { motion } from 'framer-motion'
import { itemVariantsBounceInDown } from "@/lib/motion";

function CardList({ list, year }: { list: FutCardPropDataTypes[], year: number }) {
    return <>
        {
            list && list.length !== 0 ? (<div
                className="grid grid-cols-2 gap-x-0 gap-y-4 pb-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 py-4">

                {list.map((data: FutCardPropDataTypes, index: number) => (
                    <motion.div 
                    key={data.team_id + data.player_name + index}
                    initial = "hidden"
                    animate = "visible"
                    variants={itemVariantsBounceInDown(0.05* index, 0.3)}
                    >
                        <FutCard
                            width={135}
                            data={data}
                            year={year.toString() as YearType}
                            visibility={{
                                features: true,
                                feature_label: false
                            }}
                        />
                    </motion.div>
                ))}

            </div>) :
                <NoResult />
        }</>
}


function TableList({ list }: { list: FutCardPropDataTypes[] }) {
    return <>
        {list && list.length !== 0 ? (<div className="flex flex-col">
            <TableContainer className='py-2'>
                <Table variant='simple' size="sm">
                    <Thead>
                        <Tr>
                            <Th>Team</Th>
                            <Th>League</Th>
                            <Th>Nationality</Th>
                            <Th>Player Image</Th>
                            <Th>Player Name</Th>
                            <Th>OVR</Th>
                            <Th>POT</Th>
                            <Th>Pos</Th>
                            <Th>Age</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {list.map(({ player_name }: FutCardPropDataTypes, index: number) => (<FutTableCard key={player_name + index}
                            club_img_url={"https://www.fifarosters.com/assets/clubs/fifa24/241.png"}
                            league_img_url={"https://www.fifarosters.com/assets/leagues/53.png"}
                            nationality_img_url={"https://www.fifarosters.com/assets/nations/fifa17/52.png"}
                            avatar_img_url={"https://www.fifarosters.com/assets/players/fifa24/faces/158023.png"}
                            playerId={158023}
                            playerName={"Lionel Messi"}
                            OVR={94}
                            POT={94}
                            Pos={"RW"}
                            Age={37} />))}

                    </Tbody>
                </Table>
            </TableContainer>
        </div>) : <NoResult />
        }</>
}

export default function PlayerList({ list, type = 'Card', year = 24 }: { list: FutCardPropDataTypes[] | null, type?: PlayerListType, year?: number }) {
    return <>
        {type === 'Card' ? (list && <CardList list={list} year={year} />) : (list && <TableList list={list} />)}
    </>

}