const { Country } = require('../db.js')

const getAllCountries = async () => {
    const countries = await Country.findAll()

    return countries
}

const getContryById = async (id) => {
    console.log("id en controler: ", id)
    const country = await Country.findByPK("POL")
    console.log("Country: ", country)
    return country
}






///////////////////////////////////////
const setCountriesDB = async () => {
    let response = await fetch('https://restcountries.com/v3/all')
    let data = await response.json()
    data.map(c => {
        Country.create({
            id: c.cca3,
            name: c.name.common,
            flag: c.flags[0],
            continent: c.continents[0],
            capital: c.capital ? c.capital[0] : c.capital = 'Capital Not Found',
            subregion: c.subregion,
            area: c.area,
            population: c.population
        })
    })
    console.log(`Countries database has been loaded`)  
}
///////////////////////////////////////
module.exports = {
    getAllCountries,
    getContryById,
    setCountriesDB
}