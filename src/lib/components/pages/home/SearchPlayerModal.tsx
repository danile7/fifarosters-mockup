import type { ModalProps } from "@/lib/types";
import type { FutCardPropDataTypes, YearType } from "@/lib/types";
import {
    Button, Input, InputGroup, InputLeftElement, InputRightElement,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay, Spinner,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoIosArrowDown, IoIosSearch } from "react-icons/io";
import { YEAR_VALUES } from "@/lib/utils/enums";
import { ToolService } from "@/lib/services";
import { getPlayerDetailRoute } from "@/lib/utils";

const PlayerCard = ({ data, year, onClose }: { data: FutCardPropDataTypes, year: YearType, onClose: () => void; }) => {

    const {
        player_name,
        prefpos1,
        overallrating,
        nation_img_url,
        player_img_url,
        club_img_url,
    } = data;

    return <Link href={getPlayerDetailRoute({ futId: data.futid, playerId: data.playerid, year: year })}
        onClick={() => onClose()}
        className="border-b min-h-[40px] [&>.hover-effect]:hover:opacity-100 [&>div>div>.player-name]:hover:text-blue-500 [&>div>div>.player-name]:hover:font-bold relative">
        <div
            className="hover-effect opacity-0 absolute h-full w-[100px] left-0 top-0  overflow-hidden transition-all duration-100">
            <div className="relative w-full h-full overflow-hidden">
                <div className="absolute h-full w-full transform skew-x-[30deg] -left-[10px] bg-gradient-to-r from-blue-200 to-transparent" />

            </div>
        </div>
        <div className="absolute w-full h-full top-0 left-0 flex justify-end ">
            <div className="w-2/3 h-full bg-gradient-to-l from-gray-500 to-transparent" />
        </div>
        <div className="absolute w-full h-full flex items-center px-5 gap-2">
            <Image width={0} height={0} className="w-[36px] aspect-1" src={player_img_url} alt='player' />
            <Image width={0} height={0} className="w-[20px] aspect-1" src={club_img_url} alt='club' />
            <Image width={0} height={0} className="w-[30px] aspect-1 border" src={nation_img_url}
                alt='nationality' />
            <div className="flex-grow  flex flex-col justify-center">
                <div className="player-name text-[0.9em]">{player_name}</div>
                <div className="text-[0.7em] text-gray-400">{prefpos1}</div>
            </div>

            <div className="flex h-full justify-center items-center font-semibold">
                {overallrating}
            </div>
        </div>
    </Link>
}

