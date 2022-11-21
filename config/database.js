const mongoose = require('mongoose');
require('dotenv').config()


function connect() {
    
    mongoose.connect(process.env.MONG_DB_CONNECT, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        
    }
);

const db = mongoose.connection;
db.on('connected', () => {
    console.log("connected to mongoDb successfully");
})

db.on('error', () => {
    console.log("error connecting to MongoDb!");
})
}
module.exports = connect