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
          <p className="leading-[15rem] gradient-text font-black text-8xl bg-gradient-to-r from-orange to-violet bg-clip-border [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">101</p>
        </div>
        <p className="pl-24 text-base max-w-[55rem] font-light text-greyLight leading-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu augue massa, tincidunt proin nunc viverra tristique tempor, ipsum. At lectus vel pretium tempor ut dui vivamus sit.</p>
      </div>
      <div className="flex gap-x-[4.5rem] absolute right-0 top-[15rem]">
        <div className="pt-[17rem]">
          <Image
            src={PrimaryRectangle}
            width={280}
            height={629}
            layout="fixed"
          />
        </div>
        <div>
          <Image
            src={SecondaryRectangle}
            width={280}
            height={629}
            layout="fixed"
          />
        </div>
      </div>
    </div>
  )
}