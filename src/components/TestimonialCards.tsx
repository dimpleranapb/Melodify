import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const testimonials = [
  {
    quote:
      "My experience at this music academy has been transformative. The instructors are incredibly skilled, and the personalized lessons helped me develop my unique sound. It’s more than just learning music; it’s a journey of self-expression and creativity.",
    name: "Emily Johnson",
    title: "Piano Student",
  },
  {
    quote:
      "As a beginner, I never thought I could master playing an instrument. But the support and encouragement I received here gave me the confidence to push through challenges. The progress I’ve made is beyond what I imagined.",
    name: "David Lee",
    title: "Guitar Student",
  },
  {
    quote:
      "This academy’s approach to teaching music is unparalleled. Not only did I gain technical skills, but I also learned how to connect emotionally with the music. The environment is welcoming and inspiring.",
    name: "Samantha Clark",
    title: "Vocal Student",
  },
  {
    quote:
      "The feedback I receive from my instructor is always constructive and insightful. It pushes me to keep improving and refine my craft. Every lesson feels like an exciting new step toward mastering my instrument.",
    name: "James Thompson",
    title: "Drums Student",
  },
  {
    quote:
      "The academy’s curriculum is both challenging and rewarding. I’ve learned techniques that I never thought I could master, and the individual attention I get helps me stay motivated and on track with my goals.",
    name: "Sophia Martinez",
    title: "Violin Student",
  },
];

export default function TestimonialCards() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-8 z-10">
        Hear our Harmony: Voices of success
      </h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
}
