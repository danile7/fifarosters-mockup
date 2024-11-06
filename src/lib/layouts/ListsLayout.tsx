'use client'

import type {ReactNode} from "react";
import {useEffect, useState} from 'react';
import {useParams} from "next/navigation";
import HomeAd from "@/lib/layouts/home/HomeAd";
import PageContainer from "@/lib/layouts/PageContainer";
import AdvancedFilterModal from "@/lib/components/pages/lists/advanced-filter/AdvancedFilterModal";
import {Button} from "@chakra-ui/react";
import { FaFilter } from "react-icons/fa";

export default function ListsLayout({header, body, showAdvancedFilter = true}: { header: ReactNode, body: ReactNode, showAdvancedFilter?:boolean }) {

    const [openFilterModal, setOpenFilterModal] = useState(false)


    // const params = useParams();
    //
    // console.log('params:😀', params)

    return <div className="flex flex-col">
        <HomeAd/>
        <div className="flex justify-center bg-gray-100 ">
            <PageContainer>
                <div className="rounded-ms flex flex-col border border-black border-opacity-20 bg-white p-4">
                    {header}
                    {
                        showAdvancedFilter && (
                            <div className="flex py-2">
                                <Button variant="solid" colorScheme="green" onClick={() => setOpenFilterModal(true)} leftIcon = {<FaFilter />}>
                                    Advanced Filter
                                </Button>
                            </div>
                        )
                    }
                    <hr className="my-4"/>
                    {body}
                </div>
            </PageContainer>
        </div>

        <AdvancedFilterModal isOpen={openFilterModal} onClose={() => setOpenFilterModal(false)}/>
    </div>
}