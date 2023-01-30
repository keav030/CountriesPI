const { createActivity, getActivities } = require("../controllers/activitiesController")

const createActivitiesHandler = async (req, res) => {
    const {name, dificulty, duration, season, countryId } = req.body
    console.log(countryId)
    try {
        const newActivity = await createActivity(name, dificulty, duration, season, countryId)
        res.status(200).send(newActivity)
    } catch (error) {
        res.send(error)
    }
}


const getActivitiesHandler = async (req, res) => {
    try {
        const activities = await getActivities()
        res.send(activities)
    } catch (error) {
        res.send("La actividad no se ha podido crear")
    }
}


module.exports = {
    createActivitiesHandler,
    getActivitiesHandler
}