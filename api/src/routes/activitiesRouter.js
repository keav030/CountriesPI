const { Router } = require("express")
const { getActivitiesHandler } = require("../handlers/activitiesHandler")
const activitiesRouter = Router()

activitiesRouter.get("/", getActivitiesHandler)


module.exports = activitiesRouter