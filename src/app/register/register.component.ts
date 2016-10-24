import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms'
import { User} from './user'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers : [FormBuilder]
})



export class RegisterComponent implements OnInit {

  //
  active:boolean = true;
  submitted:boolean = false;
  model:User;
  registerForm: FormGroup;
  EMAIL_REGEXP:RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


  constructor(private formBuilder: FormBuilder) {
      this.model = new User("","","","");
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ['',Validators.required],
      password: ['',Validators.required],
      confirmPassword: ['',Validators.required],
      email: ['',Validators.pattern('[0-1]+')]

    },{validator: this.matchingPasswords('password', 'confirmPassword')});
  }


  matchingPasswords(passwordKey: string, passwordConfirmationKey: string) {
    return (group: FormGroup) => {
      let passwordInput = group.controls[passwordKey];
      let passwordConfirmationInput = group.controls[passwordConfirmationKey];
      if (passwordInput.value !== passwordConfirmationInput.value) {
        return passwordConfirmationInput.setErrors({notEquivalent: true})
      }
    }
  }

  onSubmit(value:any) {
     this.submitted = true;
     console.log('Reactive Form Data: ')
     console.log(value);
     this.model.username = value.username;
     this.model.password = value.password;
     this.model.confirmPassword = value.confirmPassword;
     this.model.email = value.email;

     //console.log(this.model.username,this.model.password,this.model.email);
  }
  printVal() {
    console.log(this.model.username,this.model.password,this.model.email);
  }
  newUser(){
     this.model = new User('','','','');
     this.registerForm.reset();
     // this.active = false;
     // setTimeout(() => this.active = true, 0);
  }


}
