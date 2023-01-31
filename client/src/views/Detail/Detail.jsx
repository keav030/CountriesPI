import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import style from "./Detail.module.css"

const Detail = () => {
    
    const country = useSelector(state=>state.country)
    console.log()
    return(
        <div className={style.mainDetailContainer}>
            <Link to="/home">
                <button className={style.buttonDetail}>Volver</button>
            </Link>
            <div className={style.infoContainer}>
                <p className={style.countryName}>{country.name}</p>
                <img src={country.flag} alt="country flag" height="300" />
                <p>Continente: {country.continent}</p>
                <p>Código: {country.id}</p>
                <p>Capital: {country.capital}</p>
                <p>Subregión: {country.subregion}</p>
                <p>Área: {country.area} Km2</p>
                <p>Población: {country.population} Habitantes</p>
                <div className={style.activitiesDetailMain}>
                    <p>Actividades</p>
                    <div className={style.activitiesContainer}>
                        {country.activities && country.activities.map( (e,i) => (
                            <div className={style.activtiesDetail}>
                                <p className={style.activityName}>{e.name}</p>
                                <p>Dificultad: {e.dificulty}</p>
                                <p>Duracion: {e.duration}</p>
                                <p>Temporada: {e.season}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            
            
        </div>
    )
}

export default Detail;