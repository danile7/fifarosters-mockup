'use client'

import { useEffect, useState } from "react";
import _ from "lodash";
import ValueHighLighter from "@/lib/components/core/ValueHighlighter";
import DATA from "@/lib/utils/data";
import { capitalizeFirstLetters, getRankedPosition } from "@/lib/utils";
import type {
    FutStats,
    Preposition_Type,
    RankedPosition_Type,
    GlanceAttributeType
} from "@/lib/types";

export type PlayerAttributeCategory = 'attacking' | 'skill' | 'movement' | 'power' | 'mentality' | 'defending';

const getAttributesByRankedPosition = (data: FutStats, rankedPosition: RankedPosition_Type): GlanceAttributeType[] => {

    const relevantAttributes = DATA.attributeMappingByRankedPosition?.[rankedPosition] || [];
    return _.compact(_.map(relevantAttributes, (attr) => {
        const value = data ? data[attr] : undefined;
        return value !== undefined ? { id: attr, label: _.startCase(attr), value } : undefined;
    }));
};

const getCategoryRating = (data: FutStats, playerAttributeCategory: PlayerAttributeCategory): number => {

    const attrs = DATA.attributeMappingByCategory?.[playerAttributeCategory];
    const total: number = _.sumBy(attrs, (attr: keyof FutStats) => data[attr] ?? 0);
    const average: number = total / (attrs?.length ?? 1);
    return Math.round(average);
};

const getBestAttrs = (data: FutStats): GlanceAttributeType[] => {

    if (data) {
        const returnValue: GlanceAttributeType[] = Object.values(data)
            .map((item: number, index: number) => ({ id: `best-attr-${index}`, label: Object.keys(data)[index], value: item } as GlanceAttributeType))
            .sort((a: GlanceAttributeType, b: GlanceAttributeType) => b.value - a.value)
            .slice(0, 6)
        return returnValue;
    }

    return [];
}

const getWorstAttrs = (data: FutStats, position: Preposition_Type): GlanceAttributeType[] => {
    const rankedPosition: RankedPosition_Type = getRankedPosition(position);
    const attributes: GlanceAttributeType[] = getAttributesByRankedPosition(data, rankedPosition)
    return attributes.sort((a, b) => a.value - b.value).slice(0, 6);
}

const getPlayerSnapshot = (data: FutStats): GlanceAttributeType[] => {

    const category: PlayerAttributeCategory[] = ['attacking', 'skill', 'movement', 'power', 'mentality', 'defending'];
    const ratings: GlanceAttributeType[] = _.map(category, (category: PlayerAttributeCategory, index: number) => ({
        id: `player-snapshot-${index}`,
        label: category,
        value: getCategoryRating(data, category)
    }))

    return ratings;
}

export default function Glance({ data, position }: { data: FutStats | null, position: Preposition_Type | null }) {

    const [bestAttributes, setBestAttributes] = useState<GlanceAttributeType[] | null>(null);
    const [worstAttributes, setWorstAttributes] = useState<GlanceAttributeType[] | null>(null);
    const [playerSnapshot, setPlayerSnapshot] = useState<GlanceAttributeType[] | null>(null);

    useEffect(() => {
        if (data !== null) {
            const pos: Preposition_Type = position ?? 'ST'
            const best: GlanceAttributeType[] = getBestAttrs(data)
            const worst: GlanceAttributeType[] = getWorstAttrs(data, pos)
            const snapshot: GlanceAttributeType[] = getPlayerSnapshot(data)

            setBestAttributes(best)
            setWorstAttributes(worst)
            setPlayerSnapshot(snapshot)
        }
    }, [data, position])

    return <div className="flex flex-col w-full p-4">
        <div className="text-2xl text-gray-800 mt-5 mb-2 font-semibold">At a Glance</div>

        <div className="w-full flex flex-wrap gap-8">
            <div className=" w-[calc(50%_-_16px)] flex flex-col mt-2">
                <div className="font-semibold">
                    Best Attributes
                </div>

                <div className="flex flex-col border-t border-l border-r border-gray-300">
                    {bestAttributes?.map((item: GlanceAttributeType) => <div
                        key={`best-attributes-${item.id}`} className="border-b p-2 flex items-center gap-2">
                        <ValueHighLighter value={item.value} />
                        <div>{capitalizeFirstLetters(item.label)}</div>
                    </div>)}
                </div>
            </div>

            <div className="w-[calc(50%_-_16px)] flex flex-col mt-2">
                <div className="font-semibold">
                    Worst Attributes (for ST)
                </div>

                <div className="flex flex-col border-t border-l border-r border-gray-300">
                    {worstAttributes?.map((item: GlanceAttributeType) => <div
                        key={`best-attributes-${item.id}`} className="border-b p-2 flex items-center gap-2">
                        <ValueHighLighter value={item.value} />
                        <div>{capitalizeFirstLetters(item.label)}</div>
                    </div>)}
                </div>
            </div>

            <div className="w-[calc(50%_-_16px)] flex flex-col mt-2">
                <div className="font-semibold">
                    Player Snapshot
                </div>

                <div className="flex flex-col border-t border-l border-r border-gray-300">
                    {playerSnapshot?.map((item: GlanceAttributeType) => <div
                        key={`best-attributes-${item.id}`} className="border-b p-2 flex items-center gap-2">
                        <ValueHighLighter value={item.value} />
                        <div>{capitalizeFirstLetters(item.label)}</div>
                    </div>)}
                </div>
            </div>

        </div>


    </div>
}


