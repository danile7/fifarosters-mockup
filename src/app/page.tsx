// 'use client';
// import { getTopTeams, getExamplePlayer } from '../services/fifaService';
// import { Card } from '@/src/components/Card/index';

// import examplePlayer from '@/src/data/examplePlayer.json';

import HomeLayout from "@/lib/layouts/home/HomeLayout";
import PageContainer from "@/lib/layouts/PageContainer";
import Link from "next/link";
import AppInput from "@/lib/components/core/AppInput";
import {Button} from "@chakra-ui/react";

const Home = () => {

    return <HomeLayout>
        <div className="bg-gray-100 flex justify-center items-center pt-4">
            <PageContainer>
                <div
                    className="flex flex-col md:flex-row p-4 pb-8 w-full border border-black border-opacity-20 rounded-sm bg-white text-gray-dark">
                    <div className=" md:w-1/3 p-2 flex flex-col justify-start items-center gap-3">
                        <div className=" h-16 flex justify-center items-center text-blue-dark">
                            <i className="fa fa-search text-4xl"/>
                        </div>
                        <div className="text-2xl font-semibold ">Search Players</div>
                        <div className="text-sm w-full text-center">
                            Start with a real player. See where else they play well.
                        </div>
                        <AppInput placeholder="start typing player name"/>

                        <Link href="" className="text-blue-dark hover:underline">
                            or browse the players list
                        </Link>
                    </div>

                    <div className=" md:w-1/3  p-2 flex flex-col justify-start items-center gap-3">
                        <div className=" h-16 flex justify-center items-center text-blue-dark">
                            <i className="fa fa-users text-4xl"/>
                        </div>
                        <div className="text-2xl font-semibold">Search Teams</div>
                        <div className="text-sm w-full text-center">
                            Browse team rosters and information
                        </div>
                        <AppInput placeholder="start typing a team name"/>

                    </div>

                    <div className=" md:w-1/3  p-2 flex flex-col justify-start items-center gap-3">
                        <div className=" h-16 flex justify-center items-center text-blue-dark">
                            <div className="border-2 border-black border-opacity-20 p-2 flex gap-1 ">
                                <span className="text-4xl">90</span>
                                <span
                                    className="w-[2px] bg-blue-dark bip-bip"/>
                            </div>
                        </div>
                        <div className="text-2xl font-semibold">Enter player manually</div>
                        <div className="text-sm w-full text-center">
                            Check out where your youth academy players fit best
                        </div>

                        <Button colorScheme="green" fontWeight="normal">
                            Create a New Player
                        </Button>
                    </div>
                </div>
            </PageContainer>
        </div>
    </HomeLayout>
}

export default Home;
