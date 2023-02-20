import El from "../../../library/El";
import Aside from "./Aside";
import Cards from "./Cards";

const Main = () => {
  return El({
    element: "div",
    className: " flex",
    child: [Aside(), Cards()],
  });
};
export default Main;
