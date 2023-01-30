const { Country, Activity } = require('../db.js')
const { Op } = require("sequelize")

const getAllCountries = async () => {
    const countries = await Country.findAll({include: {model: Activity}})

    return countries
}

const getContryById = async (id) => {
    const country = await Country.findOne({where: {id: id}, include: {model: Activity}})
    if(!country)return "Country not found"
    return country
}

const getUserByName = async (name) => {
    const countries = await Country.findAll({where: {name: { [Op.iLike]: `%${name}%`}}})
    return countries
}




///////////////////////////////////////
const setCountriesDB = async () => {
    const verify = await Country.count()
    if(verify==0){
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
        console.log(`Countries database has been loaded!`)  
    }else{
        console.log(`Countries already loaded`)
    }
    
}
///////////////////////////////////////
module.exports = {
    getAllCountries,
    getContryById,
    getUserByName,
    setCountriesDB
}