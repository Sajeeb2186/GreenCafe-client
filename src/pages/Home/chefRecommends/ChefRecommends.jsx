import React from 'react'
import SectionTitle from '../../../components/SectionTitle'

import chefRecImg from "../../../assets/home/featured.jpg";
import FoodCard from '../../../components/FoodCard/FoodCard';


export default function ChefRecommends() {
  return (
    <div>

        <SectionTitle

        subHeading={"Should Try"}
        heading={"CHEF RECOMMENDS"}
        
        
        ></SectionTitle>


       <div className='grid md:grid-cols-3 gap-10'>

       <div className="card bg-base-100 w-96 shadow-sm">
  <figure className="px-10 pt-10">
    <img
      src={chefRecImg}
      alt="Shoes"
      className='h-[200px]'
       />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Caeser Salad</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions">
    <button className="btn btn-outline border-0 border-b-4 mt-4  ">
            Add to Cart
          </button>
    </div>
  </div>
</div>

<div className="card bg-base-100 w-96 shadow-sm">
  <figure className="px-10 pt-10">
    <img
        src={chefRecImg}
      alt="Shoes"
       />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Caeser Salad</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions">
    <button className="btn btn-outline border-0 border-b-4 mt-4  ">
            Add to Cart
          </button>
    </div>
  </div>
</div>

<div className="card bg-base-100 w-96 shadow-sm">
  <figure className="px-10 pt-10">
    <img
      src={chefRecImg}
      alt="Shoes"
      />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Caeser Salad</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions">
    <button className="btn btn-outline border-0 border-b-4 mt-4  ">
            Add to Cart
          </button>
    </div>
  </div>
</div>
        

       </div>

    </div>
  )
}
