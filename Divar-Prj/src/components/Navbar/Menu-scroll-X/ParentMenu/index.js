import El from "../../../../library/El";
import EachDiv from "./../../EachDiv/index";

const MenuScroll = () => {
  return El({
    element: "div",
    className: "menu-scroll-x overflow-x-auto w-full lg:hidden ",
    child: El({
      element: "div",
      className: "flex p-3 gap-3 text-ms items-center w-full flex-shrink-0",
      child: EachDiv(),
    }),
  });
};
export default MenuScroll;

{/* <div class="flex-shrink-0"></div>; */}
