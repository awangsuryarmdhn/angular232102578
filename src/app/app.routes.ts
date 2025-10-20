import { Routes } from '@angular/router';
// import { RouterModule } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { Login } from './login/login';
import { Register } from './register/register';
// import { AdminComponent } from './admin/admin.component';
import { Admin } from './admin/admin';

export const routes: Routes = [
        { path: '',  redirectTo: 'login', pathMatch: 'full'},
        { path: "dashboard", component: Dashboard },
        { path: "login", component: Login },
        { path: "register", component: Register },
        { path: "admin", component: Admin }

];
