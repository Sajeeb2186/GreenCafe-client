

export default function FoodCard({item}) {
    const {name,image,price,recipe}=item;

    const handleAddToCart = (food) => {
      console.log(food);



    }



  return (
    <div className="card bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src={image}
      alt="Shoes" />
  </figure>

  <p className="absolute right-0 mr-4 mt-4 px-4 bg-gray-900 text-white">${price}</p>


  <div className="card-body flex flex-col items-center">
    <h2 className="card-title">{name}</h2>
    <p>{recipe}</p>
    <div className="card-actions justify-end">
      <button onClick={()=>handleAddToCart(item._id)} className="btn btn-outline border-0 border-b-4 mt-4">
        
        Add to card
      
      </button>
    </div>
  </div>
</div>
  )
}
