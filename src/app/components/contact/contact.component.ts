import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from "rxjs";
import { UiService } from "../../services/ui.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
  
export class ContactComponent implements OnInit {
  @Output() onSendTask: EventEmitter<any> = new EventEmitter();
  name!: string;
  email!: string;
  reminder!: string;
  subscription: Subscription;
  showSend: boolean = false;

  constructor(private uiService: UiService) { 
    this.subscription = this.uiService.onToggleSend().subscribe((value) => (this.showSend = value));
   }

  ngOnInit(): void {
  }

  onSend() {
    if (!this.email) {
      alert('Please put your email');
      return;
    }
    this.onSendTask.emit();
    
    this.name = '';
    this.email = '';
    this.reminder = '';
  }
}
