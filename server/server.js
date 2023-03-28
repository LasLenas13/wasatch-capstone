require('dotenv').config()
const express = require('express')
const cors = require('cors')

const {PORT} = process.env

const app = express()

app.use(express.json())
app.use(cors())

const { getInspire, signUp } = require("./controller");

app.get("/api/inspire", getInspire);

app.post("/api/sign-up", signUp);






app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`)
})