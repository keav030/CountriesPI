import { useSelector } from "react-redux"

const Detail = () => {
    
    const country = useSelector(state=>state.country)

    return(
        <div>
            Detalle
            <p>{country.name}</p>
            <img src={country.flag} alt="country flag" height="300" />
            <p>{country.continent}</p>
            
        </div>
    )
}

export default Detail;