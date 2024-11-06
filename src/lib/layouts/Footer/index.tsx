"use client";

import Link from "next/link";
import Image from 'next/image'
import PageContainer from "@/lib/layouts/PageContainer";
import navigationData from "@/lib/data/navigation.json";


interface LinkItemType {
    id: number;
    href: string;
    text: string;
}

const tools: LinkItemType[] = navigationData.tools?.items as LinkItemType[] || [];
const lists: LinkItemType[] = navigationData.lists?.items as LinkItemType[] || []
const games: LinkItemType[] = navigationData.games?.items as LinkItemType[] || [];

const toolsAndGames: LinkItemType[] = [...tools, ...games];
const listsFirstHalf: LinkItemType[] = lists.filter(
    (item, index) => index < lists.length / 2,
);

const listsSecondHalf: LinkItemType[] = lists.filter(
    (item, index) => index >= lists.length / 2,
);

function FunToolsAndGames() {
    return (
        <>
            <h1 className="pb-2 text-xl font-semibold">Fun Tools & Games</h1>
            {toolsAndGames.map(({id, href, text}: LinkItemType) => (
                <Link key={id} href={href} className="hover:underline">
                    {text}
                </Link>
            ))}
        </>
    );
}

function ListsFirst() {
    return (
        <>
            <h1 className="pb-2 text-xl font-semibold">Lists</h1>
            {listsFirstHalf.map(({id, href, text}: LinkItemType) => (
                <Link key={id} href={href} className="hover:underline">
                    {text}
                </Link>
            ))}
        </>
    );
}

function ListsSecond() {
    return (
        <>
            <h1 className="pb-2 text-xl font-semibold">&nbsp;</h1>
            {listsSecondHalf.map(({id, href, text}: LinkItemType) => (
                <Link key={id} href={href} className="hover:underline">
                    {text}
                </Link>
            ))}
        </>
    );
}

function Socials() {
    return (
        <>
            <h1 className="pb-3 text-xl font-semibold">Social</h1>

            <div className="grid grid-cols-2 gap-2">
                <a href="https://twitter.com/fifarosters" target="_blank"
                   className={`bg-twitter flex h-6 w-6 items-center justify-center rounded`}><i
                    className={` fa fa-twitter text-white text-lg`}/> </a>
                <a href="https://facebook.com/fifarosters" target="_blank"
                   className={`bg-facebook flex h-6 w-6 items-center justify-center rounded`}><i
                    className={` fa fa-facebook text-white text-lg`}/> </a>
                <a href="https://youtube.com/fifarosters" target="_blank"
                   className={`bg-youtube flex h-6 w-6 items-center justify-center rounded`}><i
                    className={` fa fa-youtube text-white text-lg`}/> </a>
                <a href="https://instagram.com/fifarosters" target="_blank"
                   className={`bg-instagram flex h-6 w-6 items-center justify-center rounded`}><i
                    className={` fa fa-instagram text-white text-lg`}/> </a>
                <a href="https://reddit.com/r/fifarosters" target="_blank"
                   className={`bg-reddit flex h-6 w-6 items-center justify-center rounded`}><i
                    className={` fa fa-reddit text-red-700 text-lg`}/> </a>
                <a href="https://discord.gg/XPE3B2u" target="_blank"
                   className={`bg-discord flex h-6 w-6 items-center justify-center rounded`}><i
                    className={` lab la-discord text-white text-lg`}/> </a>

            </div>

            <Link href="" className="mt-8 w-full text-sm text-white hover:underline">
                Advertise on FifaRosters
            </Link>
        </>
    );
}

export default function Footer() {
    return (
        <div className="flex flex-col  ">
            <div className="flex w-full justify-center bg-gray-dark text-base text-white">
                <PageContainer>
                    <div className="flex w-full flex-col p-8 md:flex-row md:px-0 text-white">
                        <div className="flex w-full flex-col pb-4 md:w-1/2 xl:w-1/4">
                            <FunToolsAndGames/>
                        </div>
                        <div className="flex w-full flex-col md:w-1/2 lg:flex-row xl:w-3/4">
                            <div className="flex w-full pb-4 lg:w-2/3">
                                <div className="flex w-1/2 flex-col">
                                    <ListsFirst/>
                                </div>
                                <div className="flex w-1/2 flex-col">
                                    <ListsSecond/>
                                </div>
                            </div>
                            <div className="flex w-full flex-col items-start pb-4 lg:w-1/3">
                                <Socials/>
                            </div>
                        </div>
                    </div>
                </PageContainer>
            </div>

            <div className="flex justify-center bg-gray-light-dark text-sm text-yellow-main">
                <PageContainer>
                    <div
                        className="flex w-full flex-col items-start justify-between px-8 py-4 md:flex-row md:items-center md:px-0">
                        <div
                            className="flex flex-col flex-wrap items-start whitespace-nowrap pb-4 pr-4 md:flex-row md:items-center">
                            <a className="flex cursor-pointer select-none items-center gap-4 p-3 text-lg font-bold transition-all duration-200 hover:underline">
                                <Image width={0} height={9} className="h-4 w-4" src="/logo.png" alt="logo"/>

                                <div className="text-yellow-main">FifaRosters</div>
                            </a>

                            <div className="flex gap-4 !text-yellow-main items-center">
                                <Link
                                    href=""
                                    className="flex h-full items-center justify-center hover:underline"
                                >
                                    Sign Up
                                </Link>

                                <Link
                                    href=""
                                    className="flex h-full items-center justify-center hover:underline"
                                >
                                    Contact Us
                                </Link>
                                <Link
                                    href=""
                                    className="flex h-full items-center justify-center hover:underline"
                                >
                                    Privacy Polity
                                </Link>
                                <Link
                                    href=""
                                    className="flex h-full items-center justify-center hover:underline"
                                >
                                    FAQs
                                </Link>

                                <Link
                                    href=""
                                    className="flex h-full items-center justify-center hover:underline"
                                >
                                    <Image
                                        width={18}
                                        height={18}
                                        src="/assets/images/translate-light.png"
                                        alt="img"
                                    />
                                </Link>
                            </div>
                        </div>

                        <div className="flex flex-wrap items-center gap-2 whitespace-nowrap text-yellow-main">
                            <div className="font-bold">Database Version</div>

                            <div className="flex gap-2">
                                <div>FIFA 2019-09-20</div>

                                <div>FUT 2024-06-28</div>
                            </div>
                        </div>
                    </div>
                </PageContainer>
            </div>
        </div>
    );
}
