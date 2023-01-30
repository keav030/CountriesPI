import CardsContainer from "../../components/CardsContainer/CardsContainer"
import { useEffect, useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import { getActivities, getCountries } from "../../redux/actions"
import NavBar from "../../components/NavBar/NavBar";
import Pagination from "../../components/Pagination/Pagination";
import style from "./Home.module.css"


const Home = () => {

    const dispatch = useDispatch()
        
    useEffect(()=>{
        dispatch(getCountries())
        dispatch(getActivities())
    },[dispatch])

    const countriesNotFound ="No se encontro ningun pais con ese nombre"

    const countries = useSelector(state=>state.countries)
    const orderState = useSelector(state=>state.order)
    let currentCountries = []
    const tenCountries = countries.slice(9, countries.length)
    
    const currentPage = useSelector(state=> state.currentPage)
    const [countriesPerPage] = useState(10)
    
    let lastIndex = (currentPage-1) * countriesPerPage
    let firtsIndex = lastIndex - countriesPerPage
    
    if(currentPage === 1){
        currentCountries = countries.slice(0,9)
    }else{
        currentCountries = tenCountries.slice(firtsIndex, lastIndex) 
    }



    return(
        <div className={style.main}>
            <NavBar></NavBar>
            {countries===countriesNotFound && <h1>{countriesNotFound}</h1>}
            {countries!==countriesNotFound && <CardsContainer countries={currentCountries}/>}
            {countries!==countriesNotFound && <Pagination 
                countriesPerPage={countriesPerPage}
                countries={tenCountries.length}
            />}
            

        </div>
    )
}

export default Home