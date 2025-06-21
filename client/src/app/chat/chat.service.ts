import {Injectable} from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
    private socket: Socket;
    constructor () {
        this.socket = io('http://localhost:3000'); // Adjust the URL as needed
    }

    sendMessage(message: string): void {
        this.socket.emit('message', message);
    }

    getMessages(): Observable<string> {
        return new Observable<string>(observer => {
            this.socket.on('message', (message: string) => {
                observer.next(message);
            });
        });
    }
}