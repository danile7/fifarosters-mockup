'use client'

import { useEffect, useState } from "react";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import type { FutCardPropDataTypes, YearType } from "@/lib/types";
import { YEAR_VALUES } from "@/lib/utils/enums";
import { PlayerPickService } from "@/lib/services";
import FutCard from "@/lib/components/core/FutCard";
import { IoIosArrowDown } from "react-icons/io";
import { motion } from 'framer-motion'
import { itemVariantsBounceInUp, listVariants } from "@/lib/motion";

export default function PlayerPick() {
    const [year, setYear] = useState<YearType>(YEAR_VALUES['24']);
    const [loadNew, setLoadNew] = useState<boolean>(true);
    const [loading, setLoading] = useState<boolean>(false);
    const [cards, setCards] = useState<FutCardPropDataTypes[] | null>(null)
    const [reveal, setReveal] = useState<boolean>(false);

    const loadNewCards = async () => {
        setLoadNew(true)
        setReveal(false)
        try {
            setLoading(true);
            const newCards: FutCardPropDataTypes[] | null = await PlayerPickService.fetchRandomCards({ year });
            // temp for mock action
            setCards(newCards?.slice(0, 3) ?? null)
            setLoadNew(newCards === null);
            setLoading(false);
        } catch (err) {
            console.log('err:', err)
            setLoadNew(true);
        } finally {
            setLoading(false)
        }
    }

    const revealCards = () => {
        // setLoadNew(true)
        setReveal(true)
        setLoadNew(true)
    }

    useEffect(() => {
        void loadNewCards()
    }, [year])

    return (
        <div className="w-full h-main-screen max-h-auto flex relative bg-blue-dark-gradient overflow-x-hidden">
            <div className="flex justify-center w-full max-h-full items-start gap-20 p-20 overflow-hidden">

                <motion.div initial = "hidden" animate = { loading ? 'hidden': 'visible' } variants={listVariants(0.3)} className="w-full h-full">
                    {cards?.map((card: FutCardPropDataTypes, i: number) => (
                        <motion.div
                            initial="hidden"
                            animate = { loading ? 'hidden': 'visible' }
                            variants={itemVariantsBounceInUp(i * 0.1, 1)}
                            key={card.futid}
                            className="w-full absolute h-full [perspective:1000px]"
                            style={{
                                zIndex: `${i == 1 ? 5 : 0}`,
                            }}
                        >
                            <div className={`
                            absolute top-0 left-0 w-[200px] md:w-[350px] lg:w-[400px] aspect-[0.71527778]  [transform-style:preserve-3d] [transition:transform_0.5s] backface-hidden `}
                                style={{
                                    left: `${30 + 20 * i}%`,
                                    top: `${i === 1 ? '44%' : '50%'}`,
                                    transform: `${!reveal ? `translate(-50%, -50%) rotateX(${i == 0 ? -6 : i == 1 ? 9 : -6}deg) rotateY(${i == 0 ? 15 + 180 : i == 1 ? 0 + 180 : -15 + 180}deg) scale(${i == 1 ? 1.2 : 1})` : `translate(-50%, -50%) rotateX(${i == 0 ? -6 : i == 1 ? 9 : -6}deg) rotateY(${i == 0 ? 15 : i == 1 ? 0 : -15}deg) scale(${i == 1 ? 1.2 : 1})`}`,
                                }}>
                                <div
                                    className="w-full h-full absolute backface-hidden [transform:rotateY(180deg)] reflect-below"
                                >
                                    <div
                                        className="absolute w-full h-full"
                                        style={{
                                            background: "url('/assets/images/card-memory-default-bg.gif')",
                                            backgroundPosition: "center",
                                            backgroundSize: "cover",
                                        }}
                                    />
                                    {/* Reflection for Back Face */}
                                    <div
                                        className="absolute inset-0 bg-gradient-to-t from-transparent to-white opacity-0 pointer-events-none" />
                                </div>

                                <div
                                    className="absolute w-full h-full backface-hidden reflect-below"

                                >
                                    <FutCard
                                        year={year}
                                        data={card}
                                        mini={false}
                                        visibility={{
                                            features: true,
                                            alt_positions: true,
                                            playstyles: true,
                                            first_owner: true,
                                            squad_chemistry: true,
                                            rating: true,
                                            feature_label: true
                                        }} />
                                    {/* Reflection for Front Face */}
                                    <div
                                        className="absolute inset-0 bg-gradient-to-t from-transparent to-white opacity-0 pointer-events-none" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <div className="fixed bottom-4 left-1/2 -translate-x-1/2 flex gap-4">
                    {
                        loadNew ? (<Button isLoading={loading} colorScheme='teal' variant='solid' onClick={async () => {
                            await loadNewCards()
                        }}>
                            Load New
                        </Button>) : (<Button colorScheme='teal' variant='solid' onClick={() => {
                            revealCards()
                        }}>
                            Reveal
                        </Button>)
                    }

                    <Menu>
                        <MenuButton fontWeight="normal" fontSize="sm" as={Button} rightIcon={<IoIosArrowDown />}
                            colorScheme='teal'>
                            {year}
                        </MenuButton>

                        <MenuList>
                            <MenuItem onClick={() => setYear(YEAR_VALUES['24'])}>24</MenuItem>
                            <MenuItem onClick={() => setYear(YEAR_VALUES['23'])}>23</MenuItem>
                            <MenuItem onClick={() => setYear(YEAR_VALUES['22'])}>22</MenuItem>
                            <MenuItem onClick={() => setYear(YEAR_VALUES['21'])}>21</MenuItem>
                            <MenuItem onClick={() => setYear(YEAR_VALUES['20'])}>20</MenuItem>
                            <MenuItem onClick={() => setYear(YEAR_VALUES['19'])}>19</MenuItem>
                            <MenuItem onClick={() => setYear(YEAR_VALUES['18'])}>18</MenuItem>
                            <MenuItem onClick={() => setYear(YEAR_VALUES['17'])}>17</MenuItem>
                            <MenuItem onClick={() => setYear(YEAR_VALUES['16'])}>16</MenuItem>
                        </MenuList>
                    </Menu>
                </div>

                <div className="fixed left-4 top-14 text-5xl font-bold text-white uppercase" style={{ textShadow: '0px 0px 3px #c1e7f4, 0px 0px 10px #50a4c9, 0px 0px 30px #1e729d' }}>
                    FIFA {year} Player Pick
                </div>
            </div>
        </div>
    );
}