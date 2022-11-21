const {Schema, model} =  require('mongoose')

const newSchema = Schema({
    title: {
       type: String,
       minlength : 3,
       maxlength : 200,
       require : true
    },
    description : {
       type : String,
       require : true,
       minlength : 3,
       maxlength : 3000 
    }
},
{timestamps: true})

const todoModel = model('todo', newSchema);

module.exports = todoModel