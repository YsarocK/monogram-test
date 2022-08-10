import DashedLines from "../partials/DashedLines";

export default function Audit() {
  return (
    <section className="flex flex-col items-center bg-greyDark relative">
      <DashedLines />
      <div className="flex flex-col py-[12rem] 2xl:container mx-auto relative mt-[-8.5rem] w-full">
        <div className="blur-[12rem] bg-audit-card absolute top-0 left-0 right-0 mx-auto w-full h-full rounded-[6.8rem] [transform:matrix(-1,0,0,1,0,0)]"></div>
        <div className="blur-[12rem] absolute top-0 left-0 right-0 mx-auto w-full h-full rounded-[6.8rem] border-1"></div>
        <h3 className="title text-center font-black text-8xl text-greenLight">top audit scores</h3>
      </div>
    </section>
  )
}