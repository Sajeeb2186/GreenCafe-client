import { Link } from "react-router-dom";
import Cover from "../../shared/cover/Cover";
import Menu from "../../shared/menu/Menu";



export default function MenuCategory({items,title,img}) {
  return (

    <div  className="mt-24">
        {title && <Cover img ={img} title={title}></Cover>}
        <div className="grid md:grid-cols-2 gap-10 my-20">
                {
                    items.map(item=><Menu
    
                        key={item._id}
                        item={item}
                    
                    
                    ></Menu>)
                }

         

            </div>

            <Link  to={`/order/${title}`} >
            <button className="btn btn-outline border-0 border-b-4 mt-4 bg-gray-200">
            Order Now
          </button>
          
          </Link>
    </div>
    
  )
}
