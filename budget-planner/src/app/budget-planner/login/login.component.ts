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


  signupdata : FormGroup

  constructor (private formBuilder: FormBuilder) {
      this.signupdata = this.formBuilder.group({
        username : ["",  Validators.required],
        email: ['', Validators.required],
        password: ['', Validators.required]

      })
  }



  signup_form = () => {
      console.log(this.signupdata.value)  
    
  }


}
