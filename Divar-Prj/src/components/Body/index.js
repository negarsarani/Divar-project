import El from "../../library/El";
import Footer from "./Footer";
import Main from "./Main";

const Body = () => {
  return El({
    element: "div",
    className: "xl:px-10 lg:px-5 px-2 mt-44 lg:mt-20 ",
    child: [Main(), Footer()],
  });
};
export default Body;
