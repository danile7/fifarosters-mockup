import RootLayout from "@/lib/layouts/RootLayout";
import MainLayout from "@/lib/layouts/MainLayout";
import type { ReactNode } from "react";


export default function Layout({children} : {children : ReactNode}) {
    return <RootLayout>
        <MainLayout>
            {children}
        </MainLayout>
    </RootLayout>
}