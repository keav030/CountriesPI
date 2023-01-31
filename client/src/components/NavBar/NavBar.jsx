import ActivitySelector from "./ActivitySelector"
import ContinentSelector from "./ContinentSelector"
import CountrySort from "./CountrySort"
import style from "./NavBar.module.css"
import SearchBar from "./SearchBar"

const NavBar = () => {
    return(
        <div className={style.mainNavBar}>
            <ContinentSelector></ContinentSelector>
            <ActivitySelector></ActivitySelector>
            <CountrySort></CountrySort>
        </div>
    )
}

export default NavBar