import React from 'react'
import { DSAlgom } from "./data";
import { appdev } from "./data";
import { Versioncntrl } from "./data";
import { CyberSec } from "./data";
import { webdev } from "./data";
import { UIndUX } from "./data";

export const DS = () => {
  return (
    <div className=" p-10 flex flex-wrap justify-center align-middle gap-20">
      {DSAlgom.map((idx) => (
        <div class="max-w-xs rounded-md overflow-hidden shadow-lg hover:scale-105 transition duration-500 cursor-pointer shadow-lg shadow-cyan-500/50">
          <div>
            <img
              src={idx.imgsrc}
              alt=""
              className="h-60 w-full"
            />
          </div>
          <div class="py-4 px-5 bg-white h-full">
            <h3 class="text-lg font-semibold text-gray-600">
              {idx.title}
            </h3>
            <p class="mt-4 text-lg font-thin">
              {idx.desc}
            </p>
            <a href={idx.url} target='_blank' >
              <span class="flex items-center justify-center mt-4 w-full bg-green-500 hover:bg-green-600 py-1 rounded">
                <button class="font-semibold text-gray-800">Explore</button>
              </span>
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}

export const APPDEV = () => {
  return (
    <div className=" p-10 flex flex-wrap justify-center align-middle gap-20">
      {appdev.map((idx) => (
        <div class="max-w-xs rounded-md overflow-hidden shadow-lg hover:scale-105 transition duration-500 cursor-pointer shadow-lg shadow-cyan-500/50">
          <div>
            <img
              src={idx.imgsrc}
              alt=""
              className="h-60 w-full"
            />
          </div>
          <div class="py-4 px-5 bg-white h-full">
            <h3 class="text-lg font-semibold text-gray-600">
              {idx.title}
            </h3>
            <p class="mt-4 text-lg font-thin">
              {idx.desc}
            </p>
            <a href={idx.url} target='_blank' >
              <span class="flex items-center justify-center mt-4 w-full bg-green-500 hover:bg-green-600 py-1 rounded">
                <button class="font-semibold text-gray-800">Explore</button>
              </span>
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}

export const GITHUB = () => {
  return (
    <div className=" p-10 flex flex-wrap justify-center align-middle gap-20">
      {Versioncntrl.map((idx) => (
        <div class="max-w-xs rounded-md overflow-hidden shadow-lg hover:scale-105 transition duration-500 cursor-pointer shadow-lg shadow-cyan-500/50">
          <div>
            <img
              src={idx.imgsrc}
              alt=""
              className="h-60 w-full"
            />
          </div>
          <div class="py-4 px-5 bg-white h-full">
            <h3 class="text-lg font-semibold text-gray-600">
              {idx.title}
            </h3>
            <p class="mt-4 text-lg font-thin">
              {idx.desc}
            </p>
            <a href={idx.url} target='_blank' >
              <span class="flex items-center justify-center mt-4 w-full bg-green-500 hover:bg-green-600 py-1 rounded">
                <button class="font-semibold text-gray-800">Explore</button>
              </span>
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}

export const Cybersecurity = () => {
  return (
    <div className=" p-10 flex flex-wrap justify-center align-middle gap-20">
      {CyberSec.map((idx) => (
        <div class="max-w-xs rounded-md overflow-hidden shadow-lg hover:scale-105 transition duration-500 cursor-pointer shadow-lg shadow-cyan-500/50">
          <div>
            <img
              src={idx.imgsrc}
              alt=""
              className="h-60 w-full"
            />
          </div>
          <div class="py-4 px-5 bg-white h-full">
            <h3 class="text-lg font-semibold text-gray-600">
              {idx.title}
            </h3>
            <p class="mt-4 text-lg font-thin">
              {idx.desc}
            </p>
            <a href={idx.url} target='_blank' >
              <span class="flex items-center justify-center mt-4 w-full bg-green-500 hover:bg-green-600 py-1 rounded">
                <button class="font-semibold text-gray-800">Explore</button>
              </span>
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}

export const WebDev = () => {
  return (
    <div className=" p-10 flex flex-wrap justify-center align-middle gap-20">
      {webdev.map((idx) => (
        <div class="max-w-xs rounded-md overflow-hidden shadow-lg hover:scale-105 transition duration-500 cursor-pointer shadow-lg shadow-cyan-500/50">
          <div>
            <img
              src={idx.imgsrc}
              alt=""
              className="h-60 w-full"
            />
          </div>
          <div class="py-4 px-5 bg-white h-full">
            <h3 class="text-lg font-semibold text-gray-600">
              {idx.title}
            </h3>
            <p class="mt-4 text-lg font-thin">
              {idx.desc}
            </p>
            <a href={idx.url} target='_blank' >
              <span class="flex items-center justify-center mt-4 w-full bg-green-500 hover:bg-green-600 py-1 rounded">
                <button class="font-semibold text-gray-800">Explore</button>
              </span>
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}

export const UIUX = () => {
  return (
    <div className=" p-10 flex flex-wrap justify-center align-middle gap-20">
      {UIndUX.map((idx) => (
        <div class="max-w-xs rounded-md overflow-hidden shadow-lg hover:scale-105 transition duration-500 cursor-pointer shadow-lg shadow-cyan-500/50">
          <div>
            <img
              src={idx.imgsrc}
              alt=""
              className="h-60 w-full"
            />
          </div>
          <div class="py-4 px-5 bg-white h-full">
            <h3 class="text-lg font-semibold text-gray-600">
              {idx.title}
            </h3>
            <p class="mt-4 text-lg font-thin">
              {idx.desc}
            </p>
            <a href={idx.url} target='_blank' >
              <span class="flex items-center justify-center mt-4 w-full bg-green-500 hover:bg-green-600 py-1 rounded">
                <button class="font-semibold text-gray-800">Explore</button>
              </span>
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}