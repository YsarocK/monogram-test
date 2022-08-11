import Title from "../partials/Title"
import CardBig from '../../assets/svg/card-big.svg'
import RetroComputer from '../../assets/svg/computer.svg'
import Line from '../../assets/svg/line-2.svg'
import DashedLines from "../partials/DashedLines"

export default function Computer() {
  return (
    <section className="mt-[4.2rem] text-center relative 2xl:container px-24 mx-auto z-10 bg-greyDark md:bg-[transparent] py-20 md:py-0">
      <DashedLines className="md:hidden" />
      <CardBig className="absolute z-[0] lg:z-[0] left-0 right-0 w-full px-24" />
      <Line className="absolute top-[22rem] lg:top-[26rem] right-[10rem] w-[15rem] lg:w-[24.8rem]" />
      <div className="pt-[9rem] flex flex-col items-center relative">
        <Title Tag="h2" Text="javascript" className="text-white tracking-[-0.039rem]" />
        <p className="text-base font-light text-white leading-base max-w-[57.8rem] mt-[4.4rem] mb-[9rem]">Statically generated pages are brought to life with client-side JavaScript libraries and frameworks, such as Algolia and Next.js.</p>
        <RetroComputer className="mx-24 w-full lg:w-[80rem]" />
      </div>
    </section>
  )
}