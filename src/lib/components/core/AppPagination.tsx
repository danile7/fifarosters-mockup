import {Button, ButtonGroup, Menu, MenuButton, MenuItem, MenuList,} from "@chakra-ui/react";
import {IoIosArrowDown} from "react-icons/io";

interface PlayerListHeaderPropType {
    total:number;
    currentPage:number;
    lastPage:number;
    perPage:number;
    range?:boolean;
}

export default function AppPagination(props: PlayerListHeaderPropType) {

    const {currentPage, lastPage, perPage, total, range = true} = props;
    const from = perPage * (currentPage - 1) + 1 ;
    const to = (from + perPage - 1) > total ? total : from + perPage - 1;
    const isStart:boolean = from === 1;
    const isEnd:boolean = total === to;

    const updatePage = (newPage:number) => {
        if (typeof window !== 'undefined') {
            const searchParams = new URLSearchParams(window.location.search);
            searchParams.set('page', newPage.toString()); // Update 'v' query parameter
            const newUrl = `${window.location.pathname}?${searchParams.toString()}`;

            // Redirect to the new URL, causing a page reload
            window.location.href = newUrl;
        }
    }

    return (
        <div className="flex flex-wrap items-center justify-between">
            {range ? (<div>
                    Showing {from} ~ {to} of {total} players
                </div>) :
                (<div>
                    Showing {total} players
                </div>)}

            <div className="flex items-center gap-1">
                <Menu>
                    <MenuButton variant="outline" as={Button} fontWeight="normal" rightIcon={<IoIosArrowDown/>}>
                        Page {currentPage}
                    </MenuButton>

                    <MenuList>
                        {Array(lastPage).fill(true).map((_, index:number) => (
                            <MenuItem
                                key = {`menu-${index}`}
                                onClick = {() => updatePage(index + 1)}
                            >Page {index + 1}</MenuItem>
                        ))}
                    </MenuList>
                </Menu>

                <ButtonGroup isAttached variant="solid">
                    <Button variant="outline" fontWeight="normal" isDisabled = {isStart} onClick = {() => updatePage(currentPage - 1)}>
                        Prev
                    </Button>
                    <Button variant="outline" fontWeight="normal" isDisabled = {isEnd} onClick = {()=> updatePage(currentPage + 1)}>
                        Next
                    </Button>
                </ButtonGroup>
            </div>
        </div>
    );
}
