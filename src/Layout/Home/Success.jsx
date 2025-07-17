import React from "react";
import { HeadingH2, HeadingH3 } from "../Component/Share/Typography";
import Line from "../Component/Share/Line";

export default function Success() {
  const cardsData = [
    {
      image:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
      name: "Briar Martin",
      handle: "@neilstellar",
      date: "April 20, 2025",
    },
    {
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
      name: "Avery Johnson",
      handle: "@averywrites",
      date: "May 10, 2025",
    },
    {
      image:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60",
      name: "Jordan Lee",
      handle: "@jordantalks",
      date: "June 5, 2025",
    },
    {
      image:
        "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60",
      name: "Avery Johnson",
      handle: "@averywrites",
      date: "May 10, 2025",
    },
  ];

  const CreateCard = ({ card }) => (
    <div className="p-4  rounded-lg mx-4 shadow hover:shadow-lg transition-all duration-200 w-72 shrink-0 bg-[var(--cardBodyColor)]">

      <div className="flex gap-2">
        <img className="size-11 rounded-full" src={card.image} alt="User" />
        <div className="flex flex-col">
          <div className="flex items-center gap-1">

            <HeadingH3 head3={`${card.name}`} className={'text-[var(--primaryColor)]'}></HeadingH3>

            <svg
              className="mt-0.5"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.555.72a4 4 0 0 1-.297.24c..."
                fill="#2196F3"
              />
            </svg>
          </div>
          <span className="text-xs text-slate-300">{card.handle}</span>
        </div>
      </div>

      <p className="text-sm py-4 text-gray-400">
        Radiant made undercutting all of our competitors an absolute breeze.
      </p>

      <div className="flex items-center justify-between text-slate-400 text-xs">
        <div className="flex items-center gap-1">
          <span>Posted on</span>
          <a
            href="https://x.com"
            target="_blank"
            className="hover:text-sky-500"
            rel="noreferrer"
          >
            <svg
              width="11"
              height="10"
              viewBox="0 0 11 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m.027 0 4.247 5.516L0 10h.962l3.742-3.926L7.727 10H11L6.514 4.174 10.492 0H9.53L6.084 3.616 3.3 0zM1.44.688h1.504l6.64 8.624H8.082z"
                fill="currentColor"
              />
            </svg>
          </a>
        </div>
        <p>{card.date}</p>
      </div>


    </div>
  );

  return (
    <>
      <style>{`
        @keyframes marqueeScroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }

        .marquee-inner {
          animation: marqueeScroll 35s linear infinite;
        }

        .marquee-reverse {
          animation-direction: reverse;
        }
      `}</style>

      {/* First Row */}

      <div id="success" className="py-16 scroll-mt-20">

        <div className="flex items-center justify-center flex-col">
          <HeadingH2
            headH2={"Success Stories"}
            className={"text-[var(--primaryColor)]"}
          ></HeadingH2>

          <Line></Line>
        </div>

        <div className="marquee-row w-full mx-auto  overflow-hidden relative">
          <div className="absolute left-0 top-0 h-full w-20 z-10  "></div>
          <div className="marquee-inner flex transform-gpu min-w-[200%] pt-10 pb-5">
            {[...cardsData, ...cardsData].map((card, index) => (
              <CreateCard key={index} card={card} />
            ))}
          </div>
          <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 "></div>
        </div>

        {/* Second Row - Reverse */}

        <div className="marquee-row w-full mx-auto overflow-hidden relative">
          <div className="absolute left-0 top-0 h-full w-20 z-10  "></div>

          <div className="marquee-inner marquee-reverse flex transform-gpu min-w-[200%] pt-10 pb-5">
            {[...cardsData, ...cardsData].map((card, index) => (
              <CreateCard key={index} card={card} />
            ))}
          </div>

          <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 "></div>
        </div>
      </div>
    </>
  );
}
