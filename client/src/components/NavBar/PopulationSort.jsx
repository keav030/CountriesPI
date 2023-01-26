

const PopulationSort = () => {

    
    

    const changeHandler = (event) => {
        //const value = event.target.value
        
    }


    return(
        <div>
            <select onChange={changeHandler} name="select">
                <option value="">Poblacion</option>
                <option value="asc">Menor a Mayor</option>
                <option value="desc">Mayor a Menor</option>
            </select>
        </div>
    )
}

export default PopulationSort