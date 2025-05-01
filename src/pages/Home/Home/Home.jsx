import Banner from "../banner/Banner";
import BistroBoss from "../bistroBoss/BistroBoss";
import Category from "../category/Category";
import ChefRecommends from "../chefRecommends/ChefRecommends";
import FeaturedItem from "../featured/FeaturedItem";
import MenuItems from "../menuItems/MenuItems";
import Reviews from "../reviews/Reviews";
import { Helmet } from 'react-helmet-async';


export default function Home() {
  return (
    <div> 

            <Helmet>
                <title>GreenCafe | Home</title>
            </Helmet>

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
