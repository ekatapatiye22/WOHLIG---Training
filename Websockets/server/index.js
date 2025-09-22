import express from 'express';
import { WebSocketServer } from 'ws';

const app = express();
const PORT = 8080;

const server = app.listen(PORT, () => {
    console.log('Server is listening...');
    })

const wss = new WebSocketServer({ server });

wss.on('connection', (ws) => {
    ws.on('message',(data)=>{
        console.log('data from client %s: ',data);
        ws.send('Thank you for your message');
    });    
});