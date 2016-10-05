import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import {registerRouting} from "./register.routing";


@NgModule({
  imports: [
    CommonModule,
    registerRouting
  ],
  declarations: [RegisterComponent],
  exports : [RegisterComponent]
})
export class RegisterModule { }
