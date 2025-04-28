import Banner from "../banner/Banner";
import Category from "../category/Category";
import FeaturedItem from "../featured/FeaturedItem";
import MenuItems from "../menuItems/MenuItems";


export default function Home() {
  return (
    <div> 

        <Banner></Banner>
        <Category></Category>
        <MenuItems></MenuItems>
        <FeaturedItem></FeaturedItem>

    </div>
  )
}
