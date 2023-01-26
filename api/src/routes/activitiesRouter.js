const { Router } = require("express")
const { createActivitiesHandler } = require("../handlers/activitiesHandler")
const activitiesRouter = Router()

activitiesRouter.post("/", createActivitiesHandler)


module.exports = activitiesRouter