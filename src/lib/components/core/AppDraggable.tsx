import React, { useEffect, useState, useRef } from 'react';
import type {ReactNode} from 'react'
import { Rnd } from "react-rnd";

interface AppDraggableProps {
    children: ReactNode;
    top: number;
    left: number;
    widthPercent: number;
    heightPercent?: number;
    containerRef?: React.RefObject<HTMLDivElement>;
    center?: boolean;
    disableDrag:boolean
}

export default function AppDraggable({
                                         children,
                                         top = 0,
                                         left = 0,
                                         widthPercent = 100,
                                         heightPercent,
                                         containerRef,
                                         disableDrag
                                     }: AppDraggableProps) {
    const [location, setLocation] = useState({ x: 0, y: 0 });
    const [size, setSize] = useState<{width : number, height: number | string}>({ width: 0, height: 0 });
    const draggableRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (containerRef?.current) {
            const parent = containerRef.current;
            const parentWidth = parent.offsetWidth;
            const parentHeight = parent.offsetHeight;

            // Convert percentage width and height to pixels based on the parent
            const width:number = (widthPercent / 100) * parentWidth;
            // const height:number|string = heightPercent === "auto" ? 'auto' : (parseFloat(heightPercent) / 100) * parentHeight;
            const height:number|string = heightPercent ? (heightPercent / 100) * parentHeight : "auto";

            setSize({ width, height });

            const resizeObserver = new ResizeObserver(() => {
                if (draggableRef.current) {
                    const childWidth = draggableRef.current.offsetWidth;
                    const childHeight = draggableRef.current.offsetHeight;

                    const newX = (left / 100) * parentWidth - (childWidth / 2);
                    const newY = (top / 100) * parentHeight - (childHeight / 2);

                    setLocation({ x: newX, y: newY });
                }
            });

            if (draggableRef.current) {
                resizeObserver.observe(draggableRef.current);
            }

            return () => {
                if (draggableRef.current) {
                    resizeObserver.unobserve(draggableRef.current);
                }
            };
        }
    }, [top, left, widthPercent, heightPercent, containerRef]);


    if (disableDrag) {
        return (
            <div
                style={{ width: size.width, height: size.height, position: 'absolute', top: location.y, left: location.x }}
            >
                <div ref={draggableRef} className="relative">
                    {children}
                </div>
            </div>
        );
    }


    return (
        <Rnd
            size={{ width: size.width, height: size.height }}
            position={{ x: location.x, y: location.y }}
            onDragStop={(e, d) => {
                setLocation({x: d.x, y: d.y})
            }}
            onResize={(e, direction, ref, delta, position) => {
                setSize({ width: ref.offsetWidth, height: ref.offsetHeight });
                setLocation(position);
            }}
            resizeHandleClasses={{
                topLeft : '!w-[5px] !h-[5px] !top-0 !left-0  rounded-full bg-white shadow-md opacity-0 ',
                topRight : '!w-[5px] !h-[5px] !top-0 !right-0 rounded-full bg-white shadow-md opacity-0',
                bottomLeft : '!w-[5px] !h-[5px] !bottom-0 !left-0 rounded-full bg-white shadow-md  opacity-0',
                bottomRight : '!w-[5px] !h-[5px] !bottom-0 !right-0 rounded-full bg-white shadow-md opacity-0',

            }}

            className="[&>div:last-child>div]:hover:opacity-100 overflow-hidden bg-black bg-opacity-0 hover:bg-opacity-10"

        >
            <div ref={draggableRef} className="relative">
                {children}
            </div>
        </Rnd>
    );
}
