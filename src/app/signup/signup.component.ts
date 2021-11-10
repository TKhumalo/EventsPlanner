import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  signUpForm = this.formBuilder.group({
    firstName: ['', Validators.required, Validators.minLength(5), Validators.maxLength(25)],
    lastName: ['', Validators.required, Validators.minLength(5), Validators.maxLength(25)],
    email: ['',Validators.email, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')],
    phoneNumber: ['', Validators.required, Validators.pattern('^[0-9]+$') ],
    password: ['',Validators.required],
    confirmPassword: ['', Validators.required],
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {}

}
