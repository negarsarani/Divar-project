import Mainperent from "./components/layout";
import Navbar from "./components/Navbar";
import El from "./library/El" ;
const App = ()=> {
  return( El({
        element:"div",
        className:"parent",
        child:[Navbar()]
    }))
}

export default App;