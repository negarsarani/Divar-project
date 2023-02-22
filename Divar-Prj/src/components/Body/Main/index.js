import El from "../../../library/El";
import Aside from "./Aside";
import Cards from "./Cards";

const Main = () => {
  return El({
    element: "div",
    className: " flex w-full mb-20",
    child: [Aside(), Cards()],
  });
};
export default Main;
