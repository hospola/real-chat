import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ChatService } from './chat/chat.service';

@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected title = 'client';

  public currentMessage: string = '';
  public messages: string[] = [];

  private readonly chatService = inject(ChatService);

  public username: string = '';
  public isUsernameSet: boolean = false;
  setUsername(): void {
    if (this.username.trim()) {
      this.isUsernameSet = true;
      console.log('Username set:', this.username);
    } else {
      console.error('Username cannot be empty');
    }
  }

  ngOnInit(): void {
    this.chatService.getMessages().subscribe(message => {
      this.messages.push(message);
      console.log('App initialized');
    });
  }
  sendMessage(): void {
    console.log('Sending message:', this.currentMessage);
    if (this.currentMessage.trim()) {
      this.chatService.sendMessage(this.currentMessage);
      this.currentMessage = '';
      console.log('Message sent:', this.currentMessage);
    }
  }
}
