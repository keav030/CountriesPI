import React from "react"
import style from "./Pagination.module.css"
import { useDispatch, useSelector} from "react-redux";
import { setPage } from "../../redux/actions"


const Pagination = ({countriesPerPage, countries}) => {

    const dispatch = useDispatch()
    const currentPage = useSelector(state=> state.currentPage)

    const pageNumbers = []
    
    for (let i = 0; i <= Math.ceil(countries/countriesPerPage); i++) {
        pageNumbers.push(i+1)
        
    }


    const paginated = (pageNumber) => {
        dispatch(setPage(pageNumber))
    }

    const nextPage = (max) => {  
        if(currentPage<max) dispatch(setPage(currentPage+1))
    }
    const prevPage = () => {
        if(currentPage>1) dispatch(setPage(currentPage-1)) 
    }

    
    const next = ">>"
    const prev = "<<"
    
    
    return(
        <nav className={style.mainPagination}>
            <ul>
                <button id={style.moveLeft} className={style.move} onClick={() => prevPage()}>{prev}</button>
                {pageNumbers && 
                pageNumbers.map((number, index) => (
                    <button
                        
                        key = {index}
                        onClick={() => paginated(number)}
                        className={number === currentPage ? style.active : style.default}
                    >{number}</button>
                ))}
                <button id={style.moveRight} className={style.move} onClick={() => nextPage(pageNumbers.length)}>{next}</button>
            </ul>
        </nav>
    )
}

export default Pagination

//