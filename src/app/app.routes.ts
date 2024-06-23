import { Routes } from '@angular/router';

import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
    /*{path: "amaterial", component: EjemploAmaterialComponent}*/
    {path: "login", component: LoginComponent},
    {path: "dashboard", component: DashboardComponent,
        canActivate: [authGuard],
        children: [
        ]
    },
    /*siempre poner el login en primer lugar, el orden importa */
    {path: "", redirectTo: "login", pathMatch: "full"},
  
   
];
