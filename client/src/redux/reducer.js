import {    GET_COUNTRIES,
            GET_COUNTRY,
            FILTER_BY_CONTINENT,
            CHANGE_PAGE_NUMBER,   
            ORDER_BY_PROP, 
            SEARCH_COUNTRY,
            GET_ACTIVITIES, 
            FILTER_BY_ACTIVITY} from "./actions";

const initialState = {
    countries: [],
    order: {},
    constCountries: [],
    country: {},
    currentPage: 1,
    activities: []
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

        case ORDER_BY_PROP:
            const key = action.payload.key
            let sorterArr = action.payload.orderType === "asc" ?
                state.countries.sort(function (a , b) {
                    if(a[key] > b[key]) return 1
                    if(b[key] > a[key]) return -1
                    return 0
                }) :
                state.countries.sort(function (a , b) {
                    if(a[key] > b[key]) return -1
                    if(b[key] > a[key]) return 1
                    return 0
                })
            return {...state, countries: sorterArr, order: {key, orderType: action.payload.orderType} }      

        case SEARCH_COUNTRY:
            return {...state, countries: action.payload}      
            
        case GET_ACTIVITIES:
            return {...state, activities: action.payload}

        case FILTER_BY_ACTIVITY:
            const allCountriesAct = state.constCountries
            const activityFiltered = action.payload === "All"
                ? allCountriesAct : allCountriesAct.filter(element =>{
                    let match = false
                    element.activities.forEach(e => {
                        if(e.name===action.payload)match=true   
                    });
                    return match
                })
            return {...state, countries: activityFiltered}      
        
        default:
            return {...state}
    }
}

export default rootReducer



