import El from "../../../../library/El";
import EachDiv from "../../EachDiv";


const MenuScroll = () => {
  return El({
    element: "div",
    className: "menu-scroll-x overflow-x-auto w-full",
    child: EachDiv(),
  });
};
export default MenuScroll;
