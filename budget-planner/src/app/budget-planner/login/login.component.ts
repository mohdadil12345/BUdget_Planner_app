import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {


  signupform : FormGroup
  loginform : FormGroup
  activeForm : 'login' | 'register' = 'login'

  constructor (private formBuilder: FormBuilder) {
      this.signupform = this.formBuilder.group({
        username : ["",  Validators.required],
        email: ['', Validators.required, Validators.email],
        password: ['', Validators.required]

      })

      this.loginform = this.formBuilder.group({
        email: ['', Validators.required, ],
        password: ['', Validators.required]

      })
  }



  // toggleForm
  toggleForm = (form : 'login' | 'register') => {
      this.activeForm = form
  }



  handle_signup_form = () => {
      console.log(this.signupform.value)  
    
  }


  handle_login_form = () => {
       if(this.loginform.valid) {
        console.log("loginform", this.loginform.value)
       }else{

       }
  }





}
