import FoodCard from "../../../components/FoodCard/FoodCard";


export default function OrderTabs({items}) {
  return (
    <div className="grid md:grid-cols-3 gap-10 my-20">
       {
            items.map(item=><FoodCard
            
                key={item._id}
                item={item}
            
            ></FoodCard>)
        }
       </div>
  )
}
