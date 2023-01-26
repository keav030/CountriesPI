const { createActivity } = require("../controllers/activitiesController")

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

module.exports = {
    createActivitiesHandler
}