import { useDispatch} from "react-redux";
import { orderByProp, setPage } from "../../redux/actions"

const CountrySort = () => {


    const dispatch = useDispatch()

    const changeHandler = (event) => {
        event.preventDefault()
        const value = event.target.value.split(",")
        dispatch(orderByProp(value[0],value[1]))
        dispatch(setPage(1))
    }


    return(
        <div>
            <select onChange={changeHandler}>
                <option option="true" hidden>Ordenar Por</option>
                <optgroup label="Orden Alfabetico">
                    <option value="asc,name">A - Z</option>
                    <option value="desc,name">Z - A</option>   
                </optgroup>
                <optgroup label="Poblacion">
                    <option value="asc,population">Menor a Mayor</option>
                    <option value="desc,population">Mayor a Menor</option>
                </optgroup>
            </select>

        </div>
    )
}

export default CountrySort
