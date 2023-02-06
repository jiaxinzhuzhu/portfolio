import React from "react";
import protfoliobg from "../protfolioBg.jpg";

export default function Home() {
  return (
    <main>
      <img
        src={protfoliobg}
        alt="backgroud"
        className="absolute object-cover w-full h-full"
      />
      <section className="relative flex justify-centre min-h-screen pt-12 lg:pt-64 px-8">
        <h1 className="text-6xl text-black-100 font-bold cursive leading-none lg:leading-snug home-name">
          HELLO, I'm JACKSON.
        </h1>
      </section>
    </main>
  );
}
