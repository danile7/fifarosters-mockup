'use client'

import type { RouletteProps } from '@/lib/types';
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const defaultData = [
  {
    label: 'Hello',
    color: 'red'
  }
];

const Roulette: React.FC<RouletteProps> = ({
  data = defaultData,
  onStopSpinning,
  startSpinning = false,
  stopSpinning = false,
  backgroundImage,
  textColors = 'white',
  fontSize = 16,
  spinDuration = 2,
  spinSpeed = 15,
  size = 400,
  labelDistance = 1.5
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const [angle, setAngle] = useState(0);
  const [prizeIndex, setPrizeIndex] = useState<number | null>(null);
  const [currentSpeed, setCurrentSpeed] = useState(spinSpeed);
  const [isStopping, setIsStopping] = useState(false);
  const [res, setRes] = useState<string | null>(null);

  // Preload images (background and center)
  const backgroundImageRef = useRef<HTMLImageElement | null>(null);
  const centerImageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');

    if (backgroundImage) {
      const img = new Image();
      img.src = backgroundImage;
      img.onload = () => {
        backgroundImageRef.current = img;
        if (ctx) {
          drawRouletteWheel(ctx); // Redraw the canvas after the background image is loaded
        }
      };
    }

    const centerImg = new Image();
    centerImg.src = '/assets/images/center.png'; // Replace with actual path
    centerImg.onload = () => {
      centerImageRef.current = centerImg;
      if (ctx) {
        drawRouletteWheel(ctx); // Redraw the canvas after the center image is loaded
      }
    };
  }, [backgroundImage]);

  const segmentAngle = 360 / data?.length;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (ctx) {
      drawRouletteWheel(ctx);
    }
  }, [angle]);

  useEffect(() => {
    if (startSpinning) {
      setPrizeIndex(null); // Clear the prize from the last round
      setCurrentSpeed(spinSpeed); // Reset the speed
      setIsSpinning(true);
      setIsStopping(false);
      setRes(null)
    }
  }, [startSpinning, spinSpeed]);

  useEffect(() => {
    let animationFrameId: number;

    const spin = () => {
      setAngle((prevAngle) => prevAngle + currentSpeed);
      animationFrameId = requestAnimationFrame(spin);
    };

    if (isSpinning && !isStopping) {
      animationFrameId = requestAnimationFrame(spin);
    }

    return () => cancelAnimationFrame(animationFrameId);
  }, [isSpinning, isStopping, currentSpeed]);

  useEffect(() => {
    if (stopSpinning && isSpinning) {
      stopWheel();
    }
  }, [stopSpinning]);

  const drawRouletteWheel = (ctx: CanvasRenderingContext2D) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(centerX, centerY) - 10;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Use the preloaded background image (if available)
    if (backgroundImageRef.current) {
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate((angle * Math.PI) / 180);
      ctx.translate(-centerX, -centerY);
      ctx.drawImage(backgroundImageRef.current, 0, 0, canvas.width, canvas.height);
      ctx.restore();
    }

    // Draw the segments and labels
    drawSegmentsAndLabels(ctx, centerX, centerY, radius);

    // Use the preloaded center image
    if (centerImageRef.current) {
      const imageSize = radius / 5;
      ctx.drawImage(
        centerImageRef.current,
        centerX - imageSize / 2,
        centerY - imageSize / 2,
        imageSize,
        imageSize
      );
    }

    // Draw overlay effect
    const overlayGradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius);
    overlayGradient.addColorStop(0, '#00000000');
    overlayGradient.addColorStop(1, '#00000096');
    ctx.fillStyle = overlayGradient;
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.fill();
  };

  const drawSegmentsAndLabels = (
    ctx: CanvasRenderingContext2D,
    centerX: number,
    centerY: number,
    radius: number
  ) => {
    data?.forEach((segment, index) => {
      const startAngle = (segmentAngle * index + angle) * (Math.PI / 180);
      const endAngle = (segmentAngle * (index + 1) + angle) * (Math.PI / 180);
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, radius, startAngle, endAngle);
      ctx.closePath();
      ctx.fillStyle = segment.color ?? 'transparent';
      ctx.fill();
    });

    // Draw the labels
    data?.forEach((segment, index) => {
      const labelAngle =
        (segmentAngle * index + segmentAngle / 2 + angle) * (Math.PI / 180);

      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(labelAngle);

      ctx.fillStyle = Array.isArray(textColors)
        ? (textColors[index % textColors.length] ?? '')
        : textColors;
      ctx.font = `bold ${fontSize}px Arial`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle'; // Ensure the text is vertically centered
      ctx.fillText(segment.label, radius / labelDistance, 0); // Draw the label

      ctx.restore();
    });
  };

  const stopWheel = () => {
    if (isStopping) return;
    setIsStopping(true);

    let currentAngle = angle;
    let speed = currentSpeed;
    const decelerationFrames = Math.round(spinDuration * 60);
    const decelerationFactor = speed / decelerationFrames;

    const decelerate = () => {
      if (speed > 0) {
        speed -= decelerationFactor;
        currentAngle += speed;
        setAngle(currentAngle);

        requestAnimationFrame(decelerate);
      } else {
        setIsSpinning(false);
        setIsStopping(false);

        const finalAngle = currentAngle % 360;
        const winningIndex = Math.floor((360 - finalAngle) / segmentAngle) % data.length;
        setPrizeIndex(winningIndex);
        if (onStopSpinning) {
          onStopSpinning({ index: winningIndex, data: data[winningIndex] });
          setRes(data[winningIndex]?.label ?? null);
        }
      }
    };

    decelerate();
  };

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      {/* Roulette Wheel */}
      <div className='relative'>
        <canvas
          className='filter brightness-150'
          ref={canvasRef}
          width={size}
          height={size}
          style={{ border: '2px solid black', borderRadius: '50%' }}
        />

        <motion.div
          initial="hidden"
          animate={res === null ? "hidden" : "visible"}
          variants={{
            visible: {
              opacity: [0, 1, 1, 0], // Opacity transitions
              scale: [0.8, 1, 1.05, 1],
              y: [20, 0, -5, 0],
              transition: {
                duration: 5, // Total duration
                delay: 0,       // Delay before starting
                times: [0, 0.25, 0.75, 1, 4.5, 5], // Control timing of opacity changes
              },
            },
            hidden: {
              opacity: 0, // Hidden state opacity
              transition: {
                duration: 0.5, // You can set a separate duration for hiding
                delay: 2
              }
            }
          }}
          className='font-bold absolute top-[9%] w-full text-center text-[#00ffb6] [text-shadow:0px_2px_3px_rgba(0,_0,_0,_0.6),_0px_0px_10px_rgb(0_0_0_/_37%),_0px_0px_20px_rgba(255,_255,_255,_0.4)] text-2xl z-20'>
          {res}
        </motion.div>

        <img src={'/assets/images/border.png'} draggable={false} width={0} height={0} alt='' className='absolute filter grayscale select-none w-full h-full top-0 left-0 rounded-full' />

        {/* Pointer */}
        <img src='/assets/images/pointer.png' className='absolute top-1/2 -right-[0.5%] w-[9%] border border-lime-500 h-auto select-none' draggable={false} />
      </div>
    </div>
  );
};

export default Roulette;
