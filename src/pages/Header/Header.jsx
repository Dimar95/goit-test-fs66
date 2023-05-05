import { NavLink } from "react-router-dom";
import { CiEdit } from "react-icons/ci";
import { IconContext } from "react-icons";
const Header = () => {
  return (
    <div>
      <IconContext.Provider value={{ color: "blue", width: "50px" }}>
        <CiEdit />
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"tweets"}>Tweets</NavLink>
      </IconContext.Provider>
    </div>
  );
};
export default Header;
