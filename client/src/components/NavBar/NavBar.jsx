import ActivitySelector from "./ActivitySelector"
import ContinentSelector from "./ContinentSelector"
import CountrySort from "./CountrySort"
import style from "./NavBar.module.css"
import PopulationSort from "./PopulationSort"
import SearchBar from "./SearchBar"

const NavBar = () => {
    return(
        <div className={style.mainNavBar}>
            <SearchBar></SearchBar>
            <ContinentSelector></ContinentSelector>
            <ActivitySelector></ActivitySelector>
            <CountrySort></CountrySort>
            <PopulationSort></PopulationSort>
        
        </div>
    )
}

export default NavBar