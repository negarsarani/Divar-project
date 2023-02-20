import El from "../../library/El";
import MenuScroll from "./Menu-scroll-X/ParentMenu";
import ResponsiveMenu from "./Rsponsive-Nav";
import Searchbox from "./Searchbox/index";

const Navbar = () => {
  return El({
    element: "nav",
    className: " fixed top-0 ",
    child:El({
      element:"div",
      className: " flex flex-col",
      child: [Searchbox(), MenuScroll(), ResponsiveMenu()],
    })
  });
};
export default Navbar;

