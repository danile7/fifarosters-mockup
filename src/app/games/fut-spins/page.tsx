'use client'

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { motion } from 'framer-motion'
import { Button, InputGroup, InputLeftElement, Menu, MenuButton, MenuItem, MenuList, Slide, Slider, SliderFilledTrack, SliderThumb, SliderTrack } from "@chakra-ui/react";
import { fade, itemVariantsBounceIn, itemVariantsBounceInUp, scaleIn } from "@/lib/motion";
import { ALL_PLAYER_POSITION, REACTIVE_CARD_RARITY_VALUE, YEAR_CARD_COLORS, YEAR_VALUES } from "@/lib/utils/enums";
import type { CardColorType, Preposition_Type, Segment, YearType } from "@/lib/types";
import DATA, { examplePlayerData } from "@/lib/utils/data";
import { ToolService } from "@/lib/services";
import { generateRandomNumber, getHexColor } from "@/lib/utils";
import SlotMachine from "@/lib/components/pages/fut-spins/SlotMachine";
import RouletteSpinner from "@/lib/components/pages/fut-spins/Roulette";
import { IoIosArrowDown } from "react-icons/io";
import AppReactiveCard from "@/lib/components/core/AppReactiveCard";
import FutCard from "@/lib/components/core/FutCard";

const CardColorCard = ({
  data,
  isActive,
}: { data: CardColorType, isActive: boolean }) => {

  return <motion.div
    initial="hidden"
    animate={isActive ? 'visible' : 'hidden'}
    variants={scaleIn(0, 0.4)}
    className={`max-w-14 min-w-14 flex flex-col items-center justify-start border-2 border-yellow-500 border-opacity-0 ${isActive ? 'border-opacity-100 filter brightness-[1.4]' : 'filter brightness-[0.85]'}`}
  >
    <Image src={data.background_img_url_l} className="w-12 aspect-[0.7]" alt={''} width={0} height={0}
      loading={"eager"} placeholder="blur"
      blurDataURL="data:image/jpeg;base64,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"
      quality={2} />
  </motion.div>
}

