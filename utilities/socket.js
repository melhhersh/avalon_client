import SocketIOClient from 'socket.io-client';

let SocketConnection
export function establishSocket() {
    SocketConnection = SocketIOClient('http://192.168.0.111:5000');
    return SocketConnection
}
