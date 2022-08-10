import Image from "next/image";
import Title from "../partials/Title";
import PrimaryRectangle from '../../assets/img/markup__rectangle__primary.png'
import SecondaryRectangle from '../../assets/img/markup__rectangle__secondary.png'
import Wall from '../../assets/svg/wall.svg'

export default function Markup() {
  return (
    <section className="flex flex-col items-center relative">
      <div className="flex 2xl:container mx-auto relative">
        <div className="flex flex-col gap-16">
          <div className="flex gap-11">
            <Title Tag="h1" Text="markup" />
          </div>
          <p className="text-[2.4rem] max-w-[48rem] font-normal text-[#414141] leading-base">
            When ready for deployment, a static-site generator such as Astro or Next.js is used to compile the website. The end result is a collection of pre-rendered HTML pages that can be delivered lightning-fast over a CDN like Vercel’s Edge Network.
          </p>
          <div className="relative mt-[8rem] h-[50rem]">
            <div className="absolute w-[32rem] h-[5.7rem] rounded-lg bg-blocBlue left-[13rem] rotate-[-16.91deg]"></div>
            <div className="absolute w-[32rem] h-[5.7rem] rounded-lg bg-blocRed left-[-5.8rem] top-[20rem] rotate-[14.16deg]"></div>
            <div className="absolute w-[32rem] h-[5.7rem] rounded-lg bg-blocYellow right-[-10rem] top-[25rem] rotate-[-58.55deg]"></div>
          </div>
        </div>
        <div className="flex gap-x-[4.6rem] absolute right-0">
          <div className="pt-[17rem] relative z-10">
            <Image
              src={PrimaryRectangle}
              alt="Hero Abstract Rectangle"
              width={280}
              height={629}
              layout="fixed"
            />
            <div className="w-[28rem] h-[47rem] absolute top-[48rem] left-[16.4rem] [backdrop-filter:blur(120px)] rounded-[6.8rem] z-1"></div>
          </div>
          <div className="relative">
            <Image
              src={SecondaryRectangle}
              alt="Hero Abstract Rectangle"
              width={278}
              height={629}
              layout="fixed"
            />
            <div className="w-[28rem] h-[66rem] absolute top-[30rem] left-[15.8rem] [backdrop-filter:blur(120px)] rounded-[6.8rem]"></div>
          </div>
        </div>
      </div>
      <Wall/>
    </section>
  )
}