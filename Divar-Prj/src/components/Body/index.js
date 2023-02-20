import El from "../../library/El";
import Footer from "./Footer";
import Main from "./Main";

const Body = () => {
  return El({
    element: "div",
    child: [Main(), Footer()],
  });
};
export default Body;
