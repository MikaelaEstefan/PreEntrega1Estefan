import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css'
import { NavLink, Link } from "react-router-dom"

const NavBar = () => {
  return (
    <header>
        <Link to={"/"}>
            <img className="logoSW" src="../../public/pngwing.com.png" alt=""/>
        </Link>
        <nav>
                <ul>
                    <li>
                        <NavLink to={"/categoria/2"}> Lightsabers </NavLink>
                    </li>

                    <li>
                        <NavLink to={"/categoria/3"}> Action Figures </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/categoria/3"}> Collectibles </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/categoria/3"}> Books and Comics </NavLink>
                    </li>
                </ul>
        </nav>
        <CartWidget/>
    </header>
  );
};

export default NavBar;

