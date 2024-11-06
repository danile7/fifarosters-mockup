'use client'

import type {ReactNode} from 'react'
import {useRef} from "react";
import type {AppStore,} from '@/store'
import {makeStore} from "@/store";
import {Provider} from "react-redux";

export default function StoreProvider({children}: { children: ReactNode }) {

    const storeRef = useRef<AppStore>()

    if (!storeRef.current) {
        storeRef.current = makeStore();
    }

    return <Provider store={storeRef.current}>
        {children}
    </Provider>
}