import ReactIcon from '../../assets/svg/technos/react.svg'
import VueIcon from '../../assets/svg/technos/vue.svg'
import NextIcon from '../../assets/svg/technos/next.svg'
import SvelteIcon from '../../assets/svg/technos/svelte.svg'
import DashedLines from '../partials/DashedLines'


export default function Technos() {
  return (
    <section className="bg-greyDark mt-[-55rem] relative">
      <DashedLines />
      <div className="grid grid-cols-4 justify-center h-full max-w-[128rem] mx-auto pt-[36rem]">
        <div className="flex flex-col items-center pt-[25rem]">
          <ReactIcon className="h-[5.5rem] mb-[35.7rem] drop-shadow-white" />
          <SvelteIcon className="h-[5.5rem] opacity-40 drop-shadow-white" />
        </div>
        <div className="flex flex-col items-center pt-[38rem]">
          <NextIcon className="h-[7.5rem] mb-[50rem] drop-shadow-white" />
          <ReactIcon className="h-[5.5rem] opacity-10 drop-shadow-white" />
        </div>
        <div className="flex flex-col items-center pt-[72rem]">
          <VueIcon className="h-[6.5rem] opacity-40 drop-shadow-white" />
        </div>
        <div className="flex flex-col items-center">
          <NextIcon className="h-[7.5rem] mb-[40rem] drop-shadow-white" />
          <ReactIcon className="h-[5.5rem] mb-[58rem] drop-shadow-white" />
          <SvelteIcon className="h-[5.5rem] opacity-10 drop-shadow-white" />
        </div>
      </div>
    </section>
  )
}