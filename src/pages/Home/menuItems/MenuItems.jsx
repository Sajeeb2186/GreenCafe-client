import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle";
import Menu from "../../shared/menu/Menu";
import useMenu from "../../../hooks/useMenu";


export default function MenuItems() {


    const [menu]=useMenu();

    const popularItems=menu.filter(item=>item.category==='popular');

    // const [menu,setMenu]=useState([]);

    // useEffect(()=>{


    //     fetch('menu.json')
    //     .then(res=>res.json())
    //     .then(data=> {
    //         const popularItems=data.filter(item=>item.category==='popular');
    //         setMenu(popularItems)
    //     })



    // },[])
  return (
    <section className="mb-12">
        <SectionTitle
        
        heading={"Popular items"}
        subHeading={"From our menu"}
        
        
        
        ></SectionTitle>


        <div className="grid md:grid-cols-2 gap-10">
            {
                popularItems.map(item=><Menu

                    key={item._id}
                    item={item}
                
                
                ></Menu>)
            }
        </div>


        <button className="btn btn-outline border-0 border-b-4 mt-4  ">
            View Full Menu
          </button>
    




    </section>
  )
}
