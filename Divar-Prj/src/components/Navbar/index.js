import El from "../../library/El"
import Searchbox from "./Searchbox/index"

const Navbar =()=>{
    return(
        El({
            element:"nav",
            className:"flex flex-col  shadow-md",
            child:[Searchbox()],
        })
    )
}
  export default Navbar;