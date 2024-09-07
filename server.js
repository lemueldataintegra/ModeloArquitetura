require('dotenv').config()
const port = process.env.PORT || 5000;
const cors = require('cors')
const express = require('express')
const app = express();


//configure cors
app.use(cors({
    origin: "*",
    methods: [
        "GET",
        "POST",
        "DELETE",
        "PUT",
        "PATCH"
    ],
    allowedHeaders: ['Content-Type', 'Authorization']
}))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static("public"))


//Rotas
const userRouter = require('./src/routes/UserRoutes')

app.use("/api/user", userRouter)



//start server
app.listen(port, () => {
    try {
        console.log(`Server is online at port ${port}`)
    } catch (error) {
        console.error(error)
    }
})