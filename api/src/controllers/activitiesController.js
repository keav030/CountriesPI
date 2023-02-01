const { Activity } = require("../db")

const createActivity = async (name, dificulty, duration, season, countryId) =>{
    // const newActivity = await Activity.create({name, dificulty, duration, season})
    // await newActivity.addCountries(countryId)
    // return newActivity

    const [activity, created] = await Activity.findOrCreate({
        where :{ name },
        defaults: {name, dificulty, duration, season}
    })
    if(created){
        await activity.addCountries(countryId) 
        return "Actividad creada con exito"
    }else{
        return "Esta actividad ya esta en la base de datos"
    }
}

const getActivities = async () => {
    const activities = await Activity.findAll()
    return activities
}

module.exports = {
    createActivity,
    getActivities
}