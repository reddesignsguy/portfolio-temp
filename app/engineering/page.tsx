"use client";

import Image from "next/image";
import NavBar from "../components/NavBar";
import Carousel from "../components/Carousel";
// import c_sharp from "/static/images/languages/CSharp.svg";
// import c_pp from "../public/static/images/languages/CPlusPlus.svg";
// import luau from "../public/static/images/languages/luau.png";
// import unity from "../public/static/images/languages/unity.png";

const slides = [
  "https://i.ibb.co/ncrXc2V/1.png",
  "https://i.ibb.co/B3s7v4h/2.png",
  "https://i.ibb.co/XXR8kzF/3.png",
  "https://i.ibb.co/yg7BSdM/4.png",
];

export default function EngineeringPage() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <NavBar />
      <div className="grid items-center justify-items-center min-h-screen p-8 pb-20 sm:p-20">
        <img src="/color_brain.png" />
        <h1 className="text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          The left side of my brain.
        </h1>
        <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400 whitespace ">
          Just as the simple law of gravity, F = mg, shaped galaxies, stars,
          planets, our solar system, Earth, and ultimately life— enabling us to
          walk, talk, laugh, play sports, skydive, and feel emotions like
          happiness, love, and longing— I believe that simple, robust systems
          are the foundation for building functionally complex and scalable
          software.
        </p>
      </div>
      <div className="grid grid-cols-2  grid-rows-1 gap-4 text-2xl p-8">
        <div className="p-4 text-white text-center">
          <h2 className="font-bold text-4xl">Game Dev:</h2>
          <div className="m-5">
            <h4>C#, C++, Luau </h4>
            <div className=" flex justify-center gap-4 w-full max-w-md mx-auto my-3">
              <img
                src="/static/images/languages/CSharp.svg"
                className="w-24 h-24"
              ></img>
              <img
                src="/static/images/languages/CPlusPlus.svg"
                className="w-24 h-24"
              ></img>
              <img
                src="/static/images/languages/luau.png"
                className="w-24 h-24"
              ></img>
            </div>
          </div>
          <div className="mt-5 mb-10">
            <h4>Unity, ROBLOX, OpenFrameworks </h4>
            <div className="flex justify-center gap-4 w-full max-w-md mx-auto my-3">
              <img
                src="/static/images/languages/unity.png"
                className="w-24 h-24 object-cover"
              ></img>
              <img
                src="/static/images/languages/roblox.png"
                className="w-24 h-24 object-cover"
              ></img>
            </div>
          </div>
          <div className="max-w-2xl px-16 mx-auto">
            <Carousel>
              {slides.map((s) => (
                <img src={s}></img>
              ))}
            </Carousel>
          </div>
        </div>
        <div className="p-4 text-white text-center">
          <h2 className="font-bold text-4xl">Web Dev:</h2>
          <div className="m-5">
            <h4> Java, Python, Typescript, Javascript </h4>
            <div className=" flex justify-center gap-4 w-full max-w-md mx-auto my-3">
              <img
                src="/static/images/languages/Java.svg"
                className="w-24 h-24"
              ></img>
              <img
                src="/static/images/languages/Python.svg"
                className="w-24 h-24"
              ></img>
              <img
                src="/static/images/languages/TypeScript.svg"
                className="w-24 h-24"
              ></img>
              <img
                src="/static/images/languages/JS.svg"
                className="w-24 h-24"
              ></img>
            </div>
          </div>
          <div className="mt-5 mb-10">
            <h4> React, Express, Node, PostgreSQL, MySQL </h4>
            <div className="flex justify-center gap-4 w-full max-w-md mx-auto my-3">
              <img
                src="/static/images/languages/react.png"
                className="w-24 h-24 object-cover"
              ></img>
              <img
                src="/static/images/languages/expressjs.png"
                className="w-24 h-24 object-cover"
              ></img>
              <img
                src="/static/images/languages/nodejs.webp"
                className="w-24 h-24 object-cover"
              ></img>
              <img
                src="/static/images/languages/postgresql.png"
                className="w-24 h-24 object-cover"
              ></img>
              <img
                src="/static/images/languages/mysql.png"
                className="w-24 h-24 object-cover"
              ></img>
            </div>
          </div>
          <div className="max-w-2xl px-16 mx-auto">
            <Carousel>
              {slides.map((s) => (
                <img src={s}></img>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}
