'use client'

import Link from "next/link";
import {useParams, useSearchParams} from "next/navigation";
import PageContainer from "@/lib/layouts/PageContainer";
import {Button, Tab, TabList, TabPanel, TabPanels, Tabs} from "@chakra-ui/react";
import HomeAd from "@/lib/layouts/home/HomeAd";
import ImageCreator from "@/lib/components/pages/card-creator/ImageCreator";
import CardCreator from "@/lib/components/pages/card-creator/CardCreator";
import {IoMdWarning} from "react-icons/io";

export default function CreateCard() {

    const {route} = useParams();
    const searchParams = useSearchParams();
    const year: number = searchParams.get('v') ? parseInt(searchParams.get('v')!) : 24;
    const playerId: string | null = searchParams.get('player')! ?? null;
    const futId: string | null = searchParams.get('futId')! ?? null;

    return (
        <div className="flex flex-col ">
            <HomeAd/>
            <div className="flex justify-center bg-gray-100 ">
                <PageContainer>
                    <div className="rounded-ms flex flex-col border border-black border-opacity-20 bg-white p-4">

                        <h1 className="text-page-title font-semibold">FIFA 24 Card Creator</h1>

                        <div className="text-lg">Use this tool to create a FIFA Ultimate Team (FUT) Card.</div>

                        <div className="text-lg">
                            If you like making your own card designs, try our new{" "}
                            <Link href="card-designer" className="text-blue-dark hover:underline">Card Designer</Link>
                        </div>

                        <Tabs variant='enclosed'>
                            <TabList>
                                <div className="flex justify-between w-full mt-4">
                                    <div className="flex">
                                        <Tab>Card Creator</Tab>
                                        <Tab>Image Creator</Tab>
                                    </div>
                                    <div className="flex">
                                        <Button variant="ghost" colorScheme="red" leftIcon={<IoMdWarning/>}>Having a
                                            problem
                                            ? </Button>
                                    </div>
                                </div>
                            </TabList>
                            <TabPanels>
                                <TabPanel pl={0} pr={0} pt={4} pb={4} sx={{padding: "16px 0px"}}
                                          className="p-0">
                                    <CardCreator
                                        year={year}
                                        playerId={playerId}
                                        futId={futId}/>
                                </TabPanel>
                                <TabPanel>
                                    <ImageCreator/>
                                </TabPanel>
                            </TabPanels>
                        </Tabs>
                    </div>


                </PageContainer>
            </div>
        </div>
    );
}
