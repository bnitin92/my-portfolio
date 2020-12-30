import React from "react";
import image from "../img/earth2.jpeg";

export default function Home() {
  return (
    <main>
      <img
        src={image}
        alt="Earth"
        className="absolute object-cover w-full h-full"
      />
      <section className="relative flex justify-center min-h-section pt-12 lg:pt-64 px-8 ">
        <h1 className="text-6xl text-green-100 font-bold cursive leading-none lg:leading-snug home-name">
          Bonjour. I'm Nitin.
        </h1>
      </section>
    </main>
  );
}
