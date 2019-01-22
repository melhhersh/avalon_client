import SocketIOClient from 'socket.io-client';

let SocketConnection
export function establishSocket() {
    SocketConnection = SocketIOClient('http://172.16.21.94:5000');
    return SocketConnection
}
