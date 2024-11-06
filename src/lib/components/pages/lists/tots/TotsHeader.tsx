import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {IoIosArrowDown} from "react-icons/io";

export default function TotsHeader(){

    return <div className="flex flex-col">
        <h1 className="text-page-title font-semibold">
            Team of the Season | FIFA 24

        </h1>

        <div className="flex items-center gap-2 flex-wrap">
            <Menu>
                <MenuButton
                    as={Button}
                    rightIcon={<IoIosArrowDown />}
                    fontWeight="normal"
                    variant="outline"
                >
                    FIFA 24
                </MenuButton>

                <MenuList>
                    <MenuItem>FIFA 24</MenuItem>
                    <MenuItem>FIFA 23</MenuItem>
                    <MenuItem>FIFA 22</MenuItem>
                    <MenuItem>FIFA 21</MenuItem>
                    <MenuItem>FIFA 20</MenuItem>
                    <MenuItem>FIFA 19</MenuItem>
                    <MenuItem>FIFA 18</MenuItem>
                    <MenuItem>FIFA 17</MenuItem>
                    <MenuItem>FIFA 16</MenuItem>
                </MenuList>
            </Menu>

            <Menu>
                <MenuButton
                    as={Button}
                    rightIcon={<IoIosArrowDown />}
                    fontWeight="normal"
                    variant="outline"
                    className="w-full lg:w-[370px]"
                >
                    All TOTS Players
                </MenuButton>

                <MenuList>
                    <MenuItem>All TOTS Players</MenuItem>
                    <MenuItem>Bundesliga - GER 1 (27 players)</MenuItem>
                    <MenuItem>Calcio A- ITA 1 (27 players)</MenuItem>
                    <MenuItem>LaLiga Santander — ESP 1 (27 players)</MenuItem>
                    <MenuItem>Ligue 1 - FRA 1 (27 players)</MenuItem>
                    <MenuItem>Premier League — ENG 1 (26 players)</MenuItem>
                    <MenuItem>— (10 players)</MenuItem>
                    <MenuItem>— (9 players)</MenuItem>
                    <MenuItem>— (9 players)</MenuItem>
                    <MenuItem>— (9 players)</MenuItem>
                    <MenuItem>— (8 players)</MenuItem>
                    <MenuItem>Süper Lig — TUR 1 (7 players)</MenuItem>
                    <MenuItem>Major League Soccer — MLS (5 players)</MenuItem>
                    <MenuItem>Dawry Jameel — SAU 1 (4 players)</MenuItem>
                    <MenuItem>EFL Championship — ENG 2 (4 players)</MenuItem>
                    <MenuItem>Eredivisie — NED 1 (4 players)</MenuItem>
                    <MenuItem>Belgium Pro League — BEL 1 (3 players)</MenuItem>
                    <MenuItem>Liga NOS - POR 1 (3 players)</MenuItem>
                    <MenuItem>T-Mobile Ekstraklasa — POL 1 (1 players)</MenuItem>
                    <MenuItem>
                        Raiffeisen Super League — SUI 1 (1 players)
                    </MenuItem>
                    <MenuItem>Allsvenskan — SWE 1 (1 players)</MenuItem>
                    <MenuItem>Scottish Premiership — SPFL (1 players)</MenuItem>
                    <MenuItem>
                        Österreichische Fußball-Bundesliga —AUT 1 (1 players)
                    </MenuItem>
                </MenuList>
            </Menu>

            <Button colorScheme = "blue">Filter List</Button>
        </div>
    </div>
}

