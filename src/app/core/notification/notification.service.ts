import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

export enum NotificationType {
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
  INFO = 'INFO'
}

export class Notification {

  id?: number;
  text: string;

  type: NotificationType;

  timeout?: number;


  constructor(id: number, text: string, type: NotificationType, timeout: number) {
    this.text = text;
    this.type = type;
    this.timeout = timeout;
  }
}

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private subject: Subject<Notification>;
  private currentId: number;

  constructor() {
    this.subject = new Subject<Notification>();
    this.currentId = 0;
  }

  success(text: string, timeout?: number) {
    this.create({type: NotificationType.SUCCESS, text, timeout});
  }

  error(text: string, timeout?: number) {
    this.create({type: NotificationType.ERROR, text, timeout});
  }

  info(text: string, timeout?: number) {
    this.create({type: NotificationType.INFO, text, timeout});
  }

  getObservable(): Observable<Notification> {
    return this.subject.asObservable();
  }

  destroy() {
    this.subject.next(null);
  }

  private create({type, text, timeout = 5000}: Notification) {
    this.subject.next(new Notification(this.currentId++, text, type, timeout));
  }
}
