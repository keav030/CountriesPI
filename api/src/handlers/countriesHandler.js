const { getAllCountries, getContryById } = require("../controllers/countriesController")

const getCountriesHandler = async (req, res) => {
    try {
        let countries = await getAllCountries()
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