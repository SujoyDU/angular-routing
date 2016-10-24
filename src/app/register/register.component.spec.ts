/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { RegisterComponent } from './register.component';
import {FormGroup, FormBuilder, Validators, FormControl, ReactiveFormsModule} from '@angular/forms'
import {User} from "./user";

describe('Component: RegisterComponent', () => {
  let component: RegisterComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterComponent ],
      imports : [ ReactiveFormsModule]
    });

    const fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
  });

  it('should have a defined component', () => {
    expect(component).toBeDefined();
  });

  it('should have active to true', () => {
    expect(component.active).toEqual(true);
  });

  it('should have submitted to false',() => {
    expect(component.submitted).toEqual(false);
  });

  it('should have predefine User Model', () => {
    //component.ngOnInit();
    let user = new User('','','','');
    expect(component.model).toEqual(user);
  });

  it('should create a `FormGroup` comprised of `FormBuilder`s', () => {
        component.ngOnInit();
        expect(component.registerForm instanceof FormGroup).toBe(true);
  });

  it('should check for password validation', () => {
        component.ngOnInit();
        //expect(component.matchingPasswords('abc','abc')).toBe(false);
        //expect(component.registerForm instanceof FormGroup).toBe(true);
  });


})


