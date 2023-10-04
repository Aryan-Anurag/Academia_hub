import React from "react";

import { learn } from "./data";
import { ArrowBackIos } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
const Pagelrn = () => {
  let navigate = useNavigate();
  return (
    <div className=" p-10 flex flex-wrap justify-center align-middle gap-20">
      {learn.map((idx) => (
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
            <span onClick={() => navigate(`${idx.url}`)} class="flex items-center justify-center mt-4 w-full bg-green-500 hover:bg-green-600 py-1 rounded">
              <button class="font-semibold text-gray-800">Explore</button>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Pagelrn;
