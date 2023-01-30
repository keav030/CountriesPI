const { Activity } = require("../db")

const createActivity = async (name, dificulty, duration, season, countryId) =>{
    const newActivity = await Activity.create({name, dificulty, duration, season})
    await newActivity.addCountries(countryId)
    return newActivity
}

const getActivities = async () => {
    const activities = await Activity.findAll()
    return activities
}

module.exports = {
    createActivity,
    getActivities
}