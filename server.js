const express = require('express');
const { Server } = require('ws');

const PORT = process.env.PORT || 8080;
const INDEX = 'public/index.html';
const APPINDEX = 'appWeb-build/index.html';

const server = express()
  .use(express.static('public'))
  .use(express.static('appWeb-build'))
  .get('/app', (req, res) => res.sendFile(APPINDEX, { root: __dirname }))
  .get('/', (req, res) => res.sendFile(INDEX, { root: __dirname }))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));

const wss = new Server({ server });

wss.on('connection', (ws) => {
  console.log('Client connected');
  ws.on('close', () => console.log('Client disconnected'));
});

setInterval(() => {
  wss.clients.forEach((client) => {
    client.send(new Date().toTimeString());
  });
}, 1000);
