import { RouterModule, Routes } from '@angular/router';
// import { RouterModule } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { Login } from './login/login';
import { Logout } from './logout/logout';
import { Register } from './register/register';
// import { AdminComponent } from './admin/admin.component';
import { Admin } from './admin/admin';
import { Dashboard2 } from './dashboard2/dashboard2';
import { Dashboard3 } from './dashboard3/dashboard3';
import { Mahasiswa } from './mahasiswa/mahasiswa';
import { otentikasiGuard } from './otentikasi-guard';
import { NgModule } from '@angular/core';
import { Contact } from './contact/contact';

export const routes: Routes = [
        { path: '',  redirectTo: 'login', pathMatch: 'full'},
        { path: "dashboard", component: Dashboard, canActivate: [otentikasiGuard] },
        { path: "login", component: Login },
        { path: "register", component: Register },
        { path: "admin", component: Admin },
        { path: "dashboard2", component: Dashboard2, canActivate: [otentikasiGuard] },
        { path: "dashboard3", component: Dashboard3, canActivate: [otentikasiGuard] },
        { path: "mahasiswa", component: Mahasiswa, canActivate: [otentikasiGuard] },
        { path: "contact", component: Contact },
        { path: "logout", component: Logout },


];

// @NgModule({
//         imports: [ RouterModule.forRoot(routes)],
//         exports: [ RouterModule ]
// })

// export class AppRoutes {}