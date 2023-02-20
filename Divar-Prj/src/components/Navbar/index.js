import El from "../../library/El";
import MenuScroll from "./Menu-scroll-X/ParentMenu";
import ResponsiveMenu from "./Rsponsive-Nav";
import Searchbox from "./Searchbox/index";

const Navbar = () => {
  return El({
    element: "header",
    className: " ",
    child:El({
      element:"nav",
      className: " flex flex-col",
      child: [Searchbox(), MenuScroll(), ResponsiveMenu()],
    })
  });
};
export default Navbar;
