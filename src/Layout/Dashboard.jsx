import { FaAd, FaBook, FaCalendar, FaHome, FaList, FaMoneyBill, FaSearch, FaShoppingCart } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";


export default function Dashboard() {

    const [cart]=useCart();


  return (
    <div className="flex">

        <div className="w-64 min-h-screen bg-orange-400">

            <ul className="menu p-4">
                <li ><NavLink to='/dashboard/userHome'> <FaHome></FaHome>   User Home</NavLink></li>
                <li ><NavLink to='/dashboard/reservation'> <FaCalendar></FaCalendar> Reservation</NavLink></li>


                <li ><NavLink to='/dashboard/paymentHistory'> <FaMoneyBill></FaMoneyBill> Payment History</NavLink></li>



                <li ><NavLink to='/dashboard/cart'> <FaShoppingCart></FaShoppingCart>My cart({cart.length})</NavLink></li>
                
                

                <li ><NavLink to='/dashboard/addReview'> <FaAd></FaAd> Add Review</NavLink></li>
                <li ><NavLink to='/dashboard/myBookings'> <FaList></FaList> My Bookings</NavLink></li>

                <div className="divider"></div>

                <li ><NavLink to='/'> <FaHome></FaHome>  Home</NavLink></li>

                <li ><NavLink to='/order/salad'> <FaSearch></FaSearch> Menu</NavLink></li>

                <li ><NavLink to='/menu'> <FaHome></FaHome>  Shop</NavLink></li>

                <li ><NavLink to='/contact'> <FaHome></FaHome>  Contact</NavLink></li>




            </ul>


        </div>

        <div className="flex-1 p-8">

            <Outlet></Outlet>

        </div>



        
    </div>
  )
}
