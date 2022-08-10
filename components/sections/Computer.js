import Title from "../partials/Title"
import CardBig from '../../assets/svg/card-big.svg'
import RetroComputer from '../../assets/svg/computer.svg'
import Line from '../../assets/svg/line-2.svg'

export default function Computer() {
  return (
    <section className="mt-[4.2rem] text-center relative 2xl:container mx-auto z-10">
      <CardBig className="absolute z-[-1]" />
      <Line className="absolute top-[26rem] right-[10rem]" />
      <div className="pt-[9rem] flex flex-col items-center">
        <Title Tag="h2" Text="javascript" className="text-white tracking-[-0.039rem]" />
        <p className="text-base font-light text-white leading-base max-w-[57.8rem] mt-[4.4rem] mb-[9rem]">Statically generated pages are brought to life with client-side JavaScript libraries and frameworks, such as Algolia and Next.js.</p>
        <RetroComputer />
      </div>
    </section>
  )
}