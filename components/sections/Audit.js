import DashedLines from "../partials/DashedLines";
import Heart from '../../assets/svg/heart.svg'
import ScoreIndicator from '../../assets/svg/score.svg'
import Wall from '../../assets/svg/wall.svg'

import { useEffect } from "react";

export default function Audit() {

  useEffect(() => {
    const reveal = document.querySelectorAll('.reveal')
    window.addEventListener('scroll', (e) => {
      reveal.forEach((el) => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
          el.classList.add("active");
        }
      })
    })
  }, [])

  return (
    <section className="flex flex-col items-center bg-greyDark relative mb">
      <DashedLines/>
      <div className="bg-white relative">
        {/* Move this section from Markup.jsx so that the backdrop-filter applied on the green card works on it. */}
        <Wall/>
      </div>
      <div className="flex flex-col gap-[10rem] items-center py-[12rem] px-[8rem] mx-auto relative mt-[-8.5rem]">
        <div className="card absolute top-0 left-0 right-0 mx-auto w-full h-full rounded-[6.8rem]"></div>
        <h3 className="title text-center font-black text-8xl text-greenLight z-10">top audit scores</h3>
        <div className="score flex justify-between gap-[6.7rem]">
          {Array.from({ length: 4 }, (_, i) =>
            <div className='score__item reveal h-[20rem] w-[20rem] flex text-[6.3rem] font-bold relative' key={i}>
              <ScoreIndicator  className={"absolute top-0 left-1/2 m-auto bottom-0 -translate-x-2/4 " + ((i + 1) === 3 ? 'opacity-30' : 'opacity-80') }  />
              <p className="m-auto">100</p>
            </div>
          )}
        </div>
        <p className="flex flex-col max-w-[74rem] gap-[3rem] text-[2.6rem] text-[#C7C7C7] leading-[4.2rem] mix-blend-color-dodge">
          <span>Search engines, business stakeholders, and end-users gauge a website’s value using metric tools like Google Lighthouse, which measures site performance, SEO, and accessibility.</span>
          <span>Performance is one of the most difficult scores to get to 100. This is especially true in a time when users demand JavaScript-heavy, highly-interactive web experiences.</span>
          <span>A Jamstack website, delivering SEO-friendly, lean & clean HTML in milliseconds, promises higher search-engine ranking and a more positive, responsive end-user experience.</span>
        </p>
      </div>
      <div className="flex flex-col items-center gap-[3.5rem] my-[15rem] relative">
        <p className="text-white text-[2.4rem]">This is a design test by Etienne Moureton for Monogram.</p>
        <Heart />
      </div>
    </section>
  )
}