export default function Title({ Tag, Text }) {
  return (
    <div className="title font-black text-8xl">
      <Tag className="leading-[15rem]">{ Text }</Tag>
    </div>
  )
}