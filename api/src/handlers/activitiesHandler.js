const { createActivity, getActivities } = require("../controllers/activitiesController")

const createActivitiesHandler = async (req, res) => {
    const {name, dificulty, duration, season, countryId } = req.body
    console.log(countryId)
    try {
        const newActivity = await createActivity(name, dificulty, duration, season, countryId)
        res.status(201).send(newActivity)
    } catch (error) {
        res.status(400).send("La actividad no se ha podido crear")
    }
}


const getActivitiesHandler = async (req, res) => {
    try {
        const activities = await getActivities()
        res.status(200).send(activities)
    } catch (error) {
        res.status(400).send(error) 
    }
}


module.exports = {
    createActivitiesHandler,
    getActivitiesHandler
}