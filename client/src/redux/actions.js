import axios from "axios"

export const GET_COUNTRIES = "GET_COUNTRIES"
export const GET_COUNTRY = "GET_COUNTRY"
export const CHANGE_PAGE_NUMBER = "CHANGE_PAGE_NUMBER"
export const FILTER_BY_CONTINENT = "FILTER_BY_CONTINEN"

export const getCountries = () => {
    return async function (dispatch) {
        const apiData = await axios.get("http://localhost:3001/countries")
        const countries = apiData.data
        dispatch({type: GET_COUNTRIES, payload: countries})
    }
}


export const getCountry = (id) => {
    return async function (dispatch) {
        const apiData = await axios.get(`http://localhost:3001/countries/${id}`)
        const country = apiData.data
        dispatch({type: GET_COUNTRY, payload: country})
    } 
}

export const setPage = (pageNumber) => {
    return { type: CHANGE_PAGE_NUMBER, payload: pageNumber }
}

export const filterByContinent = (continent) => {
    return { type: FILTER_BY_CONTINENT, payload: continent }
}