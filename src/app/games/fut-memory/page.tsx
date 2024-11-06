'use client'

import type { MouseEvent } from "react";
import { useEffect, useState } from "react";
import {
    Button
} from "@chakra-ui/react";
import type {
    FutMemoryCardType,
    YearType
} from "@/lib/types";
import { FUT_MEMORY_DIFFICULTY, YEAR_VALUES } from "@/lib/utils/enums";
import { MdBuild } from "react-icons/md";
import FutMemoryGameSetting from "@/lib/components/pages/fut-memory/FutMemoryGameSetting";
import FutMemoryCard from "@/lib/components/pages/fut-memory/FutMemoryCard";
import Timer from "@/lib/components/pages/fut-memory/Timer";
import Celebration from "@/lib/components/pages/fut-memory/Celebration";
import { motion } from 'framer-motion'
import { itemVariantsBounceIn } from "@/lib/motion";

const getLayoutStyle = (difficulty: number): string => {
    let style = ''
    switch (difficulty) {
        case FUT_MEMORY_DIFFICULTY.EASY: style = 'grid grid-cols-3 gap-4 px-8 md:px-[10%] lg:px-[20%] gap-x-2'; break;
        case FUT_MEMORY_DIFFICULTY.MEDIUM: style = 'grid grid-cols-3 md:grid-cols-4 gap-3 px-8 md:px-[10%] lg:px-[20%] gap-x-2'; break;
        case FUT_MEMORY_DIFFICULTY.HARD: style = 'grid grid-cols-4 lg:grid-cols-4 gap-2 px-8 md:px-[10%] lg:px-[20%] gap-x-2'; break;
        case FUT_MEMORY_DIFFICULTY.VERY_HARD: style = 'grid grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-2 gap-x-2'; break;
    }

    return style;
}

export default function Game() {
    const [isOpenSetting, setOpenSetting] = useState(false);
    const [year, setYear] = useState<YearType>(YEAR_VALUES['24']);
    const [cardBackground, setCardBackground] = useState<string>('');
    const [cards, setCards] = useState<FutMemoryCardType[] | null>(null);
    const [firstCard, setFirstCard] = useState<FutMemoryCardType | null>(null);
    const [wait, setWait] = useState<boolean>(false);
    const [gameOver, setGameOver] = useState<boolean>(false)
    const [layoutStyle, setLayoutStyle] = useState<string>('')
    const [start, setStart] = useState<boolean>(false);
    const [pause, setPause] = useState<boolean>(false);
    const [stop, setStop] = useState<boolean>(false);
    const [reset, setReset] = useState<boolean>(false);

    const handleStartTimer = () => {
        setStart(true);
        setPause(false);
        setStop(false);
        setReset(false);
    };

    const handlePauseTimer = () => {
        setPause(true);
        setStart(false);
    };

    const handleResetTimer = () => {
        setReset(true);
        setStart(false);
        setPause(false);
        setStop(false);
    };

    // functions
    const checker = (card: FutMemoryCardType) => {

        if (card.name === firstCard?.name) {
            setCards(prevCards => {
                if (prevCards === null) {
                    return null;
                }

                return prevCards.map(c => {
                    if (c.id === card.id || c.id === firstCard.id) {
                        return { ...c, passed: true, isFlipped: true };
                    }
                    return c;
                })
            });
        } else {
            setWait(true);
            setTimeout(() => {
                setCards((prevCards: FutMemoryCardType[] | null) => {
                    if (prevCards !== null) {
                        return prevCards.map(c => {
                            if (c.id === card.id || c.id === firstCard?.id) {
                                return { ...c, isFlipped: false };
                            }
                            return c;
                        })
                    }
                    return null;
                });
                setWait(false);
            }, 1000);
        }
    };

    const changeCardStatusHandler = (clickedCard: FutMemoryCardType) => {
        setCards(prevState => {
            if (prevState === null) {
                return null;
            }

            return prevState.map(card =>
                card.id === clickedCard.id
                    ? { ...card, isFlipped: true }
                    : card
            )
        });
    };

    const handleClick = (e: MouseEvent, clickedCard: FutMemoryCardType) => {
        if (wait ?? clickedCard?.isFlipped ?? clickedCard?.passed) {
            return;
        }

        changeCardStatusHandler(clickedCard);

        if (!firstCard) {
            setFirstCard(clickedCard);
        } else {
            checker(clickedCard);
            setFirstCard(null);
        }
    };

    const handleStart = ({
        year,
        cardBackground,
        difficulty,
        cards
    }: { year: YearType, cardBackground: string, difficulty: number, cards: FutMemoryCardType[] | null }) => {
        setCardBackground(cardBackground);
        setYear(year);
        setCards(cards);
        setLayoutStyle(getLayoutStyle(difficulty))
        setGameOver(false);
        handleResetTimer();
        handleStartTimer();
        setOpenSetting(false);
    }

    useEffect(() => {
        if (cards !== null) {
            const left = cards.filter((card: FutMemoryCardType) => !card.passed).length;
            if (left === 0) {
                // end game
                setGameOver(true)
                handlePauseTimer();
            }
        }
    }, [cards])

    return (
        <div className="w-full h-main-screen max-h-auto flex relative bg-blue-dark-gradient overflow-x-hidden">
            <div className="w-full min-h-full [perspective:1000px] flex justify-center items-center gap-20 p-4 md:p-8 lg:p-20 ">
                <div
                    className={`-ml-[8%] w-full lg:w-4/5 [transform:rotateX(5deg)_rotateZ(0deg)_rotateY(-10deg)] [transform-style:preserve-3d] ${layoutStyle}`}>
                    {cards?.map((card: FutMemoryCardType, index: number) => {
                        return (
                            <motion.div
                                initial="hidden"
                                animate={isOpenSetting ? 'hidden' : card.passed ? "removed" : "visible"}
                                variants={itemVariantsBounceIn(0.02 * index, 0.7)}
                                key={card.id}>
                                <FutMemoryCard
                                    card={card}
                                    cardBackground={cardBackground}
                                    year={year}
                                    onClick={(e: MouseEvent) => {
                                        if (!card.isFlipped && !card.passed) {
                                            handleClick(e, card)
                                        }
                                    }}
                                />
                            </motion.div>
                        );
                    })}
                </div>
            </div>


            <div className={`fixed z-[10] flex justify-center text-center text-2xl text-white left-1/2 -translate-x-1/2 ${gameOver ? "top-[42%]" : "top-[80px]"}`}>
                <Timer start={start} pause={pause} stop={stop} reset={reset} />
            </div>

            <FutMemoryGameSetting isOpen={isOpenSetting} onOK={handleStart} onClose={() => { console.log('on close') }} />

            {
                gameOver && (<Celebration>
                    <div className="flex flex-col gap-4 items-center justify-center">

                        <h1 className="text-4xl font-bold text-center mb-8">Game Over!</h1>

                        <Button leftIcon={<MdBuild />} colorScheme='teal' variant='solid' onClick={() => { setOpenSetting(true); setGameOver(false); handleResetTimer() }}>
                            Restart
                        </Button>
                    </div>
                </Celebration>)
            }


            <div className="fixed top-[80px] right-4">
                <Button leftIcon={<MdBuild />} colorScheme='teal' variant='solid' onClick={() => { setOpenSetting(true); handleResetTimer() }}>
                    Game Setting
                </Button>
            </div>

        </div>
    );
}