import Image from "next/image";
import { Inter } from "next/font/google";
import { Header } from "@/components/portpolio/Header";
import { Main } from "@/components/portpolio/Main";
import { MainText } from "@/components/portpolio/MainText";
import { Skills } from "@/components/portpolio/Skills";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div class="w-screen h-fit flex flex-col pt-4 pr-20 pl-20">
        <Header />
        <Main />
        <MainText />
        <Skills />
      </div>
    </>
  );
}
