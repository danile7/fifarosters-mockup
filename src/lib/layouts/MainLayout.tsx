'use client'

import Header from "@/lib/layouts/Header";
import Footer from "@/lib/layouts/Footer";
import type { ReactNode } from "react";
import { ChakraProvider } from '@chakra-ui/react'
import StoreProvider from "@/lib/layouts/StoreProvider";
import NextTopLoader from 'nextjs-toploader';

export default function MainLayout({ children }: { children: ReactNode }) {
    return (
        <StoreProvider>
            <NextTopLoader showSpinner={false} />
            <div className="flex w-full flex-col">
                <ChakraProvider>
                    <Header />
                    
                    {children}
                    <Footer />
                </ChakraProvider>
            </div>
        </StoreProvider>
    );
}
