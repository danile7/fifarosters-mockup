'use client'

import PageContainer from "@/lib/layouts/PageContainer";
import {Button, Checkbox, Table, TableContainer, Tbody, Td, Th, Thead, Tr,} from "@chakra-ui/react";
import HomeAd from "@/lib/layouts/home/HomeAd";
import AppInput from "@/lib/components/core/AppInput";
import type {ChangeEvent} from "react";
import mockData from '@/lib/data/mockdata.json'
import Link from "next/link";
import FutCard from "@/lib/components/core/FutCard";
import ValueHighLighter from "@/lib/components/core/ValueHighlighter";

interface TableItemType {
    id: string,
    text: string
}

const headerContent = mockData.cardRanking.headerContent as TableItemType[];
const tableContent = mockData.cardRanking.tableContent as TableItemType[][];

function OrderHighLighter({value, href}: { value: string, href: string }) {

    const newValue = parseInt(value);

    let textColor = "";

    if (newValue >= 1 && newValue <= 3) {
        textColor = 'text-lime-500 font-bold'
    } else if (newValue > 3) {
        textColor = 'text-blue-dark'
    }


    return <Link href={href} className={`p-1 ${textColor} hover:underline`}>
        {value}
    </Link>
}


export default function CardRanking() {


    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        console.log('value : ', e.target.value)
    }

    return (
        <div className="flex flex-col">
            <HomeAd/>
            <div className="flex justify-center bg-brown-300">
                <PageContainer>
                    <div className="rounded-ms flex flex-col border border-black border-opacity-20 bg-white p-4">

                        <h1 className="text-page-title font-semibold">Card Ranking</h1>
                        <div className="flex mt-1 gap-2 flex-wrap">
                            <div>
                                <AppInput className="font-light" onChange={handleChange} value="Gomez"/>
                            </div>

                            <div className="flex items-center gap-1">
                                <Checkbox>Include special cards</Checkbox>
                            </div>

                            <Button fontWeight="normal" colorScheme="blue">Get Player Ranks</Button>
                        </div>


                        <div className="flex flex-col md:flex-row pt-4 overflow-y-auto">
                            <div
                                className="sticky left-0 min-w-[202px] pr-4 bg-white flex justify-center items-center">
                                <FutCard  width={202}    />
                            </div>

                            <div className="flex-grow !text-gray-main text-[14px] sm:px-4">
                                <TableContainer>
                                    <Table variant='simple'>
                                        <Thead>
                                            <Tr>
                                                {headerContent.map(({id, text}: TableItemType) => (
                                                    <Th px={1} key={id}>{text}</Th>))}
                                            </Tr>
                                        </Thead>
                                        <Tbody>
                                            {
                                                tableContent.map((contents: TableItemType[], index: number) => (
                                                    <Tr key={`table-content-${index}`}
                                                        bg={index % 2 == 0 ? "rgba(0,0,0,0.05)" : ""}>
                                                        {
                                                            contents.map(({id, text}: TableItemType, index: number) => (
                                                                <Td px={1}
                                                                    key={`table-${index}-${id}`}>
                                                                    {/*{text}*/}
                                                                    {index >= 3 ? <OrderHighLighter
                                                                        value={text} href={"#"}/> : index === 1 ?
                                                                        <ValueHighLighter value={text}/> :
                                                                        <div className="text-gray-main pl-2">{text}</div>}
                                                                </Td>))
                                                        }
                                                    </Tr>))
                                            }
                                        </Tbody>
                                    </Table>
                                </TableContainer>
                            </div>
                        </div>
                    </div>


                </PageContainer>
            </div>
        </div>
    );
}
