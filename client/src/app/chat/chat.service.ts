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

    sendMessage(message: Record<string, string>): void {
        this.socket.emit('message', message);
    }

    getMessages(): Observable<Record<string, any>> {
        return new Observable<Record<string, any>>(observer => {
            this.socket.on('message', (message: Record<string, any>) => {
                observer.next(message);
            });
        });
    }
}