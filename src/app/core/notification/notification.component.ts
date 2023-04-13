import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {Notification, NotificationService, NotificationType} from './notification.service';
import {LowerCasePipe, NgIf, NgSwitch, NgSwitchCase} from '@angular/common';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-notification',
  template: `
    <div class="message d-flex align-items-center {{notification?.type}}" *ngIf="notification">
      <ng-container [ngSwitch]="notification.type">
        <mat-icon *ngSwitchCase="notificationType.INFO">info</mat-icon>
        <mat-icon *ngSwitchCase="notificationType.SUCCESS">check</mat-icon>
        <mat-icon *ngSwitchCase="notificationType.ERROR">error</mat-icon>
      </ng-container>
      {{notification.text }}
      <mat-icon class="icon_close" (click)="close()">close</mat-icon>
    </div>
  `,
  styleUrls: ['./notification.component.less'],
  imports: [
    NgSwitch,
    MatIconModule,
    NgSwitchCase,
    LowerCasePipe,
    NgIf
  ],
  standalone: true
})
export class NotificationComponent implements OnInit, OnDestroy {

  private subscription: Subscription;

  notification: Notification = null;
  notificationType = NotificationType;

  constructor(private readonly notificationService: NotificationService) {
  }

  ngOnInit() {
    this.subscription = this.notificationService.getObservable()
      .subscribe((notification) => {
        this.notification = notification;
        if (notification?.timeout !== 0) {
          setTimeout(() => this.close(), notification.timeout);
        }
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  close() {
    this.notification = null
  }

}
