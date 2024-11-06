'use client'

import { useEffect, useState } from "react";
import FutCard from "@/lib/components/core/FutCard";
import PageContainer from "@/lib/layouts/PageContainer";
import { useAppDispatch } from "@/store";
import { fetchSampleCardColors, fetchSamplePlayer, fetchTopTeam } from "@/store/home/homeSlice";
import type { CardColorType, FutCardPropDataTypes, HomeSlice } from "@/lib/types";
import { useSelector } from "react-redux";
import { motion } from 'framer-motion'
import { itemVariantsBounceIn, itemVariantsBounceInDown, itemVariantsZoomInFade } from "@/lib/motion";

export default function Page() {
    const { samplePlayer: examplePlayer, topTeams: team, cardColors } = useSelector(
        ({ home }: { home: HomeSlice }) => home
    );
    const [activeColor, setActiveColor] = useState<CardColorType | null>(null);
    const dispatch = useAppDispatch();
    const cardWidth = 135;

    // Fetch data on component mount
    useEffect(() => {
        console.log('use efffect is called')
        dispatch(fetchSamplePlayer())
            .then(() => dispatch(fetchTopTeam()))
            .then(() => dispatch(fetchSampleCardColors()))
            .catch((err) => console.log('error:', err));
    }, [dispatch]);

    // Update activeColor state every 0.5 seconds
    useEffect(() => {
        if (cardColors && cardColors.length > 0) {
            let colorIndex = 0;
            const interval = setInterval(() => {
                const currentColor = cardColors[colorIndex];
                setActiveColor(currentColor ?? null);
                colorIndex = (colorIndex + 1) % cardColors.length; // Loop through the colors
            }, 2000);

            return () => clearInterval(interval); // Cleanup interval on component unmount
        }
    }, [cardColors]);

    return (
        <div
            className="bg-gray-400 flex justify-center"
            style={{
                background: 'url("/assets/images/homepage_bg1_black.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <PageContainer>
                <div className="w-full flex flex-col md:flex-row h-full">
                    <div className="h-[408px] w-full md:w-3/5 flex flex-col items-center justify-between py-8">
                        <h1 className="text-2xl font-semibold text-white">{`Explore player's best positions`}</h1>
                        <div className="w-full flex-grow flex justify-center items-center">
                            {team?.map((data: FutCardPropDataTypes, index: number) => (
                                <motion.div
                                    initial="hidden"
                                    animate="visible"
                                    variants={itemVariantsBounceInDown(0.1 * index, 0.8)}
                                    key={`top-team-${index}`}
                                    style={{ margin: '0 -8px', zIndex: 2 - Math.abs(2 - index) }}>
                                    <FutCard
                                        data={data}
                                        width={cardWidth * (1.1 - Math.abs(index - 2.0) / 10 + (index === 2 ? 0.1 : 0))}
                                        visibility={{ playstyles: true }}
                                    // Use activeColor if applicable
                                    />
                                </motion.div>
                            ))}
                        </div>

                        <h1 className="text-2xl font-semibold text-white">Manage your own dynasty</h1>
                    </div>
                    <div className="h-[408px] flex-grow flex flex-col items-center justify-start py-8">
                        <h1 className="text-2xl font-semibold text-white">Try our card creator</h1>
                        <div className="w-full flex-grow flex justify-center items-start pt-6">
                            {examplePlayer !== null && (
                                <motion.div
                                    initial="hidden"
                                    animate="visible"
                                    whileHover={{ scale: 1.3, transition: { druation: 0.2, delay: 0 } }}
                                    whileTap={{
                                        scale: 1.1, // Slight scale down when tapped/clicked
                                        transition: { duration: 0.1 },
                                    }}
                                    transition={{ duration: 0.2 }}
                                    variants={itemVariantsBounceIn(0, 0.8)}
                                >
                                    <FutCard
                                        width={cardWidth}
                                        data={{
                                            ...examplePlayer,
                                            ...(activeColor && {
                                                background_img_url_l: activeColor.background_img_url_l,
                                                background_img_url_s: activeColor.background_img_url_s,
                                                futcolors: activeColor.futcolors,
                                            })
                                        }}
                                        visibility={{ playstyles: true }}
                                    />
                                </motion.div>
                            )}
                        </div>
                    </div>
                </div>
            </PageContainer>
        </div>
    );
}
