import { SocialAuthService } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { User } from 'src/app/models/user';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  // user: User ={
  //   email:"",
  //   password:"",
  // }

  user: any;
  loggedIn: any;
  signinForm: FormGroup;
  email: FormControl;
  password: FormControl;
  
  constructor(private fb: FormBuilder, private authService:SocialAuthService) {
    this.email = fb.control("",[Validators.email, Validators.required])
    this.password = fb.control("",[Validators.required, Validators.minLength(8)])

    this.signinForm = fb.group({
      email: this.email,
      password: this.password,
    })
  }
  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      console.log(this.user);
      
    });
  }

  handleSubmit(){
    console.log(this.signinForm);
  }

}
