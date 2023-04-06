const express = require("express");
const { createServer } = require("http");

const app = express();
const httpServer = createServer(app);

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/TWCaD.html');
});
app.get('/bosanska', (req, res) => {
    res.sendFile(__dirname + '/public/Bosanska_Artiljerija.mp3');
});

httpServer.listen(process.env.PORT || 3333);
