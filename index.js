import cors from "cors"
import "dotenv/config"
import express from "express"
import helmet from "helmet"
import { checkRequestTimeAndDay } from "./middleware/checkRequest.js"
const app = express()

// middlewares
app.use(cors())
app.use(helmet())
app.use(express.json())
app.use(express.static("./static"))

app.set("view engine", "pug")
app.set("views", "./views")

app.use(checkRequestTimeAndDay)

app.get("/", (req, res) => {
    res.render("home")
})
app.get("/service", (req, res) => {
    res.render("service")
})
app.get("/contact", (req, res) => {
    res.render("contact")
})
app.listen(process.env.PORT, () => {
    console.log("Server is running on port", process.env.PORT)
})