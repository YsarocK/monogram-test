export default function Title({ Tag, Text, className }) {
  return (
    <div className="title font-black text-9xl">
      <Tag className={"leading-title " + className}>{ Text }</Tag>
    </div>
  )
}