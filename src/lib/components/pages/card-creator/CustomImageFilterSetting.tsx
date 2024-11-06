import {useSelector} from "react-redux";
import {Slider, SliderFilledTrack, SliderThumb, SliderTrack} from "@chakra-ui/react";
import {cardCreatorAction} from "@/store/tools/cardCreatorSlice";
import type {CardCreatorSliceType, ImageFilterDetail} from "@/lib/types";
import {useAppDispatch} from "@/store";
import {IMAGE_FILTER} from "@/lib/utils/enums";
import AppButton from "@/lib/components/core/AppButton";

export default function CustomImageFilterSetting() {

    const dispatch = useAppDispatch();

    const {
        playerData: {
            imageFilter,
            filterDetail
        }
    } = useSelector(({cardCreator}: { cardCreator: CardCreatorSliceType }) => cardCreator);

    const handleChangeImageFilterDetail = (value: ImageFilterDetail) => {
        dispatch(cardCreatorAction.setFilterDetail(value))
    }

    return (<div
        className={`mt-2 ${imageFilter === IMAGE_FILTER.CUSTOM_FILTER ? 'flex' : 'hidden'} flex-col gap-2 p-2 border border-gray-200 rounded-md shadow-md `}>

        <div className="flex items-center gap-2">
            <AppButton active={filterDetail.sepia}
                       onClick={() => handleChangeImageFilterDetail({
                           ...filterDetail,
                           sepia: !filterDetail.sepia
                       })}>Sepia</AppButton>
            <Slider
                aria-label='sepia'
                min={0}
                max={1}
                step={0.01}
                defaultValue={filterDetail.sepiaValue}
                onChangeEnd={(value: number) => handleChangeImageFilterDetail({
                    ...filterDetail,
                    sepiaValue: value
                })}
            >
                <SliderTrack>
                    <SliderFilledTrack/>
                </SliderTrack>
                <SliderThumb/>
            </Slider>
        </div>

        <div className="flex items-center gap-2">
            <AppButton active={filterDetail.grayscale}
                       onClick={() => handleChangeImageFilterDetail({
                           ...filterDetail,
                           grayscale: !filterDetail.grayscale
                       })}>Grayscale</AppButton>
            <Slider
                aria-label='grayscale'
                min={0}
                max={1}
                step={0.01}
                defaultValue={filterDetail.grayscaleValue}
                onChangeEnd={(value: number) => handleChangeImageFilterDetail({
                    ...filterDetail,
                    grayscaleValue: value
                })}
            >
                <SliderTrack>
                    <SliderFilledTrack/>
                </SliderTrack>
                <SliderThumb/>
            </Slider>
        </div>

        <div className="flex items-center gap-2">
            <AppButton active={filterDetail.blackAndWhite}
                       onClick={() => handleChangeImageFilterDetail({
                           ...filterDetail,
                           blackAndWhite: !filterDetail.blackAndWhite
                       })}>Black & White</AppButton>
        </div>

        <div className="flex items-center gap-2">
            <AppButton active={filterDetail.brightness}
                       onClick={() => handleChangeImageFilterDetail({
                           ...filterDetail,
                           brightness: !filterDetail.brightness
                       })}>Brightness</AppButton>
            <Slider
                aria-label='brightness'
                min={0.5}
                max={1.5}
                step={0.01}
                defaultValue={filterDetail.brightnessValue}
                onChangeEnd={(value: number) => handleChangeImageFilterDetail({
                    ...filterDetail,
                    brightnessValue: value
                })}
            >
                <SliderTrack>
                    <SliderFilledTrack/>
                </SliderTrack>
                <SliderThumb/>
            </Slider>
        </div>

        <div className="flex items-center gap-2">
            <AppButton active={filterDetail.contrast}
                       onClick={() => handleChangeImageFilterDetail({
                           ...filterDetail,
                           contrast: !filterDetail.contrast
                       })}>Contrast</AppButton>
            <Slider
                aria-label='contrast'
                min={0.5}
                max={1.5}
                step={0.01}
                defaultValue={filterDetail.contrastValue}
                onChangeEnd={(value: number) => handleChangeImageFilterDetail({
                    ...filterDetail,
                    contrastValue: value
                })}
            >
                <SliderTrack>
                    <SliderFilledTrack/>
                </SliderTrack>
                <SliderThumb/>
            </Slider>
        </div>

        <div className="flex items-center gap-2">
            <AppButton active={filterDetail.saturation}
                       onClick={() => handleChangeImageFilterDetail({
                           ...filterDetail,
                           saturation: !filterDetail.saturation
                       })}>Saturation</AppButton>
            <Slider
                aria-label='saturation'
                min={0}
                max={2}
                step={0.02}
                defaultValue={filterDetail.saturationValue}
                onChangeEnd={(value: number) => handleChangeImageFilterDetail({
                    ...filterDetail,
                    saturationValue: value
                })}
            >
                <SliderTrack>
                    <SliderFilledTrack/>
                </SliderTrack>
                <SliderThumb/>
            </Slider>
        </div>


    </div>)
}