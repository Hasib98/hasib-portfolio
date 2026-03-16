"use client";
import Lottie from "lottie-react";

interface Props {
  animationData: object;
  loop?: boolean;
  speed?: number;
  className?: string;
}

export default function LottiePlayer({ animationData, loop = true, className }: Props) {
  return <Lottie animationData={animationData} loop={loop} className={className} />;
}
