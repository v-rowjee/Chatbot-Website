import io from 'socket.io-client';

const socket = io('http://localhost:5005');


export default class SocketIOServices{
    static sendRequest(message){
        socket.emit('user_uttered', { message: message });
        socket.on('bot_uttered', (data) => {
            console.log(data);
        });
    }
}