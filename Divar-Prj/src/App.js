import Body from "./components/Body";
import Mainperent from "./components/layout";
import Navbar from "./components/Navbar";
import El from "./library/El";
const App = () => {
  const app = El({
    element: "div",
    className: "parent",
    child: [Navbar(), Body()],
  });
  return Mainperent(app);
};

export default App;
