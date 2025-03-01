"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { TextGenerateEffect } from "./text-generate-effect";
import SplineModel from "../spline-model";
import Waves from '../../hooks/waves'


export const HeroParallax = ({}: {}) => {
  const ref = React.useRef(null);

  return (
    <div
      ref={ref}
      className="h-screen min-h-[700px] flex items-center dark:bg-black bg-white  overflow-hidden"
    >
      <div className="absolute pointer-events-none inset-0 dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <div className="flex items-center container max-w-7xl h-full flex-col md:flex-row gap-10">
        <div className="order-2 md:order-1 basis-1/2 h-1/2 md:h-full flex justify-center flex-col">
          <h1 className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
            Welcome to <br /> Spencesa.co.za
          </h1>
          <TextGenerateEffect
            className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 whitespace-pre-wrap"
            words={`Let’s build immersive digital experiences\n – one project at a time.`}
          />
        </div>
        <div className="h-1/2 order-1 md:order-2 basis-1/2 w-full md:h-full object-center">
          <SplineModel />
        </div>
      </div>
    </div>
  );
};
