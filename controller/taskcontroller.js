const taskmodel = require('../model/todomodel')

//add a task
exports.addNewTask = (req, res) => {
    const newTask = new taskmodel(req.body);
    newTask.save()
    .then(
        () => {
            res.status(200).json({
                message: "task added successfully!",
                newTask
            })
        }
    ).catch(
        (err) => {
            res.status(500).json({ message: err })
        }
    )
}

//get all tasks

exports.getAllTasks = (req, res) => {
    taskmodel.find()
    .then(
        (task) => {
            res.status(200).json(task)
        }
    ).catch(
        (err) => {
            res.status(500).json({ message: err })
        }
    )
}


//update task

exports.updateTask = (req, res) => {
    taskmodel.findByIdAndUpdate({_id:req.params.id}, req.body, (err, task) => {
        if (err) {
            return res.status(500).json({ message: err })
        } else if (!task){
            return res.status(404).json({ message: "task not found" });
        } else {
            task.save((err, savedTask) => {
                if (err) {
                    return res.status(400).json({ message: err})
                } else {
                    return res.status(200).json({ message: "task updated successfully!", task })
                }
            });
        }
    })
}

//delete a task

exports.deleteTask = (req, res) => {
   taskmodel.findByIdAndDelete(req.params.id)
   .then(
        res.json({message: "task deleted successfully!"})
    ).catch(
        (err) => {
            res.status(500).json({ message: err })
        }
    )  
}