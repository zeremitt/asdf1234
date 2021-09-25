const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const { graphqlHTTP } = require('express-graphql')
dotenv.config()

//Importacion de rutas
const schema = require('./graphql/schemas/guessSchema')

//App initialization
const app = express()
const PORT = process.env.PORT

//Graphql Middleware
app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: false
}))

/********** JSON parser middleware **********/
app.use(express.urlencoded({ extended: false }));
app.use(express.json())

//DB connection
mongoose.connect(process.env.MONGO_DB_CONN, { autoIndex: false })
    .then(() => console.log('MongoDB connected at ' + process.env.MONGO_DB_CONN))
    .catch(err => console.log(err))

//Server listener initialization
app.listen(PORT, () => {
    console.log('Listening to port ' + PORT);
})