import Image from "next/image";
import Title from "../common/Title";
import PrimaryRectangle from '../../assets/img/hero__rectangle__primary.png'
import SecondaryRectangle from '../../assets/img/hero__rectangle__secondary.png'

export default function Hero() {
  return (
    <div className="pt-60 flex relative">
      <div className="flex flex-col gap-16">
        <div className="flex gap-11">
          <Title Tag="h1" Text="jamstack" />
          <p className="leading-title gradient-text font-black text-8xl bg-gradient-to-r from-orange to-violet bg-clip-border [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">101</p>
        </div>
        <p className="pl-24 text-base max-w-[55rem] font-light text-greyLight leading-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu augue massa, tincidunt proin nunc viverra tristique tempor, ipsum. At lectus vel pretium tempor ut dui vivamus sit.</p>
      </div>
      <div className="flex gap-x-[4.6rem] absolute right-0 top-[15rem]">
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
  )
}