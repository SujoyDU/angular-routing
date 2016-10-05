import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { loginRouting } from './login.route'

@NgModule({
  imports: [
    CommonModule,
    loginRouting
  ],
  declarations: [LoginComponent],
  exports : [LoginComponent]
})
export class LoginModule { }
