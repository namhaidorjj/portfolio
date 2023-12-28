import React from "react";
import { UpworkCard } from "./UpworkCard";
export const UpWork = () => {
  return (
    <div className="h-1140px pt-24 pb-24 flex flex-col gap-12 bg-gray-50">
      <div className="flex flex-col gap-4 items-center">
        <p className="flex w-[115px] h-[28px] bg-gray-200 aling-center justify-center rounded-xl">
          Experience
        </p>
        <p className="w-[100vw] h-[28px] flex flex-col justify-center items-center">
          Here is a quick summary of my most recent experiences:
        </p>
      </div>
      <div className="flex flex-col items-center">
        <UpworkCard />
      </div>
    </div>
  );
};
