import Link from "next/link";
import type { CardGenerationType, YearType } from "@/lib/types";
import { getHexColor, getPlayerDetailRoute } from "@/lib/utils";
import { Image, Text } from "@chakra-ui/react";
import { motion } from 'framer-motion'

export const FutLinkCard = ({ data, year }: { data: CardGenerationType, year: YearType }) => {
    const {
        id,
        baseid,
        rating,
        position,
        color,
        background_img_url_l,
        club_img_url,
    } = data;
    return <Link
        href={getPlayerDetailRoute({ futId: id, playerId: baseid, year })}
        className="w-[41px] aspect-[41/63] flex flex-col items-center justify-center rounded-md overflow-hidden"
        style={{ background: `url(${background_img_url_l})`, backgroundSize: '157%', backgroundPosition: 'center', color: getHexColor(color) }}>
        <div className="text-[18px] leading-[0.8] font-bold">{rating}</div>
        <div className="text-[11px] font-extrabold">{position}</div>
        <Image src={club_img_url} width="23px" height="23px" alt='' />
    </Link>
}

export default function CardVersion({ title, year, item }: { title: string, year: string, item: CardGenerationType[] }) {
    return (
        <div className="flex flex-col">
            <Text py="1" fontWeight="semibold">
                {title}
            </Text>
            <div className="flex flex-wrap gap-1">
                {
                    item.map((cardData: CardGenerationType, idx: number) => (
                        <motion.div
                            key={`${year}${idx}${cardData.id}`}
                            whileHover={{ scale: 1.15, zIndex: 10, transition: { druation: 0.1, delay: 0 } }}
                            whileTap={{
                                scale: 1.05, // Slight scale down when tapped/clicked
                                transition: { duration: 0.1 },
                            }}
                        >
                            <FutLinkCard data={cardData} year={year as YearType} />
                        </motion.div>
                    ))
                }
            </div>
        </div>
    )
}
