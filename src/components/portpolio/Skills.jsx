import React from "react";
import { JsIcon } from "@/icons/JsIcon";
import { TsIcon } from "@/icons/TsIcon";
import { ReactIcon } from "@/icons/ReactIcon";
import { NextjsIcon } from "@/icons/NextjsIcon";
import { NodeIcon } from "@/icons/NodeIcon";
import { ExpressIcon } from "@/icons/ExpressIcon";
import { NestIcon } from "@/icons/NestIcon";
import { SocketIcon } from "@/icons/SocketIcon";
import { PostgreSQLIcon } from "@/icons/PostgreSQLIcon";
import { MongoDBIcon } from "@/icons/MongoDBIcon";
import { SassIcon } from "@/icons/SassIcon";
import { TailwindIcon } from "@/icons/TailwindIcon";
import { FigmaIcon } from "@/icons/FigmaIcon";
import { CypressIcon } from "@/icons/CypressIcon";
import { StorybookIcon } from "@/icons/StorybookIcon";
import { GitIcon } from "@/icons/GitIcon";

export const Skills = () => {
  return (
    <div>
      <div>
        <p className="flex">Skills</p>
        <p>The skills, tools and technologies I am really good at:</p>
      </div>
      <div className="flex justify-between pb-12 pt-12">
        <div>
          <JsIcon />
          <p>Javascript</p>
        </div>
        <div>
          <TsIcon />
          <p>Typescript</p>
        </div>
        <div>
          <ReactIcon />
          <p>React</p>
        </div>
        <div>
          <NextjsIcon />
          <p>Next</p>
        </div>
        <div>
          <NodeIcon />
          <p>Node</p>
        </div>
        <div>
          <ExpressIcon />
          <p>Express.js</p>
        </div>
        <div>
          <NextjsIcon />
          <p>Nest.js</p>
        </div>
        <div>
          <SocketIcon />
          <p>socket.io</p>
        </div>
      </div>
      <div className="flex justify-between">
        <div>
          <PostgreSQLIcon />
          <p>PostgreSQL</p>
        </div>
        <div>
          <MongoDBIcon />
          <p>MongoDB</p>
        </div>
        <div>
          <SassIcon />
          <p>Sass/Scss</p>
        </div>
        <div>
          <TailwindIcon />
          <p>Tailwindcss</p>
        </div>
        <div>
          <FigmaIcon />
          <p>Figma</p>
        </div>
        <div>
          <CypressIcon />
          <p>Cypress</p>
        </div>
        <div>
          <StorybookIcon />
          <p>Storybook</p>
        </div>
        <div>
          <GitIcon />
          <p>Git</p>
        </div>
      </div>
    </div>
  );
};
