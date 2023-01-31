import { useDispatch } from "react-redux";
import { filterByContinent, setPage } from "../../redux/actions"
import style from "./Selector.module.css"

const ContinentSelector = () => {

    const dispatch = useDispatch()

    const continentSelectorHandler = (event) =>{
        const value = event.target.value
        dispatch(filterByContinent(value))
        dispatch(setPage(1))
    }
    
    return(
        <div>
            <select className={style.select} onChange={continentSelectorHandler} name="continents">
                <option option="true" hidden>Continente</option>
                <option value="All">Todos</option>
                <option value="Africa">Africa</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europa</option>
                <option value="Antarctica">Antarctica</option>
                <option value="North America">Norte America</option>
                <option value="South America">Sudamerica</option>
                <option value="Oceania">Oceania</option>
            </select>
        </div>
    )
}

export default ContinentSelector