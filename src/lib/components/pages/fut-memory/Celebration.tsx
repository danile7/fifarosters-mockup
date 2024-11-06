import type {ReactNode} from 'react'
import React, {useEffect, useState} from "react";
import Confetti from "react-confetti";
import {useWindowSize} from "react-use";

export default function Celebration({children}: { children: ReactNode }){
    const [showConfetti, setShowConfetti] = useState<boolean>(false);
    const {width, height} = useWindowSize();

    const handleGameComplete = () => {
        setShowConfetti(true);

        // Optionally stop confetti after a few seconds
        // setTimeout(() => {
        //     setShowConfetti(false);
        // }, 8000); // Stop confetti after 5 seconds
    };

    useEffect(() => {
        handleGameComplete()
    }, [])

    return (
        <div
            className="fixed w-screen h-screen flex justify-center items-center bg-black bg-opacity-40 backdrop-blur-md">

            {showConfetti && (
                <Confetti width={width} height={height}/>
            )}

            <div
                className="flex flex-col text-white bg-black bg-opacity-60 p-20 rounded-md border border-white border-opacity-30">
                <div>
                    {children}
                </div>
            </div>
        </div>
    );
};