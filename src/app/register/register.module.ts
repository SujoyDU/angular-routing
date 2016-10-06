import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RegisterComponent} from './register.component';
import {registerRouting} from "./register.routing";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    registerRouting,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [RegisterComponent],
  exports : [RegisterComponent]
})
export class RegisterModule { }
