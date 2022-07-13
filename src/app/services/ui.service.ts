import { Injectable } from '@angular/core';
import { Observable, Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddTask: boolean = false;
  private showSendTask: boolean = false;
  private subject = new Subject<any>();
  private subject2 = new Subject<any>();

  constructor() { }
  toggleAddTask(): void{
    this.showAddTask = !this.showAddTask;
    this.subject.next(this.showAddTask);
  }
  toggleSend() {
    this.showSendTask = !this.showSendTask;
    this.subject2.next(this.showSendTask);
  }
  onToggleTask(): Observable<any>{
    return this.subject.asObservable();
  }
  onToggleSend(): Observable<any>{
    return this.subject2.asObservable();
  }
}
