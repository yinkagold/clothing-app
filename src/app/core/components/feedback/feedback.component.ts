import 'rxjs/add/operator/switchMap';

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';



@Component({
  selector: 'feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private db: AngularFireDatabase) {
      this.form = fb.group({
        name: ['', Validators.required],
        phone: ['', Validators.required],
        email: ['', Validators.required],
        message: ['', Validators.required]
      });

     }


    onSubmit() {
      const { name, phone, email, message } = this.form.value;
      const date = Date();

      let formRequest = { name, phone, email, message, date };
      this.db.list('/contact').push(formRequest);
      alert('Feedback Sumbitted');
      // this.toastr.Success('Feedback Submitted Successfully');
      this.form.reset();
    }

  }
