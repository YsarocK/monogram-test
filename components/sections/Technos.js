import ReactIcon from '../../assets/svg/technos/react.svg'
import VueIcon from '../../assets/svg/technos/vue.svg'
import NextIcon from '../../assets/svg/technos/next.svg'
import SvelteIcon from '../../assets/svg/technos/svelte.svg'
import DashedLines from '../partials/DashedLines'

export default function Technos() {
  return (
    <section className="bg-greyDark my-[-1rem] pb-[1rem] relative z-10">
      <DashedLines />
      <div className="grid grid-cols-4 justify-center h-full max-w-[128rem] mx-auto">
        <div className="flex flex-col items-center pt-[7.5rem] md:pt-[25rem]">
          <ReactIcon className="w-[70%] md:w-[auto] md:h-[5.5rem] mb-[12rem] md:mb-[35.7rem] drop-shadow-white" />
          <SvelteIcon className="w-[70%] md:w-[auto] md:h-[5.5rem] opacity-40 drop-shadow-white" />
        </div>
        <div className="flex flex-col items-center pt-[10rem] md:pt-[38rem]">
          <NextIcon className="w-[70%] md:w-[auto] md:h-[7.5rem] mb-[15rem] md:mb-[50rem] drop-shadow-white" />
          <ReactIcon className="w-[70%] md:w-[auto] md:h-[5.5rem] opacity-10 drop-shadow-white" />
        </div>
        <div className="flex flex-col items-center pt-[18rem] md:pt-[72rem]">
          <VueIcon className="w-[70%] md:w-[auto] md:h-[6.5rem] opacity-40 drop-shadow-white" />
        </div>
        <div className="flex flex-col items-center">
          <NextIcon className="w-[70%] md:w-[auto] md:h-[7.5rem] mb-[13rem] md:mb-[40rem] drop-shadow-white" />
          <ReactIcon className="w-[70%] md:w-[auto] md:h-[5.5rem] mb-[18rem] md:mb-[58rem] drop-shadow-white" />
          <SvelteIcon className="w-[70%] md:w-[auto] md:h-[5.5rem] opacity-10 drop-shadow-white" />
        </div>
      </div>
    </section>
  )
}