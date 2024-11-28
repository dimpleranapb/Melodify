"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
const musicSchoolContent = [
  {
    title: "Unleash Your Potential: A Tailored Journey to Music Mastery",
    description:
      "Begin a transformative musical journey tailored to your unique aspirations. Our personalized approach to instruction adapts to your individual learning style, creating the perfect environment for growth, creativity, and excellence. At our music school, we align your passion with expert guidance, forging a harmonious path to musical mastery.",
  },
  {
    title: "Unlock Your Musical Expression: A Personalized Path to Success",
    description:
      "Step into a world where your musical potential is fully realized. Our custom-tailored lessons are designed to meet your specific goals, empowering you to explore your creativity while mastering the craft. With our supportive environment, your musical journey is not just a lesson, but a path to lifelong artistry.",
  },
  {
    title: "Your Musical Journey Starts Here: Achieve Mastery at Your Own Pace",
    description:
      "Embark on a personalized musical journey where your growth is our priority. Through our adaptable instruction, we nurture your talents, allowing you to evolve at your own pace. Our commitment to your success ensures you’ll achieve your musical aspirations with confidence and skill.",
  },
  {
    title: "Real-Time Feedback & Interactive Learning",
    description:
      "Dive into a dynamic learning experience with immediate, actionable feedback. Our real-time engagement allows you to refine your skills on the spot, just like a collaborative project. This interactive approach accelerates your understanding and enhances your performance abilities.",
  },
  {
    title: "Innovative and Evolving Curriculum",
    description:
      "Stay ahead of the curve with our cutting-edge curriculum that incorporates the latest trends and technologies in music education. We prioritize modern, effective methods, so you can be sure you’re always learning with the most relevant and impactful resources.",
  },
  {
    title: "Endless Learning Opportunities Await",
    description:
      "Explore an expansive library of resources and a constantly evolving range of courses. With new opportunities for growth at every turn, our platform ensures that your musical journey never stops. There’s always something new to learn, helping you develop your skills continuously and creatively.",
  },
];

export default function WhyChooseUs() {
  return (
    <div className="h-max">
      <StickyScroll content={musicSchoolContent} />
    </div>
  );
}
