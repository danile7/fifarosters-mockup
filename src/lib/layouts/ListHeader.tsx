import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {IoIosArrowDown} from "react-icons/io";
import type {ListHeaderPropType} from "@/lib/types";
import {useSearchParams} from "next/navigation";


export default function ListHeader(props: ListHeaderPropType) {


    const {
        titleYear,
        titleCardType,
        yearSelector,
        subtitle,
        extraContent
    } = props;

    const searchParams = useSearchParams();
    const year:number = searchParams.get('v') ? parseInt(searchParams.get('v')!) : 24;

    const yearRange = [];

    if (yearSelector && yearSelector?.from <= yearSelector?.to) {
        for (let i = yearSelector?.from; i <= yearSelector?.to; i++) {
            yearRange.push(i);
        }
    }

    yearRange.reverse();

    const updateYear = (newYear:number) => {
        if (typeof window !== 'undefined') {
            const searchParams = new URLSearchParams(window.location.search);
            searchParams.set('v', newYear.toString()); // Update 'v' query parameter
            searchParams.set('page', '1'); // Update 'v' query parameter

            const newUrl = `${window.location.pathname}?${searchParams.toString()}`;

            // Redirect to the new URL, causing a page reload
            window.location.href = newUrl;
        }
    }

    return <div className="flex flex-col">
        <h1 className="text-page-title font-semibold">
            FIFA &nbsp;
            {year? year: titleYear}
            &nbsp;
            {titleCardType ? titleCardType : ''}
        </h1>

        {subtitle && <div className="py-4 text-page-subtitle">
            {subtitle}
        </div>}


        {yearSelector && <div>
            <Menu>
                <MenuButton
                    as={Button}
                    rightIcon={<IoIosArrowDown/>}
                    fontWeight="normal"
                    variant="outline"
                >
                    {yearSelector.label ? yearSelector.label : ''} {year}
                </MenuButton>

                <MenuList zIndex={99}>
                    {yearRange.map((i: number) => (
                        <MenuItem key={i} onClick={() => updateYear(i)}>{yearSelector?.label ? yearSelector.label : ''} {i}</MenuItem>))}
                </MenuList>
            </Menu>
        </div>}

        {extraContent && extraContent}
    </div>
}

