import {Table, TableContainer, Tbody, Td, Tr} from "@chakra-ui/react";
import {capitalizeFirstLetters, convertRawDataForPlayerDetail} from "@/lib/utils";
import type {FutStats} from "@/lib/types";
import ValueHighLighter from "@/lib/components/core/ValueHighlighter";

export default function GameStats({data: rawData}: { data: FutStats | null }) {

    const data = convertRawDataForPlayerDetail(rawData);

    return <div className="flex flex-col">
        <div className="text-2xl text-gray-800 mt-5 mb-2 px-4 font-semibold">In Game Stats</div>

        {data && Object.values(data).map((item, index: number) => <div key={`game-stats-${index}`}
                                                                       className="flex flex-col mt-2">
            <div className="text-xl text-gray-800 my-1 px-4 font-semibold">
                { data && capitalizeFirstLetters(Object.keys(data)[index] ?? "")}
            </div>

            <div className="flex mt-1">
                <div className="w-1/2 ">
                    <TableContainer>
                        <Table variant='striped' size="sm">
                            <Tbody sx={{
                                "tr:nth-of-type(odd) td": {backgroundColor: "gray.100"},
                                "tr:nth-of-type(even) td": {backgroundColor: "white"}
                            }}>
                                {
                                    Object.values(item).slice(0, Math.ceil(Object.values(item).length / 2))
                                        .map((valueItem, valueIndex: number) => <Tr
                                            key={`game-stats-table-1-${index} ${Object.keys(item)[valueIndex]}`}>
                                            <Td>{capitalizeFirstLetters(Object.keys(item)[valueIndex] ?? "")}</Td>
                                            <Td isNumeric>
                                                <div className="flex justify-end">
                                                    <ValueHighLighter value={valueItem??0}/>
                                                </div>
                                            </Td>
                                        </Tr>)
                                }
                            </Tbody>
                        </Table>
                    </TableContainer>
                </div>

                <div className="w-1/2">
                    <TableContainer>
                        <Table variant='striped' size="sm">
                            <Tbody sx={{
                                "tr:nth-of-type(odd) td": {backgroundColor: "gray.100"},
                                "tr:nth-of-type(even) td": {backgroundColor: "white"}
                            }}>
                                {
                                    Object.values(item).slice(Math.ceil(Object.values(item).length / 2))
                                        .map((valueItem, valueIndex: number) => <Tr
                                            key={`game-stats-table-2-${index} ${Object.keys(item)[valueIndex]}`}>
                                            <Td>{capitalizeFirstLetters(Object.keys(item).slice(Math.ceil(Object.values(item).length / 2))[valueIndex] ?? "")}</Td>
                                            <Td isNumeric>
                                                <div className="flex justify-end">
                                                    <ValueHighLighter value={valueItem??0}/>
                                                </div>
                                            </Td>
                                        </Tr>)
                                }
                            </Tbody>
                        </Table>
                    </TableContainer>

                </div>
            </div>


        </div>)}
    </div>
}