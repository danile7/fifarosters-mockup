'use client'

import {useState} from "react";
import type { MouseEvent } from "react";
import {Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay} from "@chakra-ui/react";
import {FaChevronLeft, FaChevronRight} from "react-icons/fa6";
import {Tab, Tabs, TabScreen} from "react-tabs-scrollable";
import "react-tabs-scrollable/dist/rts.css";

import Version from "@/lib/components/pages/lists/advanced-filter/Version";
import Position from "@/lib/components/pages/lists/advanced-filter/Position";
import League from "@/lib/components/pages/lists/advanced-filter/League";
import Nation from "@/lib/components/pages/lists/advanced-filter/Nation";
import Club from "@/lib/components/pages/lists/advanced-filter/Club";
import Price from "@/lib/components/pages/lists/advanced-filter/Price";
import PlayStyle from "@/lib/components/pages/lists/advanced-filter/PlayStyle";
import Rating from "@/lib/components/pages/lists/advanced-filter/Rating";
import Foot from "@/lib/components/pages/lists/advanced-filter/Foot";
import Star from "@/lib/components/pages/lists/advanced-filter/Star";
import SMWF from "@/lib/components/pages/lists/advanced-filter/SMWF";
import type {FilterDataOptionType, ModalProps} from "@/lib/types";

const filterDataOption: FilterDataOptionType[] = [
    {
        id: 0,
        title: 'Version',
        component: <Version/>
    },
    {
        id: 1,
        title: 'Positions',
        component: <Position/>
    }
    ,
    {
        id: 2,
        title: 'Leageus',
        component: <League/>


    },
    {
        id: 3,
        title: 'Nations',
        component: <Nation/>
    }
    , {
        id: 4,
        title: 'Clubs',
        component: <Club/>
    },
    {
        id: 5,
        title: 'Price',
        component: <Price/>
    },
    {
        id: 6,
        title: 'PlayStyles',
        component: <PlayStyle/>
    },
    {
        id: 7,
        title: 'Rating',
        component: <Rating/>
    },
    {
        id: 8,
        title: 'SM & WF',
        component: <SMWF/>
    },
    {
        id: 9,
        title: 'Stars',
        component: <Star/>
    },
    {
        id: 10,
        title: 'Foot',
        component: <Foot/>
    }
];

const SimpleTabs = () => {

    const [activeTab, setActiveTab] = useState(0);

    const onTabClick = (e: MouseEvent, index:number) => {
        setActiveTab(index);
    };

    return (
        <>
            <Tabs
                activeTab={activeTab}
                onTabClick={onTabClick}
                leftBtnIcon={<FaChevronLeft/>}
                rightBtnIcon={<FaChevronRight/>}
                hideNavBtnsOnMobile={false}
                hideNavBtns={false}
                leftNavBtnClassName="!border-none hover:!bg-transparent hover:!text-blue-500 px-2"
                rightNavBtnClassName="!border-none hover:!bg-transparent hover:!text-blue-500 px-2"
            >
                {filterDataOption.map(({id, title}: FilterDataOptionType) => (
                    <Tab key={`title-${id}`}
                         className="!bg-transparent !border-transparent !px-2 focus:!bg-transparent !text-black !shadow-none focus:shadow-none focus:!text-blue-500 focus:font-bold">{title}</Tab>
                ))}
            </Tabs>


            {filterDataOption.map(({id, component}: FilterDataOptionType) => (
                <TabScreen
                    key={`screen-${id}`}
                    activeTab={activeTab}
                    index={id}
                    className="some-animation-class"
                >
                    {component ? component : ""}
                </TabScreen>
            ))}

        </>
    );
};


export default function Modal({isOpen, onClose}: ModalProps) {
    return <Drawer
        size="md"
        isOpen={isOpen}
        placement='right'
        onClose={onClose}

    >
        <DrawerOverlay/>
        <DrawerContent>
            <DrawerCloseButton/>
            <DrawerHeader>Advanced Filter</DrawerHeader>
            <DrawerBody>
                <SimpleTabs/>
            </DrawerBody>
        </DrawerContent>
    </Drawer>
}