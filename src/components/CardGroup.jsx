import Card from "./Card"

const CardGroup = () => {
  return (
    <div className="container mx-auto ">
      <div className="flex gap-8 flex-col md:flex-row mx-10">
        <Card/>
        <Card/>
        <Card/>
      </div>
    </div>
  )
}

export default CardGroup