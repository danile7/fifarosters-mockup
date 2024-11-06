import { useEffect, useState, useRef, useCallback } from 'react';

export default function Timer({ start, pause, reset, stop }: { start: boolean, pause: boolean, reset: boolean, stop: boolean }) {
    const [time, setTime] = useState<number>(0);
    const [isRunning, setIsRunning] = useState<boolean>(false);
    const startTimeRef = useRef<number>(0);
    const pauseTimeRef = useRef<number>(0);
    const timerRef = useRef<number | null>(null);

    // Update the timer each frame
    const updateTimer = useCallback(() => {
        const elapsed = performance.now() - startTimeRef.current;
        setTime(elapsed);
        timerRef.current = requestAnimationFrame(updateTimer);
    }, []);

    const formatTime = (time: number) => {
        const seconds = Math.floor(time / 1000);
        const milliseconds = Math.floor(time % 1000);
        return `${seconds}s ${milliseconds}ms`;
    };

    useEffect(() => {
        if (start && !isRunning) {
            // Start or resume the timer
            setIsRunning(true);
            if (pauseTimeRef.current) {
                // If paused, resume from the paused time
                startTimeRef.current = performance.now() - (pauseTimeRef.current - startTimeRef.current);
                pauseTimeRef.current = 0; // Clear the paused time
            } else {
                // Fresh start
                startTimeRef.current = performance.now();
            }
            timerRef.current = requestAnimationFrame(updateTimer);
        } else if (pause && isRunning) {
            // Pause the timer
            setIsRunning(false);
            if (timerRef.current) {
                cancelAnimationFrame(timerRef.current);
            }
            pauseTimeRef.current = performance.now(); // Store the paused time
        } else if (reset) {
            // Reset the timer
            setIsRunning(false);
            setTime(0);
            pauseTimeRef.current = 0;
            startTimeRef.current = 0;
            if (timerRef.current) cancelAnimationFrame(timerRef.current);
        } else if (stop) {
            // Stop the timer and reset everything
            setIsRunning(false);
            if (timerRef.current) {
                cancelAnimationFrame(timerRef.current);
            }
            setTime(0);
            pauseTimeRef.current = 0;
            startTimeRef.current = 0;
        }
    }, [start, pause, reset, stop, isRunning, updateTimer]);

    return (
        <div
            className="text-left w-full transition-all duration-1000 px-1"
            style={{
                background: `linear-gradient(to right, ${time / 1000 > 120 ? '#ff000057' : '#00a6ff45'}, transparent)`
            }}
        >
            {formatTime(time)}
        </div>
    );
};
