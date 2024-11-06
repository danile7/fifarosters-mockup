import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import type { PlayerPickCardType, YearType } from "@/lib/types";
import { REACTIVE_CARD_RARITY_VALUE } from "@/lib/utils/enums";
import { PackService } from "@/lib/services";
import { itemVariantsBounceInDown, itemVariantsBounceInUp, listVariants } from "@/lib/motion";
import AppReactiveCard from "@/lib/components/core/AppReactiveCard";
import Image from "next/image";

export default function CardBundle({ year }: { year: YearType }) {
    const [cards, setCards] = useState<PlayerPickCardType[] | null>(null);

    useEffect(() => {
        const fetchBundle = async () => {
            const data: PlayerPickCardType[] | null = await PackService.fetchPackCardBundle({ year: year.toString() as YearType });
            setCards(data);
        }
        void fetchBundle();
    }, [])

    return <div className="flex gap-8 p-20 flex-col">
        <motion.div
            initial="hidden"
            animate="visible"
            variants={itemVariantsBounceInUp(0, 0.2)}
            className='flex justify-between items-center'
        >
            <div className="text-4xl font-bold text-white uppercase">
                FIFA {year} Player Pick
            </div>

            <div />

        </motion.div>

        {
            cards && (
                <motion.div
                    initial="hidden"
                    animate={"visible"}
                    variants={listVariants(0.08)}
                    className="w-full h-full gap-8 py-20 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6"
                >
                    {cards?.map((item: PlayerPickCardType) => (
                        <motion.div
                            key={item.id}
                            variants={itemVariantsBounceInDown(0, 0.2)}>
                            <Link href={`/games/pack/data?v=${year}&packtype=${item.packtype}`} className="flex flex-col gap-2 items-center">
                                <div className="uppercase text-base font-semibold text-orange-500">{item.label} {item.packtype}</div>
                                <AppReactiveCard
                                    number="160"
                                    rarity={REACTIVE_CARD_RARITY_VALUE.RARE_SECRET}
                                    front={item.img}
                                    back={item.img}
                                >
                                    <Image width = {0} height={0} alt="" src={item.img} className="w-full h-auto"/>
                                </AppReactiveCard>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            )
        }
    </div>
}