export default function SearchPlayerModal(props: ModalProps) {

    const { isOpen, onClose } = props;
    const [loading, setLoading] = useState(false);
    const [list, setList] = useState<FutCardPropDataTypes[] | null>(null);
    const [year, setYear] = useState<YearType>(YEAR_VALUES['24']);
    const [player, setPlayer] = useState('');

    const searchPlayers = async (name: string, year: YearType) => {
        if (name.trim().length !== 0) {
            setLoading(true)
            setList(null);
            const res: FutCardPropDataTypes[] | null = await ToolService.searchPlayerByName({ name, year })
            setList(res)
            setLoading(false);
        }
        else {
            setList(null)
        }
    }

    useEffect(() => {
        void searchPlayers(player, year);
    }, [player, year])

    const init = () => {
        setList(null);
        setPlayer('');
        onClose();
    }

    return <Modal size="xl" isOpen={isOpen} onClose={init}>
        <ModalOverlay />
        <ModalContent>
            <ModalHeader className="border-b ">Player Search</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <div className="flex items-center rounded-br-md rounded-tr-md bg-gray-light-dark relative">
                    <div className="flex-grow">

                        <InputGroup>
                            <InputLeftElement pointerEvents="none">
                                <IoIosSearch className="text-xl font-semibold text-yellow-main" />
                            </InputLeftElement>
                            <Input
                                colorScheme="white"
                                focusBorderColor="transparent"
                                border="none"
                                outline="none"
                                sx={{ color: 'white' }}
                                _hover={{ border: 'none', outline: 'none' }}
                                _active={{ border: 'none', outline: 'none' }}
                                _focus={{ border: 'none', outline: 'none' }}
                                value={player}
                                onChange={({ target: { value } }) => { setPlayer(value) }}
                            />
                            {loading && (<InputRightElement>
                                <Spinner size="sm" sx={{ color: '#FFD841' }} />
                            </InputRightElement>)}
                        </InputGroup>


                    </div>
                    <Menu>
                        <MenuButton
                            as={Button}
                            rightIcon={<IoIosArrowDown />}
                            fontWeight="normal"
                            variant="solid"
                            sx={{ background: "#000", color: "#FFD841" }}
                            _hover={{ background: "#000" }}
                            _active={{ background: "#000" }}
                        >
                            FIFA {year}
                        </MenuButton>

                        <MenuList sx={{ background: "#000", borderColor: "#6d6d6d" }}>
                            <MenuItem
                                onClick={() => setYear(YEAR_VALUES['24'])}
                                sx={{ background: "#000", color: "#FFD841" }}
                                _hover={{ background: "#ffffff0f" }}
                            >
                                FIFA 24
                            </MenuItem>
                            <MenuItem
                                onClick={() => setYear(YEAR_VALUES['23'])}
                                sx={{ background: "#000", color: "#FFD841" }}
                                _hover={{ background: "#ffffff0f" }}
                            >
                                FIFA 23
                            </MenuItem>
                            <MenuItem
                                onClick={() => setYear(YEAR_VALUES['22'])}
                                sx={{ background: "#000", color: "#FFD841" }}
                                _hover={{ background: "#ffffff0f" }}
                            >
                                FIFA 22
                            </MenuItem>
                            <MenuItem
                                onClick={() => setYear(YEAR_VALUES['21'])}
                                sx={{ background: "#000", color: "#FFD841" }}
                                _hover={{ background: "#ffffff0f" }}
                            >
                                FIFA 21
                            </MenuItem>
                            <MenuItem
                                onClick={() => setYear(YEAR_VALUES['20'])}
                                sx={{ background: "#000", color: "#FFD841" }}
                                _hover={{ background: "#ffffff0f" }}
                            >
                                FIFA 20
                            </MenuItem>
                            <MenuItem
                                onClick={() => setYear(YEAR_VALUES['19'])}
                                sx={{ background: "#000", color: "#FFD841" }}
                                _hover={{ background: "#ffffff0f" }}
                            >
                                FIFA 19
                            </MenuItem>
                            <MenuItem
                                onClick={() => setYear(YEAR_VALUES['18'])}
                                sx={{ background: "#000", color: "#FFD841" }}
                                _hover={{ background: "#ffffff0f" }}
                            >
                                FIFA 18
                            </MenuItem>
                            <MenuItem
                                onClick={() => setYear(YEAR_VALUES['17'])}
                                sx={{ background: "#000", color: "#FFD841" }}
                                _hover={{ background: "#ffffff0f" }}
                            >
                                FIFA 17
                            </MenuItem>
                            <MenuItem
                                onClick={() => setYear(YEAR_VALUES['16'])}
                                sx={{ background: "#000", color: "#FFD841" }}
                                _hover={{ background: "#ffffff0f" }}
                            >
                                FIFA 16
                            </MenuItem>
                        </MenuList>
                    </Menu>

                </div>
                <div className="flex relative w-full">
                    <div className="absolute bg-gray-100 flex flex-col w-full top-0 max-h-[200px] overflow-y-auto">
                        {list?.map((data: FutCardPropDataTypes, index: number) => (
                            <PlayerCard key={`${data.player_name}${index}`} data={data} year={year} onClose={init} />))}
                    </div>
                </div>
            </ModalBody>
        </ModalContent>
    </Modal>
}