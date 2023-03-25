const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

const { getInspire, signUp } = require("./controller");

app.get("/api/inspire", getInspire);

app.post("/api/sign-up", signUp);





const PORT = 5150

app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`)
})