'use client'

import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import Script from "next/script";
export const metadata = {
    title: "Fifaroastars",
    description: "Fifaroastars",
    icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {

    return (
        <html lang="en" className={`${GeistSans.variable}`}>

            <head>
                <meta name="google-adsense-account" content="ca-pub-7707750014819434" />
            </head>
            <body>{children}</body>
        </html>
    );
}