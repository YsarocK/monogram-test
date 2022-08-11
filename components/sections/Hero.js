import Image from "next/image";
import Title from "../partials/Title";
import PrimaryRectangle from '../../assets/img/hero__rectangle__primary.png'
import SecondaryRectangle from '../../assets/img/hero__rectangle__secondary.png'
import Mouse from '../../assets/svg/mouse.svg'
import Line from '../../assets/svg/line.svg'

export default function Hero() {
  return (
    <section className="pt-60 flex justify-center lg:justify-start relative 2xl:container px-24 mx-auto">
      <div className="flex flex-col gap-16">
        <div className="flex gap-[1rem] lg:gap-11 flex-col lg:flex-row items-center lg:items-start">
          <Title Tag="h1" Text="jamstack" />
          <p className="leading-[1] lg:leading-title gradient-text font-black text-8xl lg:text-9xl bg-gradient-to-r from-orange to-violet bg-clip-border [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">101</p>
        </div>
        <p className="lg:pl-24 text-base max-w-[55rem] font-light text-greyLight leading-base text-center lg:text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu augue massa, tincidunt proin nunc viverra tristique tempor, ipsum. At lectus vel pretium tempor ut dui vivamus sit.</p>
        <div className="flex flex-col mt-[4.8rem] pl-24 max-w-[55rem] items-center">
          <div>
            <Mouse className="w-[3.6rem]" />
            <Line className="w-[8rem]" />
          </div>
        </div>
      </div>
      <div className="flex gap-x-[4.6rem] absolute top-[5rem] lg:top-[15rem] opacity-20 lg:opacity-100 z-[-1] lg:z-1 mx-auto lg:left-auto lg:right-0">
        <div className="pt-[17rem] relative z-10">
          <Image
            src={PrimaryRectangle}
            alt="Hero Abstract Rectangle"
            width={280}
            height={629}
            layout="fixed"
          />
          <div className="w-[28rem] h-[47rem] absolute top-[48rem] left-[16.4rem] rounded-[6.8rem] z-1 [backdrop-filter:blur(12rem)]"></div>
        </div>
        <div className="relative">
          <Image
            src={SecondaryRectangle}
            alt="Hero Abstract Rectangle"
            width={278}
            height={629}
            layout="fixed"
          />
          <div className="w-[28rem] h-[66rem] absolute top-[30rem] left-[15.8rem] rounded-[6.8rem] [backdrop-filter:blur(12rem)]"></div>
        </div>
      </div>
    </section>
  )
}