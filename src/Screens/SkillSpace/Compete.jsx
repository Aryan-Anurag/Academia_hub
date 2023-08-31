import React from "react";
import gfgcontest from "../../assets/gfgcontest.jpg"
import leetcodecontest from "../../assets/leetcodecontest.jpg"
import codeforcescomp from "../../assets/codeforcescomp.jpg"
import codechefcomp from "../../assets/codechefcomp.jpg"
import hackathon1 from "../../assets/hackathon1.jpg"
import hackathon2 from "../../assets/hackathon2.jpg"
import { compete } from "./data";

const Compete = () => {
  return (
    <div className="flex flex-wrap justify-center align-middle gap-10">
      {compete.map((idx) => (
        <div class="max-w-xs rounded-md overflow-hidden shadow-lg hover:scale-105 transition duration-500 cursor-pointer">
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
            <span class="flex items-center justify-center mt-4 w-full bg-yellow-400 hover:bg-yellow-500 py-1 rounded">
              <button class="font-semibold text-gray-800">Explore</button>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Compete;
