import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchCountries, setPage } from "../../redux/actions"
import style from "./SearchBar.module.css"

const SearchBar = () => {

    const dispatch = useDispatch()

    const [value, setValue] = useState("")

    const submitHandler = (event) => {
        event.preventDefault()
        dispatch(searchCountries(value))
        dispatch(setPage(1))  
        setValue("")
    }

    const changeHandler = (event) => {
        setValue(event.target.value)
    }

    return(
        <form onSubmit={submitHandler}>
            <input id={style.searchInput} name="countryName" type="text" onChange={changeHandler} value={value}></input>
            <button id={style.searchButton}type="submit">Buscar</button>
        </form> 
    )
}

export default SearchBar