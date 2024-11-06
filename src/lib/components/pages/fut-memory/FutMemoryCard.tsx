import Image from "next/image";
import type {FutMemoryCardPropType} from "@/lib/types";
import GameFutCard from "@/lib/components/core/GameFutCard";

export default function FutMemoryCard  ({year, card, onClick, cardBackground}: FutMemoryCardPropType) {
    return (
        <div
            className={`
                ${card.passed ? '' : ''} 
                w-full aspect-[0.9] relative transform scale-100 [transform-style:preserve-3d] [transition:transform_0.5s] cursor-pointer
                ${card.isFlipped ? " [transform:rotateY(180deg)]" : " hover:[transform:translateZ(10px)]"}`
            }
            style={{order: card.order}}
            data-testid={card.id}
            onClick={onClick}
        >
            <div className="w-full h-full absolute [backface-visibility:hidden] [transform:rotateY(180deg)]">
                <GameFutCard
                    year={year}
                    data={card.data}
                    mini = {true}
                    visibility={{features: false,
                        alt_positions: false,
                        playstyles: false,
                        first_owner: true,
                        squad_chemistry: false,
                        rating: false,
                        feature_label: false
                    }}/>
            </div>
            <div className="absolute w-full h-full bg-transparent [backface-visibility:hidden]">
                <Image width={0}
                       height={0}
                       className="w-full h-full"
                       src={cardBackground}
                       alt=""
                       draggable={false}
                />
                <Image width={0}
                       height={0}
                       className="w-[85%] h-auto absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                       src={'/assets/images/fut-memory.png'}
                       alt=""
                       draggable={false}
                />
            </div>
        </div>
    );
}