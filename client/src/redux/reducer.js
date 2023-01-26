import { GET_COUNTRIES, GET_COUNTRY, FILTER_BY_CONTINENT, CHANGE_PAGE_NUMBER} from "./actions";

const initialState = {
    countries: [],
    constCountries: [],
    country: {},
    currentPage: 1
}

const rootReducer = (state=initialState, action) => {
    switch (action.type) {
        case GET_COUNTRIES:
            return {...state, countries: action.payload, constCountries: action.payload }
         
        case GET_COUNTRY:
            return {...state, country: action.payload}   

        case CHANGE_PAGE_NUMBER: 
        return {...state, currentPage: action.payload}   

        case FILTER_BY_CONTINENT:
            const allCountries = state.constCountries
            const contientFiltered = action.payload === "All"
                ? allCountries : allCountries.filter(elem => elem.continent === action.payload)

            return {...state, countries: contientFiltered}  

        default:
            return {...state}
    }
}

export default rootReducer