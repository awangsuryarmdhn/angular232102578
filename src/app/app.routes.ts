import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { Login } from './login/login';
import { Register } from './register/register';

export const routes: Routes = [
        { path: '',  redirectTo: 'login', pathMatch: 'full'},
        { path: "dashboard", component: Dashboard },
        { path: "login", component: Login },
        { path: "register", component: Register}
];
