const { getAllCountries, getContryById, getUserByName } = require("../controllers/countriesController")

const getCountriesHandler = async (req, res) => {
    const { name } = req.query
    try {
        let countries
        if(name){
            countries = await getUserByName(name)
        }else{
            countries = await getAllCountries()
        }
       
        countries.length == 0 ? 
            res.send("No se encontro ningun pais con ese nombre") :
            res.send(countries)

    } catch (error) {
        res.send(error)
    }
}

const getCountryHandler = async (req, res) => {
    const { id } = req.params
    try {
        const country = await getContryById(id)
        res.status(200).send(country)
    } catch (error) {
        res.send(error)
    }
}
module.exports = {
    getCountriesHandler,
    getCountryHandler
}