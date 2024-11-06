'use client'

import { useEffect } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Button,
    ButtonGroup,
    Heading,
    IconButton,
    Text
} from "@chakra-ui/react";
import type { CardGenerationType, playerSlice, YearType } from "@/lib/types";
import { useAppDispatch } from "@/store";
import FutCard from "@/lib/components/core/FutCard";
import GameStats from "@/lib/components/pages/player/GameStats";
import Glance from "@/lib/components/pages/player/Glance";
import PlayerInfo from "@/lib/components/pages/player/PlayerInfo";
import PositionalRatings from "@/lib/components/pages/player/PositionalRatings";
import PlayerDescriptions from "@/lib/components/pages/player/PlayerDescriptions";
import SimilarCards from "@/lib/components/pages/player/SimilarCards";
import { useParams, useSearchParams } from "next/navigation";
import { fetchGenerationData, fetchPlayerData, fetchSimilar } from "@/store/player/playerSlice";
import PageContainer from "@/lib/layouts/PageContainer";
import { getCardCreatorRoute } from "@/lib/utils";
import CardVersion from "@/lib/components/pages/player/CardVerion";
import { FaFacebookF, FaTwitter } from "react-icons/fa";

export default function Player() {

    const dispatch = useAppDispatch();
    const { playerData, generation } = useSelector(({ player }: { player: playerSlice }) => (player));
    const { route } = useParams();
    const searchParams = useSearchParams();
    const year: number = searchParams.get('v') ? parseInt(searchParams.get('v')!) : 24;
    const playerId: string | null = searchParams.get('player')! ?? null;
    const futId: string | null = searchParams.get('futId')! ?? null;

    useEffect(() => {
        dispatch(fetchPlayerData({ playerId, futId, year }))
            .then(() => dispatch(fetchGenerationData({ playerId })))
            .then(() => dispatch(fetchSimilar({ playerId, futId, year })))
            .catch(err => console.log('error:', err))

    }, [dispatch, playerId, futId, year]);

    return <div className="flex justify-center bg-gray-100">
        <PageContainer>

            <div className="flex flex-col border-r border-l border-gray-300 bg-white p-4">
                <Heading as="h2" size="xl" fontWeight="regular">{playerData?.player_name}</Heading>

                <Text py="2">{playerData?.overallrating} &nbsp; {playerData?.prefpos1} | FIFA {year}</Text>

                <div className="flex gap-2 py-1 border-t border-b border-gray-300 ">
                    <ButtonGroup isAttached>
                        <Button variant="outline">Share</Button>
                        <IconButton icon={<FaTwitter />} aria-label="" bg="blue.400" color="white" />
                        <IconButton icon={<FaFacebookF />} aria-label="" bg="blue.500" color="white" />
                    </ButtonGroup>
                    <Button bg="green.400" color="white">Download Card</Button>
                    <Link href={getCardCreatorRoute({ year, futId, playerId })}>
                        <Button bg="blue.200" color='white'>Edit with Card Creator</Button>
                    </Link>
                </div>

                <div className="flex flex-col xl:flex-row">

                    <div className="min-w-[275px] max-w-[275px] flex flex-col pr-4">
                        <div className="max-w-[275px]">
                            {
                                playerData !== null && (
                                    <FutCard
                                        year={year.toString() as YearType}
                                        data={{ ...playerData }}
                                        visibility={{
                                            features: true,
                                            feature_label: true,
                                            squad_chemistry: true,
                                            alt_positions: true,
                                            playstyles: true
                                        }} />)
                            }
                        </div>

                        <div>
                            {generation !== null && (
                                <div className="flex flex-col">
                                    <div className="flex flex-col py-3">
                                        {
                                            <CardVersion
                                                title={`Other FUT ${year} Versions`}
                                                year={year.toString()}
                                                item={
                                                    Object.values(generation)[
                                                    Object
                                                        .keys(generation)
                                                        .findIndex(item => item === year.toString())
                                                    ]!
                                                }
                                            />
                                        }
                                    </div>
                                </div>)}
                        </div>

                        <Accordion allowMultiple>
                            <AccordionItem>
                                <h2>
                                    <AccordionButton>
                                        <Box as='span' flex='1' textAlign='center'>
                                            Generations
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    {generation !== null && (
                                        <div className="flex flex-col">
                                            <div className="flex flex-col">
                                                {
                                                    Object
                                                        .values(generation)
                                                        .reverse()
                                                        .map((item: CardGenerationType[], index: number) => (
                                                            item.length > 0 && ( // Only render if item has elements
                                                                <div key={`container ${index}`} className="border-b border-gray-200 py-2">
                                                                    <CardVersion
                                                                        title={`FUT ${Object.keys(generation).reverse()[index] ?? ''}`}
                                                                        year={Object.keys(generation).reverse()[index] ?? ''}
                                                                        item={item}
                                                                    />
                                                                </div>
                                                            )
                                                        ))
                                                }
                                            </div>
                                        </div>)}
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>

                        <PlayerInfo data={playerData} />
                    </div>

                    <div className="flex-grow flex flex-col">
                        <GameStats data={playerData?.fut_stats ?? null} />
                        <Glance data={playerData?.fut_stats ?? null} position={playerData?.prefpos1 ?? null} />

                    </div>

                    <div className="xl:max-w-[275px] flex flex-col pl-4">
                        <PositionalRatings data={playerData?.fut_stats ?? null} />
                        <PlayerDescriptions data={playerData} />
                        <SimilarCards />
                    </div>
                </div>
            </div>

        </PageContainer>
    </div>
}