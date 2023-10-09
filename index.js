const express = require('express')
const app = express()
app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Yo!')
})


app.post("/api/receivesms", async (req, res, next)=>{
    try {
        const body = await req.json()
        return res.status(200).json({body})
    }
    catch (err) {
        return res.status(500).json({
            success: false,
            msg: "some error occured"
        })
    }
})

app.listen(process.env.PORT || 3000)
