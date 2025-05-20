import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";

export default function FoodCard({ item }) {
  const { name, image, price, recipe,_id } = item;

  const { user } = useAuth();

  const navigate = useNavigate();

  const location = useLocation();

  const axionsSecure = useAxiosSecure();

  const [,refetch]=useCart();

  const handleAddToCart = () => {
    if (user && user.email) {
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      };

      axionsSecure.post("/carts", cartItem).then((res) => {

        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} added to the cart`,
            showConfirmButton: false,
            timer: 1500,
          });
          //refetch the cart
          refetch()

        }
      });
    } else {
      Swal.fire({
        title: " You are not logged in",
        text: "Pleae log in to add to the cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes,longin now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>

      <p className="absolute right-0 mr-4 mt-4 px-4 bg-gray-900 text-white">
        ${price}
      </p>

      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button
            onClick={ handleAddToCart}
            className="btn btn-outline border-0 border-b-4 mt-4"
          >
            Add to card
          </button>
        </div>
      </div>
    </div>
  );
}
