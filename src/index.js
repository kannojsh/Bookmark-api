const express = require('express')
const app = express()
const port = process.env.PORT || 3000

require('./db/mongoose') //We are not using its object so calling it like this
//Routes are difned in separate file
//Importing the routes for Bookmark


const bookmark=require('./routers/router.bookmark')
app.use(express.json()) // This is a middle function that convert the oncoming json into object 

/*
It would be much nicer if we create a seperate route file and place all our routes into that
*/



//Registering all the routes
app.use(bookmark)


app.listen(port, () => {
    console.log('Server is up on port ' + port)
})
