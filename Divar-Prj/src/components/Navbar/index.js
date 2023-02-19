import El from "../../library/El"
import MenuScroll from "./Menu-scroll-X/ParentMenu";
import Searchbox from "./Searchbox/index"

const Navbar =()=>{
    return(
        El({
            element:"nav",
            className:"flex flex-col  shadow-md",
            child:[Searchbox() ,MenuScroll()]
        })
    )
}
export default Navbar;