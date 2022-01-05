var path = require('path');
const express = require('express');
const mockAPIResponse = require('./mockAPI.js');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const { default: axios } = require('axios');

dotenv.config();

console.log(process.env.API_KEY);

const PORT = 8081

const app = express()

const corsOptions = {
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200,
}

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(express.static('dist'))

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    // console.log("ss")
    res.sendFile(path.resolve('src/client/views/index.html'))
})


function parseArticleData(raw) {
    let parsed = {
        text: raw.text,
        "score Tag": raw.score_tag,
        agreement: raw.agreement,
        subjectivity: raw.subjectivity,
        confidence: raw.confidence,
        irony: raw.irony,
    }
    return parsed;
}

app.get("/processed", (req, res, next) => {
    const articleUrl = req.query.url;

    const axiosInstance = axios.create();

    const requestUrl = `https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&lang=en&url=${articleUrl}`;

    axiosInstance.get(requestUrl).then(articleResponse => {
        const rawData = articleResponse.data;
        res.json(parseArticleData(rawData));
    })
})

app.get('/test', function (req, res) {

    res.send(mockAPIResponse)
})

// designates what port the app will listen to for incoming requests
app.listen(PORT, (error) => {
    if (error) throw new Error(error)
    console.log(`Server listening on port ${PORT}!`)
})

module.exports = app;