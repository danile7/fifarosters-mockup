import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {IoIosArrowDown} from "react-icons/io";

export default function FilterGroup(){
    return <div className="flex items-center gap-2">
        <div className="font-semibold">Filter Group: </div>
        <Menu>
            <MenuButton
                as={Button}
                rightIcon={<IoIosArrowDown />}
                fontWeight="normal"
                variant="outline"
            >
                All Group
            </MenuButton>

            <MenuList>
                <MenuItem>All Group</MenuItem>
                <MenuItem>Knockout Stage</MenuItem>
                <MenuItem>Group State</MenuItem>
            </MenuList>
        </Menu>
    </div>
}