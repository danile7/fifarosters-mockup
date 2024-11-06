'use client';

import type { Segment, SlotMachineProps } from '@/lib/types';
import React, { useEffect, useState, useRef, useCallback } from 'react';

const defaultData: Segment[] = [];

const SlotMachine: React.FC<SlotMachineProps> = ({
    data = defaultData,
    onStopSpinning,
    startSpinning = false,
    stopSpinning = false,
    spinSpeed = 1,
    size = 100,
    fontSize = 16,
    aspect = 1
}) => {
    const [reelPosition, setReelPosition] = useState<number>(0);
    const [isSpinning, setIsSpinning] = useState(false);
    const [isStopping, setIsStopping] = useState(false);
    const [prizeIndex, setPrizeIndex] = useState<number | null>(null);

    const reelRef = useRef<HTMLDivElement | null>(null);
    const currentSpeed = useRef<number>(spinSpeed);
    const prevStopSpinning = useRef<boolean>(stopSpinning); // To store the previous value of stopSpinning

    // Start spinning when `startSpinning` is true
    useEffect(() => {
        if (startSpinning) {
            setIsSpinning(true);
            setIsStopping(false);
            currentSpeed.current = spinSpeed;
            setPrizeIndex(null); // Reset the prize index
        }
    }, [startSpinning, spinSpeed]);

    // Spinning logic
    useEffect(() => {
        if (isSpinning && !isStopping && data.length > 0) {
            const spinInterval = setInterval(() => {
                setReelPosition((prevPosition) => (prevPosition + currentSpeed.current) % data.length);
            }, 100);

            return () => clearInterval(spinInterval);
        }
    }, [isSpinning, isStopping, data.length]);

    // Callback to stop the reel
    const stopReel = useCallback(() => {
        if (isStopping) return; // Avoid multiple calls to stop
        setIsStopping(true);

        const finalStop = () => {
            const finalPos = Math.floor(reelPosition % data.length);
            setPrizeIndex(finalPos);
            setIsSpinning(false);
            setIsStopping(false);

            if (onStopSpinning && finalPos !== null && data[finalPos]) {
                onStopSpinning({ index: finalPos, data: data[finalPos] });
            }
        };

        finalStop();
    }, [isStopping, reelPosition, data, onStopSpinning]);

    // Stop spinning when `stopSpinning` changes from false to true
    useEffect(() => {
        if (!prevStopSpinning.current && stopSpinning) {
            stopReel();
        }
        prevStopSpinning.current = stopSpinning; // Update the previous value
    }, [stopSpinning, stopReel]);
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            {/* Reel board with Active and Passive Parts */}
            <div
                className='overflow-hidden bg-[#54565b] [border-top:transparent] border-[3px] [border-bottom:transparent] [border-image:linear-gradient(to_bottom,_#937245,_#d5b76e,_#421a10)_1] text-center relative [box-shadow:0px_0px_15px_rgba(0,_0,_0,_0.6)]'
                ref={reelRef}
                style={{
                    width: `${size * aspect}px`, // Set width to the size for one reel
                    height: `${size}px`, // Adjust height to show active + passive part
                    position: 'relative',
                }}
            >

                <div
                    className='absolute w-full transition-all ease-in-out duration-200 '
                    style={{
                        top: `-${(reelPosition % data.length) * size}px`,
                    }}
                >
                    {data.map((segment, index) => {
                        const isActive = Math.floor(reelPosition % data.length) === index;
                        return (
                            <div
                                key={index}
                                className='flex items-center justify-center'
                                style={{
                                    height: `${size}px`,
                                    backgroundColor: segment.color,
                                    color: segment.textColor,
                                    fontSize: fontSize,
                                    fontWeight: 'bold',
                                    transition: 'transform 0.3s ease, opacity 0.3s ease', // Smooth scaling and opacity effect
                                    transform: isActive ? 'scale(1)' : 'scale(0.85)', // Active item scales to 1, inactive to 0.85
                                    opacity: isActive ? 1 : 0.85, // Active part has full opacity, passive part is faded
                                }}
                            >
                                {segment.label}
                            </div>
                        );
                    })}
                </div>

                <div className={`absolute w-full h-full bg-[linear-gradient(to_bottom,_#00000099,_transparent_40%,_transparent_58%,_#00000099)] ${isSpinning ? 'backdrop-blur-sm' : ''}`}></div>
                <div className='absolute w-full h-full bg-[linear-gradient(to_bottom,_rgba(255,_255,_255,_0.05),_rgba(255,_255,_255,_0.15)_50%,_transparent_50%)] filter blur-[0.8px]'></div>
            </div>
        </div>
    );
};

export default SlotMachine;