export default function Page() {

  const [loading, setLoading] = useState(true);
  const [listData, setListData] = useState<CardColorType[] | null>(null);
  const [btnConfig, setBtnConfig] = useState<{ label: string, color: string }>({ label: 'Spin', color: 'cyan' })
  const [year, setYear] = useState<YearType>(YEAR_VALUES['24'])
  /** DATA state */
  const [positionData, setPositionData] = useState<Segment[] | null>(null);
  const [ratingData, setRatingData] = useState<Segment[] | null>(null);
  const [futColorData, setFutColorData] = useState<Segment[] | null>(null);
  /** Spinning state */
  const [ratingSpinning, setRatingSpinning] = useState<boolean>(false);
  const [positionSpinning, setPositionSpinning] = useState<boolean>(false);
  const [cardColorSpinning, setCardColorSpinning] = useState<boolean>(false);
  /** Result State */
  const [ratingResult, setRatingResult] = useState<number | null>(null);
  const [positionResult, setPositionResult] = useState<Preposition_Type | null>(null);
  const [cardColorResult, setCardColorResult] = useState<CardColorType | null>(null);
  /** */
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [num, setNum] = useState<number>(1);

  const setRating = () => {
    const bgColors = [
      '#e9dfcc',
      '#c40200'
    ]

    const data = DATA.FutSpinRatings?.map((item: number, index: number) => ({
      label: item + ' +',
      color: bgColors[index % bgColors.length],
      strokeColor: 'transparent'
    }))

    setRatingData(data)
  }

  const setPosition = () => {
    const bgColors = [
      '#bfa664',
      '#1d1d1d'
    ]

    const data = ALL_PLAYER_POSITION.map((item: Preposition_Type, index: number) => ({
      label: item,
      color: bgColors[index % bgColors.length],
      strokeColor: 'transparent'
    }))

    setPositionData(data);
  }

  const setCardColor = (list: CardColorType[]) => {
    const data = list?.map((item: CardColorType, index: number) => ({
      label: item.futlabel ?? '',
      color: getHexColor(item.futcolors[YEAR_CARD_COLORS[year].alt_positions.bg]),
      textColor: getHexColor(item.futcolors[YEAR_CARD_COLORS[year].alt_positions.color])
    }))

    setFutColorData(data)
  }

  const fetchCardColorData = useCallback(async (year: YearType) => {
    try {
      setLoading(true);
      /** INIT */
      setListData(null);
      setCardColorResult(null);
      setActiveCard(null)
      /** Fetch */
      const res: CardColorType[] | null = await ToolService.fetchCardColors({ version: parseInt(year) });
      setListData(res);
      if (res !== null) {
        setCardColor(res)
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }, []);


  const handleSpin = () => {

    if (!ratingSpinning && !positionSpinning && !cardColorSpinning) {
      // start
      setBtnConfig({ label: 'Stop', color: 'red' })

      setRatingSpinning(true)
      setPositionSpinning(true)
      setCardColorSpinning(true)
    }
    else if (ratingSpinning && positionSpinning && cardColorSpinning) {
      // If everything is working, stop rating wheel
      setRatingSpinning(false)
    }
    else if (!ratingSpinning && positionSpinning) {
      // If rating wheel stopped, stop position wheel
      setPositionSpinning(false)
    }
    else if (!ratingSpinning && !positionSpinning && cardColorSpinning) {
      // Stop everything including slot machine
      setCardColorSpinning(false)
      setBtnConfig({ label: 'Spin', color: 'cyan' })
      setOpenModal(true);
    }
  }

  useEffect(() => {
    setPosition();
    setRating();
  }, [])

  useEffect(() => {
    void fetchCardColorData(year);
  }, [fetchCardColorData, year])

  useEffect(() => {

    const intervalId = setInterval(() => {
      const newRandomNumber = generateRandomNumber(1, 100);
      if (cardColorSpinning) {
        setActiveCard(newRandomNumber);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, [cardColorSpinning])

  return <div className="w-full h-main-screen overflow-hidden bg-cover bg-center bg-[url('/assets/images/fut-spinner-bg-1.jpg')]">

    <div className="flex w-full h-full ">
      <div className="w-1/2 h-full flex flex-col justify-center items-center p-8 gap-8">

        {futColorData !== null && (
          <div className="">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={itemVariantsBounceIn(3.4, 1)}
            >
              <SlotMachine
                data={futColorData}
                startSpinning={cardColorSpinning}
                stopSpinning={!cardColorSpinning}
                fontSize={16}
                size={60}
                aspect={3 / 1}
                spinSpeed={20}
                onStopSpinning={res => {
                  setCardColorResult(listData?.[res.index] ?? null)
                  setActiveCard(res.index);
                }}
              />
            </motion.div>
          </div>
        )}

        {!loading && positionData !== null && ratingData !== null &&
          <div className="relative z-10 flex items-center justify-center opacity">
            <div className="">
              <div className="">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={itemVariantsBounceIn(3, 1)}
                >
                  <RouletteSpinner
                    data={positionData}
                    startSpinning={positionSpinning}
                    stopSpinning={!positionSpinning}
                    spinSpeed={35}
                    spinDuration={2}
                    size={400}
                    labelDistance={1.3}
                    onStopSpinning={res => setPositionResult(ALL_PLAYER_POSITION[res.index] ?? null)}
                  />
                </motion.div>
              </div>

              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={itemVariantsBounceIn(3.2, 1)}
                >
                  <RouletteSpinner
                    data={ratingData}
                    startSpinning={ratingSpinning}
                    stopSpinning={!ratingSpinning}
                    spinSpeed={35}
                    spinDuration={2}
                    size={250}
                    labelDistance={1.3}
                    onStopSpinning={res => setRatingResult(DATA?.FutSpinRatings[res.index] ?? null)}
                  />
                </motion.div>
              </div>
            </div>
          </div>
        }

        <div className="flex gap-2 z-[20]">
          <Button colorScheme={btnConfig.color} size='lg' isLoading={loading} onClick={() => handleSpin()}>{btnConfig.label}</Button>
          {
            !ratingSpinning && !positionSpinning && !cardColorSpinning && (
              <Menu>
                <MenuButton
                  as={Button}
                  rightIcon={<IoIosArrowDown />}
                  fontWeight="normal"
                  variant="outline"
                  size="lg"
                  colorScheme="cyan"
                >
                  {year}
                </MenuButton>

                <MenuList zIndex={99}>
                  <MenuItem onClick={() => setYear(YEAR_VALUES['24'])}>24</MenuItem>
                  <MenuItem onClick={() => setYear(YEAR_VALUES['23'])}>23</MenuItem>
                  <MenuItem onClick={() => setYear(YEAR_VALUES['22'])}>22</MenuItem>
                  <MenuItem onClick={() => setYear(YEAR_VALUES['21'])}>21</MenuItem>
                  <MenuItem onClick={() => setYear(YEAR_VALUES['20'])}>20</MenuItem>
                  <MenuItem onClick={() => setYear(YEAR_VALUES['19'])}>19</MenuItem>
                  <MenuItem onClick={() => setYear(YEAR_VALUES['18'])}>18</MenuItem>
                  <MenuItem onClick={() => setYear(YEAR_VALUES['17'])}>17</MenuItem>
                  <MenuItem onClick={() => setYear(YEAR_VALUES['16'])}>16</MenuItem>
                </MenuList>
              </Menu>
            )
          }
        </div>


      </div>

      <div className="w-1/2 flex flex-col min-h-full justify-center item-center">
        <div className="flex flex-wrap py-16 pl-16 p-8 bg-[linear-gradient(-140deg,_rgba(0,0,0,_0.8),_transparent)]">
          {listData?.map((data: CardColorType, index: number) => (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={itemVariantsBounceInUp(0.02 * index, 0.8)}
              key={data.id}
              className={`${(activeCard !== null && activeCard === index) ? "z-10" : "z-0"}`}
            >
              <CardColorCard
                key={data.id}
                data={data}
                isActive={(activeCard !== null && activeCard === index) ? true : false}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>

    {
      openModal && cardColorResult && (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fade(1, 0.8)}
          className="fixed bg-black bg-opacity-70 w-full h-screen z-200 top-0 left-0 z-[9999] flex justify-center items-center">

          <motion.div
            initial="hidden"
            animate="visible"
            variants={itemVariantsBounceIn(1.2, 0.5)}
            className="w-[350px]">
            <AppReactiveCard
              number="160"
              rarity={REACTIVE_CARD_RARITY_VALUE.RARE_SECRET}
              front={cardColorResult?.background_img_url_l}
              back={cardColorResult?.background_img_url_l}
            >
              <FutCard data={{
                ...examplePlayerData,
                futcolors: cardColorResult.futcolors,
                background_img_url_l: cardColorResult.background_img_url_l,
                background_img_url_s: cardColorResult.background_img_url_s
              }} />
            </AppReactiveCard>
          </motion.div>

          <div className="absolute bottom-4 w-full flex justify-center items-center">
            <Button colorScheme={'teal'} size='lg' onClick={() => setOpenModal(false)}>Retry</Button>
          </div>
        </motion.div>
      )
    }

  </div>
}