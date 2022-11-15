import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  user: User ={
    firstname:"",
    lastname:"",
    email:"",
    password:"",
  }

  signupForm: FormGroup;
  firstname: FormControl;
  lastname: FormControl;
  email: FormControl;
  password: FormControl;
  
  constructor(private fb: FormBuilder) {
    this.firstname = fb.control("",[Validators.required])
    this.lastname = fb.control("",[Validators.required])
    this.email = fb.control("",[Validators.email, Validators.required])
    this.email = fb.control("",[Validators.email, Validators.required])
    this.password = fb.control("",[Validators.required, Validators.minLength(8)])

    this.signupForm = fb.group({
      firstname: this.firstname,
      lastname: this.lastname,
      email: this.email,
      password: this.password,
    })

  }

  ngOnInit(): void {
  }

  handleSubmit(){
    console.log(this.signupForm);
  }

}

