import Title from "../partials/Title"
import CardBig from '../../assets/svg/card-big.svg'
import RetroComputer from '../../assets/svg/computer.svg'
import Line from '../../assets/svg/line-2.svg'
import DashedLines from "../partials/DashedLines"

export default function Computer() {
  return (
    <section className="mt-[4.2rem] text-center relative 2xl:container px-24 mx-auto z-10 bg-greyDark md:bg-[transparent] py-20 md:py-0">
      <div className="bg-greyDark absolute w-[100vw] h-[75%] xl:h-[55%] lg:max-h-[55rem] bottom-0 left-2/4 -translate-x-2/4">
        <DashedLines />
      </div>
      <CardBig className="absolute z-[0] lg:z-[0] left-0 right-0 w-full px-24" />
      <Line className="absolute top-[20rem] lg:top-[26rem] right-[10rem] w-[15rem] lg:w-[24.8rem]" />
      <div className="pt-[9rem] flex flex-col items-center relative">
        <Title Tag="h2" Text="javascript" className="text-white tracking-[-0.039rem]" />
        <p className="text-base font-light text-white leading-base max-w-[57.8rem] mt-[4.4rem] mb-[9rem]">Statically generated pages are brought to life with client-side JavaScript libraries and frameworks, such as Algolia and Next.js.</p>
        <RetroComputer className="mx-24 w-[65vw] lg:w-[80rem]" />
      </div>
    </section>
  )
}