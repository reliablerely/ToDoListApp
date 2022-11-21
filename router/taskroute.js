const express = require('express')
const router = express.Router()
const controller = require('../controller/taskcontroller')

router.post('/addtask', controller.addNewTask)
        .get('/', controller.getAllTasks)
        .put('/task/:id', controller.updateTask)
        .delete('/:id', controller.deleteTask)


module.exports = router