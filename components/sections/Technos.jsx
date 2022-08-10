import ReactIcon from '../../assets/svg/technos/react.svg'
import VueIcon from '../../assets/svg/technos/vue.svg'
import NextIcon from '../../assets/svg/technos/next.svg'
import SvelteIcon from '../../assets/svg/technos/svelte.svg'


export default function Technos() {
  return (
    <section className="h-[230rem] bg-greyDark mt-[-50rem] relative">
      <div className="grid justify-center h-full absolute top-0 left-0 right-0 grid-cols-4 max-w-[128rem] mx-auto pt-[36rem]">
        <div className="flex flex-col items-center gap-[35.7rem] border-l-1 border-dashed border-[#404040]">
          <ReactIcon />
          <SvelteIcon />
        </div>
        <div className="flex flex-col items-center gap-[50rem] border-l-1 border-dashed border-[#404040]">
          <NextIcon />
          <ReactIcon />
        </div>
        <div className="flex flex-col items-center border-l-1 border-dashed border-[#404040]">
          <VueIcon />
        </div>
        <div className="flex flex-col items-centerborder-x-1 border-dashed border-[#404040]">
          <NextIcon />
          <ReactIcon />
        </div>
      </div>
    </section>
  )
}