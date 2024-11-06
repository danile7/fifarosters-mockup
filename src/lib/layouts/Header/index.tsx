"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import AppHoverDropDown from "@/lib/components/core/AppHoverDropDown";
import { FaUserAlt } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import navigationData from "@/lib/data/navigation.json";
import {
    Button,
    IconButton
} from "@chakra-ui/react";
import SearchPlayerModal from "@/lib/components/pages/home/SearchPlayerModal";
import type {LinkItemType} from '@/lib/types';

const navigationKeys = ["Tools", "Lists", "Games"] as const;
type NavigationKey = (typeof navigationKeys)[number];

const linkData: Record<NavigationKey, LinkItemType[]> = {
    Tools: navigationData.tools?.items as LinkItemType[],
    Lists: navigationData.lists?.items as LinkItemType[],
    Games: navigationData.games?.items as LinkItemType[],
};

const Header = () => {
    
    const [openMenu, setOpenMenu] = useState(false);
    const [searchModalOpen, setSearchModalOpen] = useState(false);

    const closeSearch = () => {
        setSearchModalOpen(false);
    };

    return (
        <nav
            id="primary-navigation"
            className="relative flex flex-col border-b-4 border-yellow-main bg-gray-main"
            role="navigation"
        >
            <div className="flex w-full justify-between overflow-visible">
                <div className="relative flex md:hidden">
                    <button
                        className="flex cursor-pointer items-center justify-center bg-black bg-opacity-0 px-3 text-yellow-main transition-all duration-200 hover:bg-opacity-20"
                        onClick={() => setOpenMenu(!openMenu)}
                    >
                        <i className="la la-bars" />
                    </button>
                </div>

                <div className="flex h-full gap-5 text-yellow-main">
                    <a href = "/" className="flex cursor-pointer select-none items-center gap-4 p-3 text-lg font-bold transition-all duration-200 hover:underline">
                        <Image
                            width={0}
                            height={0}
                            src="/logo.png"
                            className="h-4 w-4"
                            alt={"logo"}
                        />

                        <div>FifaRosters</div>
                    </a>

                    <div className="hidden gap-2 gap-3 md:flex">
                        {navigationKeys.map((navigationHeader: NavigationKey) => (
                            <AppHoverDropDown
                                key={navigationHeader}
                                menuButton={
                                    <div className="white-space-none relative flex h-full cursor-pointer items-center justify-center overflow-visible bg-black bg-opacity-0 px-3 transition-all duration-150 hover:bg-opacity-20 [&>div]:hover:block">
                                        {navigationHeader}
                                        <i className="la la-angle-down ml-2 text-[8px]" />
                                    </div>
                                }
                            >
                                <div className="flex w-[250px] flex-col bg-white text-gray-main">
                                    {linkData[navigationHeader].map(
                                        ({ id, href, text }: LinkItemType) => (
                                            <Link
                                                key={id}
                                                href={href}
                                                className="block px-4 py-1 text-left hover:bg-black hover:bg-opacity-10"
                                            >
                                                {text}
                                            </Link>
                                        ),
                                    )}
                                </div>
                            </AppHoverDropDown>
                        ))}
                    </div>
                </div>

                <div className="flex items-center gap-2 px-6">
                    <IconButton
                        variant="ghost"
                        size="sm"
                        _hover={{ bg: "rgba(255, 255, 255, 0.1)" }}
                        aria-label="Search database"
                        icon={
                            <IoIosSearch className="text-xl font-semibold text-yellow-main" />
                        }
                        onClick={() => setSearchModalOpen(true)}
                    />

                    <Button
                        className="text-yellow-main"
                        leftIcon={<FaUserAlt className="text-yellow-main" />}
                        variant="ghost"
                        size="sm"
                        _hover={{ bg: "rgba(255, 255, 255, 0.1)" }}
                        aria-label="Search database"
                    >
                        <div className="pl-1 text-yellow-main">Login</div>
                    </Button>
                </div>
            </div>

            <SearchPlayerModal isOpen = {searchModalOpen} onClose = {closeSearch}/>
        </nav>
    );
};

export default Header;
