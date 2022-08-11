export default function Title({ Tag, Text, className }) {
  return (
    <div className="title font-black text-8xl lg:text-9xl ">
      <Tag className={"leading-[1] lg:leading-title " + className}>{ Text }</Tag>
    </div>
  )
}