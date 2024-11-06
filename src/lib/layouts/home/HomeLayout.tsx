import type { ReactNode } from 'react'
import React from "react";
import HomeAd from "@/lib/layouts/home/HomeAd";
import HomeBanner from "@/lib/layouts/home/HomeBanner";
import Adsense from './Adsense';

interface HomeLayoutProps {
    children?: ReactNode;
}

export default function HomeLayout({ children }: HomeLayoutProps) {

    const adClient = "ca-pub-7707750014819434";
    const sideAdSlot1 = "6967084864"
    const sideAdSlot2 = "4008483681"
    const sideAdSlot3 = "4523489005"
    const sideAdSlot4 = "5841705454"
    const sideAdSlot5 = "9368621572"
    const sideAdSlot6 = "4523489005"

    return (
        <div className="flex flex-col w-full">
            <HomeAd />
            <HomeBanner />
            <Adsense dataAdClient={adClient} dataAdSlot={sideAdSlot1} />
            <Adsense dataAdClient={adClient} dataAdSlot={sideAdSlot2} />
            <Adsense dataAdClient={adClient} dataAdSlot={sideAdSlot3} />
            <Adsense dataAdClient={adClient} dataAdSlot={sideAdSlot4} />
            <Adsense dataAdClient={adClient} dataAdSlot={sideAdSlot5} />
            <Adsense dataAdClient={adClient} dataAdSlot={sideAdSlot6} />
            <div>
                {children}
            </div>
        </div>
    );
}