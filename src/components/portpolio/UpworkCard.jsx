import React from "react";
import { UpworkIcon } from "@/icons/UpworkIcon";
export const UpworkCard = () => {
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="w-[896px] h-[288px] rounded-xl flex bg-white p-8 justify-between">
          <UpworkIcon />
          <div className="font-normal not-italic text-base text-gray-600 leading-6">
            <p className="text-gray-900 text-xl pb-4">Sr. Frontend Developer</p>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Ut pretium arcu et massa semper, id fringilla leo semper.</li>
            <li>Sed quis justo ac magna.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          </div>
          <div className="flex justify-between">
            <p>Nov 2021 - Present</p>
          </div>
        </div>
        <div className="w-[896px] h-[288px] rounded-xl flex bg-white p-8 justify-between">
          <UpworkIcon />
          <div className="font-normal not-italic text-base text-gray-600 leading-6">
            <p className="text-gray-900 text-xl pb-4">Sr. Frontend Developer</p>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Ut pretium arcu et massa semper, id fringilla leo semper.</li>
            <li>Sed quis justo ac magna.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          </div>
          <div className="flex justify-between">
            <p>Nov 2021 - Present</p>
          </div>
        </div>
        <div className="w-[896px] h-[180px] rounded-xl flex bg-white p-8 justify-between">
          <UpworkIcon />
          <div className="font-normal not-italic text-base text-gray-600 leading-6 w-[384px]">
            <p className="text-gray-900 text-xl pb-4">Sr. Frontend Developer</p>
            <li>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic a
              molestias cum sunt earum!
            </li>
          </div>
          <div className="flex justify-between">
            <p>Nov 2021 - Present</p>
          </div>
        </div>
      </div>
    </>
  );
};
