import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
@Injectable() export class ConfirmDialogService {
  private subject = new Subject<any>();
  constructor() { }
  confirmThis(message: string, title: string, type: string, siFn: () => void, noFn: () => void) {
    this.setConfirmation(message, title, type, siFn, noFn);
  }
  setConfirmation(message: string, title: string, type: string, siFn: () => void, noFn: () => void) {
    let that = this;
    this.subject.next({
      type: type,
      text: message,
      title: title,
      siFn:
        function () {
          that.subject.next(); //this will close the modal
          siFn();
        },
      noFn: function () {
        that.subject.next();
        noFn();
      }
    });

  }

  getModalInfo(): Observable<any> {
    return this.subject.asObservable();
  }


 }
