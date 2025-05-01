import { Helmet } from 'react-helmet-async';
import Cover from '../../shared/cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg';

export default function Menu() {
  return (
    <div>
    <Helmet>
        <title>GreenCafe | Menu</title>
    </Helmet>

    <Cover img={menuImg}></Cover>

    </div>
  )
}
