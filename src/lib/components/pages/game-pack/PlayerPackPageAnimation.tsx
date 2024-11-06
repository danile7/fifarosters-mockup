'use client'

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from 'framer-motion';
import FutCard from "@/lib/components/core/FutCard";
import CircleAnimation from "@/lib/components/pages/game-pack/CircleAnimation";
import {
    fade,
    itemVariantsBounceIn,
    itemVariantsBounceInDown,
    itemVariantsBounceInUp,
    itemVariantsFadeIn,
    itemVariantsZoomIn,
    listVariants
} from "@/lib/motion";
import type { FutCardPropDataTypes, YearType } from "@/lib/types";

export default function PlayerPackPageAnimation(props: { year: YearType, data: FutCardPropDataTypes | null, onClick?: () => void }) {

    const {
        year,
        data,
        onClick
    } = props;
    const [isVisibile, setIsVisible] = useState<boolean>(true);
    const [infoImages, setInfoImages] = useState<string[] | null>(null)

    const delay = 3500;

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, delay); // 5-second delay
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const showItems = data ? [data.club_img_url, data.nation_img_url, data.league_img_url] : [];
        setInfoImages(showItems)
    }, [data])

    return <div className="w-full h-screen flex bg-black relative overflow-hidden " onClick={onClick}>

        <motion.div
            initial="hidden"
            animate={isVisibile ? "hidden" : "visible"}
            variants={itemVariantsFadeIn(2, 2)}
            className="absolute w-full h-full left-0 top-0">
            <CircleAnimation />
        </motion.div>

        {
            infoImages && (<motion.div
                initial="hidden"
                animate={isVisibile ? "visible" : "hidden"}
                variants={listVariants(0.04)}
                className="absolute left-0 top-0 w-full h-full flex items-center justify-center gap-8 "
            >
                {
                    infoImages.map((img: string, index) => (
                        <motion.div
                            key={index + 'info'}
                            initial='hidden'
                            animate="visible"
                            variants={index % 2 === 0 ? itemVariantsBounceInUp(0.02 * index, 0.2) : itemVariantsBounceInDown(0.02 * index, 0.2)}
                            className="h-1/2">
                            <div
                                className="w-[200px] h-full flex justify-center items-center border-t-[4px] border-b-[4px] border-emerald-500  text-white !-skew-x-12 overflow-hidden bg-[linear-gradient(223deg,_#1dc18e40,_#ffffff00)] bg-opacity-5">
                                <div className="skew-x-12 relative z-[5]">
                                    <Image width={0} height={0} alt="" src={img} className="w-[250px] h-auto" />
                                </div>

                                <Image width={0} height={0} alt="" src={img}
                                    className="absolute w-full h-auto  transform scale-[2] filter sepia-[0.5] grayscale opacity-20" />
                            </div>
                        </motion.div>
                    ))
                }
            </motion.div>)
        }

        {data && (
            <div className="absolute w-full h-full flex justify-center items-center ">

                <motion.div
                    initial="visible"
                    animate="hidden"
                    variants={fade(4.25, 0.3)}
                    className="w-full h-full absolute left-0 top-0"
                >
                    <motion.div
                        initial="hidden"
                        animate={"visible"}
                        variants={itemVariantsBounceIn(3.25, 0.2)}
                        className="w-full h-full absolute left-0 top-0 "
                    >
                        <Image src={'/assets/boom-1.gif'} width={0} height={0} alt="" className="absolute w-[1800px] left-1/2 top-1/2 opacity-100 transform -translate-x-1/2 -translate-y-1/2" />
                    </motion.div>
                </motion.div>


                <motion.div
                    initial="hidden"
                    animate={"visible"}
                    variants={itemVariantsZoomIn}
                    className="w-[350px]"
                >
                    <div className="relative w-full h-full flex justify-center items-center ">
                        <div className="relative w-full z-[10] opacity-100 filter brightness-[1.2]">
                            <FutCard data={data} visibility={{
                                features: true,
                                alt_positions: true,
                                playstyles: true,
                                first_owner: true,
                                squad_chemistry: true,
                                rating: true,
                                feature_label: true
                            }} />
                            <div className="w-full h-full absolute left-0 top-0 scale-125" />
                        </div>
                    </div>

                </motion.div>


                <motion.div
                    initial="visible"
                    animate="hidden"
                    variants={fade(4.5, 0.3)}
                    className="w-full h-full absolute left-0 top-0 flex justify-center items-center mix-blend-color-dodge"
                >
                    <motion.div
                        initial="hidden"
                        animate={"visible"}
                        variants={itemVariantsBounceIn(3.25, 0.2)}
                        className="w-[900px] opacity-100 transform-none aspect-[1.76]"
                        style={{
                            backgroundImage: "url('/assets/spark.gif')",
                            backgroundPosition: 'center',
                            backgroundSize: 'cover'
                        }}
                    >
                    </motion.div>
                </motion.div>
            </div>
        )}

    </div>
}