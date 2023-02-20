import El from "../../library/El"
import Navbar from "../Navbar";

const Mainperent= ()=>{
   return( El({
        element:"div",
        className:"",
        child:[Navbar()]
    }))
}
export default Mainperent;