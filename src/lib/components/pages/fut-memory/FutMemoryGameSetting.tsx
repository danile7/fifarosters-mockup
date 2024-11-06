import {useEffect, useState} from "react";
import {
    Button,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Modal,
    ModalBody,
    ModalContent,
    ModalHeader,
    ModalOverlay
} from "@chakra-ui/react";
import type {
    CardColorType,
    FutCardPropDataTypes,
    FutMemoryCardType,
    FutMemoryGameSettingModalProps,
    YearType
} from "@/lib/types";
import {FUT_MEMORY_DIFFICULTY, YEAR_VALUES} from "@/lib/utils/enums";
import {FutMemoryService} from "@/lib/services";
import OfficialCardModal from "@/lib/components/pages/card-creator/OfficialCardModal";
import {IoIosArrowDown} from "react-icons/io";

const getGameSize = (difficulty: number): number => {
    let gameSize = 0;

    switch (difficulty) {
        case FUT_MEMORY_DIFFICULTY.EASY:
            gameSize = 3;
            break;
        case FUT_MEMORY_DIFFICULTY.MEDIUM:
            gameSize = 6;
            break;
        case FUT_MEMORY_DIFFICULTY.HARD:
            gameSize = 8;
            break;
        case FUT_MEMORY_DIFFICULTY.VERY_HARD:
            gameSize = 12;
            break;
    }

    return gameSize;
}

const shuffleCards = (cards: FutMemoryCardType[]): FutMemoryCardType[] => cards.map((card: FutMemoryCardType) => ({
    ...card,
    order: Math.floor(Math.random() * 12)
})).sort((a, b) => a.order - b.order)

