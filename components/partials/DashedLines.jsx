export default function DashedLines({ className }) {
  return (
    <div className={className + ' absolute h-full w-full max-w-[128rem] mx-auto top-0 left-0 right-0 grid grid-cols-4 justify-center border-r-1 border-dashed border-[#404040]'}>
      {Array.from({ length: 4 }, (_, i) => <div className='h-full border-l-1 border-dashed border-[#404040]' key={i}></div>)}
    </div>
  )
}