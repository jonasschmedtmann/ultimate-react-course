import { NavLink } from "react-router-dom";
import style from "./PageNav.module.css"
import Logo from "./Logo"

function PageNav() {
  return (
    <nav className={style.nav}>
      <Logo />
      <ul>
        <li>
          <NavLink to="/Product">Product</NavLink>
        </li>
        <li>
          <NavLink to="/Pricing">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/Login" className={style.ctaLink}>Login</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
