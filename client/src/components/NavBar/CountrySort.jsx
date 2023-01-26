


const CountrySort = () => {


    

    const changeHandler = (event) => {
        //const value = event.target.value
        
    }

    return(
        <div>
            <select onChange={changeHandler}>
                <option>Ordenar</option>
                <option value="asc">A - Z</option>
                <option value="desc">Z - A</option>
            </select>
        </div>
    )
}

export default CountrySort