export default function FutMemoryGameSetting(props: FutMemoryGameSettingModalProps) {

    const {isOpen, onOK} = props;
    const [year, setYear] = useState<YearType>(YEAR_VALUES['24']);
    const [cardBackground, setCardBackground] = useState<string>('/assets/images/card-memory-default-bg.png');
    const [isOpenModal, setOpenModal] = useState<boolean>(false);
    const [difficulty, setDifficulty] = useState<number>(FUT_MEMORY_DIFFICULTY.EASY);
    const [cards, setCards] = useState<FutMemoryCardType[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const getCards = async () => {
            try {
                setLoading(true)
                const uniqueCards: FutCardPropDataTypes[] | null = await FutMemoryService.fetchPlayers({year})

                if (uniqueCards !== null) {
                    // Duplicate each card to create pairs
                    const duplicatedCards: FutMemoryCardType[] =
                        uniqueCards
                            .slice(0, getGameSize(difficulty))
                            .flatMap((card: FutCardPropDataTypes) => [
                                {data: card, name: card.futid.toString(), id: card.futid * 2}, // unique id for the first card in the pair
                                {data: card, name: card.futid.toString(), id: card.futid * 2 + 1} // unique id for the duplicate
                            ]);
                    const shuffled: FutMemoryCardType[] = shuffleCards(duplicatedCards);
                    setCards(shuffled);
                }

            } catch (error) {
                console.error("Error fetching cards: ", error);
            }
            finally {
                setLoading(false)
            }
        };

        void getCards();
    }, [year, difficulty]);

    const handleChangeCardColor = (data: CardColorType) => {
        setCardBackground(data?.background_img_url_l ?? '/assets/images/card-memory-default-bg.png')
        setOpenModal(false)
    }

    const handleStart = () => {
        onOK({year, cardBackground, difficulty, cards})
    }

    return <Modal size="xl" isOpen={isOpen} onClose={() => {
        return
    }}>
        <ModalOverlay/>
        <ModalContent>
            <ModalHeader className="border-b ">Game Setting</ModalHeader>
            <ModalBody>
                <div className="flex items-center rounded-br-md rounded-tr-md relative">

                    <div className="flex-grow flex flex-col gap-4">
                        <div className="flex gap-4 items-center">
                            <div>Year:</div>
                            <Menu>
                                <MenuButton fontWeight="normal" fontSize="sm" as={Button} rightIcon={<IoIosArrowDown/>}
                                            variant="outline"
                                            colorScheme='gray'>
                                    EAFC {year}
                                </MenuButton>

                                <MenuList>
                                    <MenuItem fontWeight="normal" fontSize="sm"
                                              onClick={() => setYear(YEAR_VALUES['24'])}> FIFA 24 </MenuItem>
                                    <MenuItem fontWeight="normal" fontSize="sm"
                                              onClick={() => setYear(YEAR_VALUES['23'])}> FIFA 23 </MenuItem>
                                    <MenuItem fontWeight="normal" fontSize="sm"
                                              onClick={() => setYear(YEAR_VALUES['22'])}> FIFA 22 </MenuItem>
                                    <MenuItem fontWeight="normal" fontSize="sm"
                                              onClick={() => setYear(YEAR_VALUES['21'])}> FIFA 21 </MenuItem>
                                    <MenuItem fontWeight="normal" fontSize="sm"
                                              onClick={() => setYear(YEAR_VALUES['20'])}> FIFA 20 </MenuItem>
                                    <MenuItem fontWeight="normal" fontSize="sm"
                                              onClick={() => setYear(YEAR_VALUES['19'])}> FIFA 19 </MenuItem>
                                    <MenuItem fontWeight="normal" fontSize="sm"
                                              onClick={() => setYear(YEAR_VALUES['18'])}> FIFA 18 </MenuItem>
                                    <MenuItem fontWeight="normal" fontSize="sm"
                                              onClick={() => setYear(YEAR_VALUES['17'])}> FIFA 17 </MenuItem>
                                    <MenuItem fontWeight="normal" fontSize="sm"
                                              onClick={() => setYear(YEAR_VALUES['16'])}> FIFA 16 </MenuItem>
                                </MenuList>
                            </Menu>
                        </div>

                        <div className="flex gap-4 items-center">
                            <div>Difficulty:</div>
                            <Menu>
                                <MenuButton fontWeight="normal" fontSize="sm" as={Button} rightIcon={<IoIosArrowDown/>}
                                            variant="outline"
                                            colorScheme='gray'>
                                    {difficulty === FUT_MEMORY_DIFFICULTY.EASY ? 'EASY' : difficulty === FUT_MEMORY_DIFFICULTY.MEDIUM ? 'MEDIUM' : difficulty === FUT_MEMORY_DIFFICULTY.HARD ? "HARD" : 'VERY HARD'}
                                </MenuButton>

                                <MenuList>
                                    <MenuItem fontWeight="normal" fontSize="sm"
                                              onClick={() => setDifficulty(FUT_MEMORY_DIFFICULTY.EASY)}> EASY </MenuItem>
                                    <MenuItem fontWeight="normal" fontSize="sm"
                                              onClick={() => setDifficulty(FUT_MEMORY_DIFFICULTY.MEDIUM)}> MEDIUM </MenuItem>
                                    <MenuItem fontWeight="normal" fontSize="sm"
                                              onClick={() => setDifficulty(FUT_MEMORY_DIFFICULTY.HARD)}> HARD </MenuItem>
                                    <MenuItem fontWeight="normal" fontSize="sm"
                                              onClick={() => setDifficulty(FUT_MEMORY_DIFFICULTY.VERY_HARD)}> VERY
                                        HARD </MenuItem>
                                </MenuList>
                            </Menu>
                        </div>

                        <div className="flex gap-4 items-center">
                            <Button onClick={() => setOpenModal(true)}>Select Card Image</Button>
                        </div>

                        <Button variant='solid' colorScheme='teal' isLoading = {loading} onClick={() => handleStart()}>Play</Button>
                    </div>


                    <OfficialCardModal isOpen={isOpenModal} year={year} onClose={() => setOpenModal(false)}
                                       onSelect={handleChangeCardColor}/>
                </div>
            </ModalBody>
        </ModalContent>
    </Modal>
}