import { Helmet } from 'react-helmet-async';
import Cover from '../../shared/cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg';
import MenuItems from '../../Home/menuItems/MenuItems';

export default function Menu() {
  return (
    <div>
    <Helmet>
        <title>GreenCafe | Menu</title>
    </Helmet>

    <Cover img={menuImg} title="Our menu"></Cover>
    <MenuItems></MenuItems><Cover img={menuImg} title="Our menu"></Cover>
    <MenuItems></MenuItems><Cover img={menuImg} title="Our menu"></Cover>
    <MenuItems></MenuItems><Cover img={menuImg} title="Our menu"></Cover>
    <MenuItems></MenuItems><Cover img={menuImg} title="Our menu"></Cover>
    <MenuItems></MenuItems>
    

    </div>
  )
}
