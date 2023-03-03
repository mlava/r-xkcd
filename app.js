import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';
const app = express();
var port = process.env.PORT || 3000;
app.use(cors());

var corsOptions = {
    origin: 'https://roamresearch.com',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.get('/', cors(corsOptions), (req, res) => {
    fetch("https://xkcd.com/info.0.json")
        .then(response => response.json())
        .then(json => {
            res.json(json);
        })
        .catch(error => console.log('error', error));
})

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})