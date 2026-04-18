import Card from './Card'

const data = [
  {
    title: "Appliances for your home",
    items: ["AC", "Refrigerator", "Microwave", "Washing Machine"]
  },
  {
    title: "Revamp your home",
    items: ["Cushions", "Figurines", "Storage", "Lighting"]
  },
  {
    title: "Bulk order discounts",
    items: ["Laptops", "Kitchen", "Office", "Business"]
  },
  {
    title: "Home essentials",
    items: ["Cleaning", "Bathroom", "Tools", "Wallpaper"]
  }
]

function CardGrid() {
  return (
    <div className="cards">
      {data.map((section, index) => (
        <Card key={index} title={section.title} items={section.items} />
      ))}
    </div>
  )
}

export default CardGrid