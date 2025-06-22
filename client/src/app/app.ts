import { Component, inject, OnInit, ChangeDetectorRef } from '@angular/core';
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
  public messages: { username: string; message: string }[] = [];

  private readonly chatService = inject(ChatService);
  private readonly cdr = inject(ChangeDetectorRef);

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
      this.messages.push({ username: message['username'], message: message['message'] });
      this.cdr.detectChanges();
      console.log('Messages', this.messages);
    });
  }
  sendMessage(): void {
    console.log('Sending message:', this.currentMessage);
    if (this.currentMessage.trim()) {
      const data = { username: this.username, message: this.currentMessage };
      this.chatService.sendMessage(data);
      this.currentMessage = '';
      console.log('Message sent:', this.currentMessage);
    }
  }
}
