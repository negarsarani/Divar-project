import El from "../../library/El";
import MenuScroll from "./Menu-scroll-X/ParentMenu";
import ResponsiveMenu from "./Rsponsive-Nav";
import Searchbox from "./Searchbox/index";

const Navbar = () => {
  return El({
    element: "nav",
    className: "flex flex-col  shadow-md fixed top-0 bg-neutral-50",
    child: [Searchbox(), MenuScroll(), ResponsiveMenu()],
  });
};
export default Navbar;

{
  /* <div class="fixe"></div> */
}
