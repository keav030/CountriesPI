import CardsContainer from "../../components/CardsContainer/CardsContainer"
import { useEffect, useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import { getCountries } from "../../redux/actions"
import NavBar from "../../components/NavBar/NavBar";
import Pagination from "../../components/Pagination/Pagination";


const Home = () => {

    const dispatch = useDispatch()
    

    useEffect(()=>{
        dispatch(getCountries())
    },[dispatch])

    const countries = useSelector(state=>state.countries)
    
    const currentPage = useSelector(state=> state.currentPage)
    const [countriesPerPage] = useState(10)

    const tenCountries = countries.slice(9, countries.length)
    let currentCountries = []
    
    let lastIndex = (currentPage-1) * countriesPerPage
    let firtsIndex = lastIndex - countriesPerPage
    

    if(currentPage === 1){
        currentCountries = countries.slice(0,9)
    }else{
        currentCountries = tenCountries.slice(firtsIndex, lastIndex) 
    }


    return(
        <div>
            <NavBar></NavBar>
            <Pagination 
                countriesPerPage={countriesPerPage}
                countries={tenCountries.length}
            />
            <CardsContainer countries={currentCountries}/>
        </div>
    )
}

export default Home