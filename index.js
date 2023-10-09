const express = require('express')
const app = express()


app
    .use(express.urlencoded({ extended: true }))
    .use(express.json())


app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Yo!')
})

app
    .use(express.urlencoded({ extended: true }))
    .use(express.json())



const smsData = []
app.post('/api/receivesms', async (req, res) => {
    try {
        const body = await req.body;
        console.log(body)
        smsData.push(body)
        return res.status(200).json({ body })
    }
    catch (err) {
        return res.status(500).json({
            success: false,
            msg: "some error occured returning sms"
        })
    }
});


app.get('/api/receivesms', async (req, res) => {
    try {
        return res.status(200).json({ sms: smsData.reverse() })
    }
    catch (err) {
        return res.status(500).json({
            success: false,
            msg: "some error occured returning sms data"
        })
    }
});


app.listen(process.env.PORT || 3000)
