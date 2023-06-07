import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css'

const NavBar = () => {
  return (
    <header>
        <h1>Star Wars</h1>
        <ul>
            <li>
                Lightsabers
            </li>
            <li>
                Action Figures
            </li>
            <li>
                Collectibles
            </li>
            <li>
                Books and Comics
            </li>
        </ul>
        <CartWidget/>
    </header>
  );
};

export default NavBar;
