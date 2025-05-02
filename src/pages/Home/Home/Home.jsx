import Banner from "../banner/Banner";
import BistroBoss from "../bistroBoss/BistroBoss";
import Category from "../category/Category";
import ChefRecommends from "../chefRecommends/ChefRecommends";
import FeaturedItem from "../featured/FeaturedItem";
import MenuItems from "../menuItems/MenuItems";
import Reviews from "../reviews/Reviews";



export default function Home() {
  return (
    <div> 

            

        <Banner></Banner>
        <Category></Category>
        <BistroBoss></BistroBoss>
        <MenuItems></MenuItems>
        <ChefRecommends></ChefRecommends>
        <FeaturedItem></FeaturedItem>
        <Reviews></Reviews>

    </div>
  )
}
