"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

let interval: any;

type Card = {
  id: number;
  name: string;
  designation: string;
  content: React.ReactNode;
};

export const CardStack = ({
  items,
  offset,
  scaleFactor,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Card[]>(items);

  useEffect(() => {
    startFlipping();

    return () => clearInterval(interval);
  }, []);
  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: Card[]) => {
        const newArray = [...prevCards]; // create a copy of the array
        newArray.unshift(newArray.pop()!); // move the last element to the front
        return newArray;
      });
    }, 5000);
  };

  return (
    <div className="relative mx-auto h-80 w-[20rem] md:h-60 md:w-[30rem]">
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className="absolute bg-white h-80 w-80 md:h-60 md:w-[30rem] rounded-3xl p-8 shadow-xl border border-neutral-200  shadow-black/[0.1] flex flex-col justify-between"
            style={{
              transformOrigin: "top center",
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
              zIndex: cards.length - index, //  decrease z-index for the cards that are behind
            }}
          >
            <div className="font-normal text-neutral-700">
              {card.content}
            </div>
            <div>
              <p className="text-neutral-500 font-medium">
                {card.name}
              </p>
              <p className="text-neutral-400 font-normal">
                {card.designation}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
