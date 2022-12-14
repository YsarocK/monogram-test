import DashedLines from "../partials/DashedLines";
import Title from "../partials/Title";
import Splitter from '../../assets/svg/api-section-splitter.svg'

import Supabase from '../../assets/svg/supabase.svg'
import Prismic from '../../assets/svg/prismic.svg'

export default function Api() {
  return (
    <section className="flex flex-col items-center relative bg-greyDark mb-[18rem]">
      <DashedLines/>
      <div className="z-10">
        <Title Tag="h2" Text="api" className="text-white text-center"/>
        <p className="mx-auto px-[6rem] lg:px-0 mt-[6rem] mb-[9.6rem] text-base text-center max-w-[55rem] font-light text-white leading-base">At build time, a Jamstack website uses data from one or more APIs to generate markup. These APIs can be a headless CMS like Prismic, a database like Supabase, or even a local JSON file!</p>
        <div>
          <div className="w-[80vw] max-w-[91rem] h-[80vw] max-h-[91rem] relative mx-auto">
            <div className="w-full h-full flex items-center justify-center bg-sphere-gradient rounded-[100%] absolute top-0 z-20 overflow-hidden	">
              <div className="w-full min-w-[110%] h-full flex gap-[4rem] items-center justify-between rotate-[-27.91deg] mix-blend-color-dodge">
                <Prismic className="w-[20%] max-w-[20rem]" />
                <Supabase className="w-[50%] max-w-[37rem]" />
                <Prismic className="w-[20%] max-w-[20rem]" />
              </div>
            </div>
            <div className="w-full h-full bg-white rounded-[100%] blur-[100px] -translate-x-12 -translate-y-12"></div>
            
            {/* White part, absolute to be able taking full screen width & taking 50% of the parent (the circle) */}
            <div className="w-screen h-auto absolute left-2/4 top-2/4 bottom-0 z-10 mx-auto -translate-x-2/4">
              <div className="relative w-full h-full">
                {/* 
                  The wave is just put on top of a 50% height white part. It assures this smooth transition by translating it of 99% & not 100%.
                  It lets some pixels common between the two parts.
                */}
                <Splitter className="absolute -translate-y-[99%]" />
                <div className="w-full h-full bg-white"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}