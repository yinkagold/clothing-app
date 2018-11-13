import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { Feedback } from './../models/feedback';

@Injectable()
export class FeedbackService  {
  feedbackList: FirebaseListObservable<any>;
  selectedFeedback: Feedback = new Feedback();
  constructor(private db: AngularFireDatabase ) { }

  getData() {
    return this.db.list('/contact');
  }

    insertFeedback(feedback: Feedback) {
    this.feedbackList.push({
    name: feedback.name,
    email: feedback.email,
    phone: feedback.phone,
    message: feedback.message
    });
  }
}
