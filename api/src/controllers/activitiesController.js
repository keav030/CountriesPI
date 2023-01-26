const { Activity } = require("../db")

const createActivity = async (name, dificulty, duration, season, countryId) =>{
    const newActivity = await Activity.create({name, dificulty, duration, season})
    await newActivity.addCountries(countryId)
    return newActivity
}

module.exports = {
    createActivity
}