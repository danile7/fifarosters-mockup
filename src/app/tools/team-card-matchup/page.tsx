'use client'

import { useState } from "react";
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel } from "@chakra-ui/react";
import PageContainer from "@/lib/layouts/PageContainer";
import HomeAd from "@/lib/layouts/home/HomeAd";
import PlayersToShow from "@/lib/components/pages/team-card-matchup/PlayersToShow";
import TeamMatchup from "@/lib/components/pages/team-card-matchup/TeamMatchup";
import type { ClubCard } from "@/lib/types";
import { defaultClub } from "@/lib/utils/data";
import SearchTeam from "@/lib/components/pages/team-card-matchup/SearchTeam";

export default function TeamCardMatchup() {

    const [club, setClub] = useState<ClubCard>(defaultClub);
    const [club2, setClub2] = useState<ClubCard>(defaultClub);

    return (
        <div className="flex flex-col">
            <HomeAd />
            <div className="flex justify-center bg-gray-100 ">
                <PageContainer>
                    <div className="rounded-ms flex flex-col border border-black border-opacity-20 bg-white p-4">


                        <h1 className="text-page-title font-semibold">Create a Team Card Matchup</h1>

                        <hr className="my-6" />

                        <div className="flex flex-col gap-2">
                            <div className="text-xl font-semibold">
                                Teams
                            </div>

                            <div className="flex gap-4 md:flex-row">
                                <div className="w-full md:w-1/2">
                                    <SearchTeam onSelectTeam={data => setClub(data)} />
                                </div>

                                <div className="w-full md:w-1/2">
                                    <SearchTeam onSelectTeam={data => setClub2(data)} />
                                </div>

                            </div>

                            <div>
                                <Accordion allowMultiple sx={{ border: '0px solid transparent' }}>
                                    <AccordionItem>
                                        <AccordionButton
                                            className="border-none" border="none"
                                            px={0}
                                            bg="none"
                                            sx={{ border: 'none' }}
                                            _hover={{
                                                bg: "transparent"
                                            }}
                                        >
                                            <div className="hover:underline text-blue-dark">
                                                Advanced Options
                                            </div>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel pb={4} pl={0} pr={0}>
                                            <PlayersToShow />
                                        </AccordionPanel>
                                    </AccordionItem>

                                </Accordion>
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <TeamMatchup data={club} />
                            <TeamMatchup data={club2} directionToRight={false} />
                        </div>
                    </div>
                </PageContainer>
            </div>
        </div>
    );
}
