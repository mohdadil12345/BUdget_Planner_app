import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

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

  constructor (private formBuilder: FormBuilder, private router:Router, private snackBar:MatSnackBar) {
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
    if(this.signupform.valid) {
      console.log(this.signupform.value) 

        setTimeout(() => {
          window.location.reload()
        }, 2000);
        this.router.navigate(['/budget-planner/login'])

        
      } else{
        this.snackBar.open('Please fill details properly', 'Close', {duration:3000})
        // alert("Invalid email or passwor")

      }
    
  }


  handle_login_form = () => {
       if(this.loginform.valid) {
        console.log("loginform", this.loginform.value)
        this.router.navigate(['/budget-planner/dashboard'])
       }else{
         this.snackBar.open('Invalid email or password', 'Close', {duration:3000})
       }
  }





}
