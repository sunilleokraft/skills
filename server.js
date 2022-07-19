const express = require("express");
const router = express.Router()

const PORT = 3000;
const app = express();
const data = require("./Data/skills.json")
//Routes
const skillsRoute = require("./Routes/skillRoute.js")

//Middleware
app.use(express.json())

app.use("/",skillsRoute)

app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`)
})

