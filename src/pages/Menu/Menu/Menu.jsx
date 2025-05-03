import Cover from "../../shared/cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle";
import MenuCategory from "../manuCategory/MenuCategory";

export default function Menu() {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Cover img={menuImg} title="Our menu"></Cover>

      <SectionTitle
        subHeading={"Don't miss"}
        heading={"Today's offer"}
      ></SectionTitle>

      {/* offered menu items */}

      <MenuCategory items={offered}></MenuCategory>

      {/* desset items */}

      <MenuCategory
        items={dessert}
        title="dessert"
        img={dessertImg}
      ></MenuCategory>

      {/* pizza  */}

      <MenuCategory items={pizza} title="pizza" img={pizzaImg}></MenuCategory>

      {/* salad */}
      <MenuCategory items={salad} title="salad" img={saladImg}></MenuCategory>

      {/* soups */}

      <MenuCategory items={soup} title="soups" img={soupImg}></MenuCategory>
    </div>
  );
}
