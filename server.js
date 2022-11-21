const express = require('express')
const connect = require('./config/database')
const routes = require('./router/taskroute')


connect()
const app = express();

app.use(express.json({ extended: false }));


app.use('/', routes)


const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server running on port:${PORT}`));