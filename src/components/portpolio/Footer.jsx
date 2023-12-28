import React from "react";
import { PhoneIcon } from "@/icons/PhoneIcon";
import { MailIcon } from "@/icons/MailIcon";
import { NewWindowIcon } from "@/icons/NewWindowIcon";

export const Footer = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-col gap-4 items-center">
          <p className="flex w-[115px] h-[28px] bg-gray-200 aling-center justify-center rounded-xl">
            Get in touch
          </p>
          <p className="w-[100vw] h-[28px] flex flex-col justify-center items-center">
            What’s next? Feel free to reach out to me if you're looking for a
            developer, have a query, or simply want to connect.
          </p>
        </div>
        <div className="flex">
          <MailIcon />
          <h2>reachsagarshah@gmail.com</h2>
          <NewWindowIcon />
        </div>
        <div className="flex">
          <PhoneIcon />
          <h2>+91 8980500565</h2>
          <NewWindowIcon />
        </div>
      </div>
    </>
  );
};
