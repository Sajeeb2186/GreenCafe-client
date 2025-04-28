import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle";
import Menu from "../../shared/menu/Menu";


export default function MenuItems() {


    const [menu,setMenu]=useState([]);

    useEffect(()=>{


        fetch('menu.json')
        .then(res=>res.json())
        .then(data=> {
            const popularItems=data.filter(item=>item.category==='popular');
            setMenu(popularItems)
        })



    },[])
  return (
    <section className="mb-12">
        <SectionTitle
        
        heading={"Popular items"}
        subHeading={"From our menu"}
        
        
        
        ></SectionTitle>


        <div className="grid md:grid-cols-2 gap-10">
            {
                menu.map(item=><Menu

                    key={item._id}
                    item={item}
                
                
                ></Menu>)
            }
        </div>



    




    </section>
  )
}
