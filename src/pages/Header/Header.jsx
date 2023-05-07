import css from "./Header.module.css";
import { NavLink, Outlet } from "react-router-dom";
import Logo from "../../images/companyLogo.png";
const Header = () => {
  return (
    <>
      <div className={css.container}>
        <img src={Logo} alt="logo" className={css.image} />
        <NavLink className={css.link} to={"/"}>
          Home
        </NavLink>
        <NavLink className={css.link} to={"tweets"}>
          Tweets
        </NavLink>
      </div>
      <Outlet />
    </>
  );
};
export default Header;
