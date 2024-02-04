import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo_principal.png";

const Navbar = () => {
  return (
    <nav
      className=" text-slate-600 flex  text-lg/2 items-center w-full justify-between py-1 px-2 font-medium  "
      style={{ backgroundColor: "rgba(255,255,255,0.8)" }}
    >
      <img className="size-12" src={logo} alt="" />
      <ul className="flex gap-3">
        <NavLink
          to={"/"}
          className="transition ease-in-out delay-75 hover:scale-110  duration-300"
        >
          <li className="bg-orange-900/90 text-slate-200 p-2 rounded uppercase hover:bg-orange-800/60 hover:text-slate-100 border-2 border-orange-800/60 border-solid ">
            Inicio
          </li>
        </NavLink>
        <NavLink
          to={"/list"}
          className="transition ease-in-out delay-75 hover:scale-110  duration-300"
        >
          <li className="bg-orange-900/90 text-slate-200 p-2 rounded uppercase hover:bg-orange-800/60 hover:text-slate-100 border-2 border-orange-800/60 border-solid ">
            Lista de agregados
          </li>
        </NavLink>
      </ul>
    </nav>
  );
};
export default Navbar;
