/**
 * Created by sujoy on 10/4/2016.
 */
import { ModuleWithProviders }   from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';

import { RegisterComponent }     from './register.component';


const registerRoutes: Routes = [
  // {
  //   path: '',
  //   redirectTo: '/home',
  //   pathMatch: 'full'
  // },
  {
    path: 'register',
    component: RegisterComponent,

  }
];

export const registerRouting: ModuleWithProviders = RouterModule.forChild(registerRoutes);


