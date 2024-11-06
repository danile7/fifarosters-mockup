'use client';

import '@/styles/ReactiveCard/index.css';
import React, { useState, useEffect, useRef, } from 'react';
import type { CSSProperties, ReactNode, MouseEvent } from 'react';
import { useSpring, animated, AnimationConfig } from 'react-spring';
import { REACTIVE_CARD_RARITY_VALUE } from "@/lib/utils/enums";

const round = (value: number, precision = 3): number => parseFloat(value.toFixed(precision));

const clamp = (value: number, min = 0, max = 100): number => {
    return Math.min(Math.max(value, min), max);
};

const adjust = (value: number, fromMin: number, fromMax: number, toMin: number, toMax: number): number => {
    return round(toMin + ((toMax - toMin) * (value - fromMin)) / (fromMax - fromMin));
};

interface ReactiveCardProps {
    name?: string;
    number?: string;
    set?: string;
    types?: string;
    subtypes?: string;
    supertype?: string;
    rarity?: string;
    front?: string;
    back?: string;
    foil?: string;
    mask?: string;
    showcase?: boolean;
    children: ReactNode;
}

const AppReactiveCard: React.FC<ReactiveCardProps> = (props) => {
    const {
        number = '160',
        set = 'swsh12pt5',
        types = 'Lightning',
        subtypes = 'Basic',
        supertype = 'Pokémon',
        rarity = REACTIVE_CARD_RARITY_VALUE.RARE_SECRET,
        front = '',
        back = '',
        children
    } = props;

    const [isVisible, setIsVisible] = useState<boolean>(document.visibilityState === 'visible');
    const [loading, setLoading] = useState<boolean>(true);
    const [interacting, setInteracting] = useState<boolean>(false);
    const thisCard = useRef<HTMLDivElement | null>(null);

    const randomSeed = {
        x: Math.random(),
        y: Math.random(),
    };

    const cosmosPosition = {
        x: Math.floor(randomSeed.x * 734),
        y: Math.floor(randomSeed.y * 1280),
    };

    const [springRotate, setSpringRotate] = useSpring(() => ({
        x: 0,
        y: 0,
        config: { stiffness: 0.066, damping: 0.25 },
    }));

    const [springGlare, setSpringGlare] = useSpring(() => ({
        x: 50,
        y: 50,
        o: 0,
        config: { tension: 170, friction: 26 },
    }));


    const [springBackground, setSpringBackground] = useSpring(() => ({
        x: 50,
        y: 50,
        o: 0,
        config: { tension: 170, friction: 26 },
    }));

    useEffect(() => {
        const handleVisibilityChange = () => {
            setIsVisible(document.visibilityState === 'visible');
            if (document.visibilityState !== 'visible') {
                setInteracting(false);
                reset();
            }
        };

        document.addEventListener('visibilitychange', handleVisibilityChange);

        return () => {
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, []);

    const interact = (e: MouseEvent<HTMLDivElement>) => {
        if (!isVisible) {
            setInteracting(false);
            return;
        }
        setInteracting(true);

        const $el = thisCard.current;
        if (!$el) return;

        const rect = $el.getBoundingClientRect();
        const absolute = {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        };
        const percent = {
            x: clamp(round((100 / rect.width) * absolute.x)),
            y: clamp(round((100 / rect.height) * absolute.y)),
        };
        const center = {
            x: percent.x - 50,
            y: percent.y - 50,
        };

        updateSprings(
            {
                x: adjust(percent.x, 0, 100, 37, 63),
                y: adjust(percent.y, 0, 100, 33, 67),
            },
            {
                x: round(-(center.x / 3.5)),
                y: round(center.y / 2),
            },
            {
                x: round(percent.x),
                y: round(percent.y),
                o: 1,
            }
        );
    };

    const interactEnd = (delay = 500) => {
        setTimeout(() => {
            const snapTension = 10;  // Low tension for a soft snap
            const snapFriction = 5;  // Light friction for slower motion
            setInteracting(false);

            void setSpringRotate({
                x: 0,
                y: 0,
                config: { tension: snapTension, friction: snapFriction }
            });

            void setSpringGlare({
                x: 50,
                y: 50,
                o: 0,
                config: { tension: snapTension, friction: snapFriction }
            });

            void setSpringBackground({
                x: 50,
                y: 50,
                config: { tension: snapTension, friction: snapFriction }
            });
        }, delay);
    };

    const reset = () => {
        interactEnd(0);
        void setSpringRotate({ x: 0, y: 0 });
    };

    const updateSprings = (
        background: { x: number; y: number },
        rotate: { x: number; y: number },
        glare: { x: number; y: number; o: number }
    ) => {
        void setSpringBackground(background);
        void setSpringRotate(rotate);
        void setSpringGlare(glare);
    };

    const imageLoader = () => {
        setLoading(false);
    };

    return (
        <div className="flex justify-center items-center">
            <animated.div
                ref={thisCard}
                data-number={number}
                data-set={set}
                data-subtypes={subtypes}
                data-supertype={supertype}
                data-rarity={rarity}
                className={`card ${types} ${interacting ? 'interacting' : ''} ${loading ? 'loading' : ''}`}
                style={{
                    '--pointer-x': springGlare.x.to((x: number) => `${x}%`) as unknown as string,
                    '--pointer-y': springGlare.y.to((y: number) => `${y}%`) as unknown as string,
                    '--card-opacity': springGlare.o.to((o: number) => `${o}`) as unknown as string,
                    '--rotate-x': springRotate.x.to((x: number) => `${x}deg`) as unknown as string,
                    '--rotate-y': springRotate.y.to((y: number) => `${y}deg`) as unknown as string,
                    '--background-x': springBackground.x.to((x: number) => `${x}%`) as unknown as string,
                    '--background-y': springBackground.y.to((y: number) => `${y}%`) as unknown as string,
                } as CSSProperties & Record<string, string>}

                onMouseMove={interact}
                onMouseLeave={() => interactEnd(0)}
            >
                <div className="card__translater">
                    <button className="card__rotator" >
                        <img className="card__back opacity-0" src={back} alt="" loading="lazy" />
                        
                        <div className="card__front" style={{ '--cosmosbg': `${cosmosPosition.x}px ${cosmosPosition.y}px` } as CSSProperties}>
                            {/* {children ? children : (<img src={front} alt='' onLoad={imageLoader} loading="lazy" />)} */}

                            <img src={front} alt='' onLoad={imageLoader} loading="lazy" className='opacity-0'/>
                            <div className='img'>{children}</div>
                            <div className="card__shine" />
                            <div className="card__glare" />
                        </div>
                    </button>
                </div>
            </animated.div>
        </div>
    );
};

export default AppReactiveCard;
