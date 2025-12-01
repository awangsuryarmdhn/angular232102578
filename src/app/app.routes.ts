import { RouterModule, Routes } from '@angular/router';
// import { RouterModule } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { Login, LoginComponent } from './login/login';
import { Register } from './register/register';
// import { AdminComponent } from './admin/admin.component';
import { Admin } from './admin/admin';
import { Dashboard2 } from './dashboard2/dashboard2';
import { Dashboard3 } from './dashboard3/dashboard3';
<<<<<<< HEAD
import { Mahasiswa } from './mahasiswa/mahasiswa';
import { otentikasiGuard } from './otentikasi-guard';
import { NgModule } from '@angular/core';
=======
import { Contact } from './contact/contact';
>>>>>>> 6dae436f7708c4e3074dcbb44d9e1af46479ab16

export const routes: Routes = [
        { path: '',  redirectTo: 'login', pathMatch: 'full'},
        { path: "dashboard", component: Dashboard, canActivate: [otentikasiGuard] },
        { path: "login", component: Login },
        { path: "register", component: Register },
        { path: "admin", component: Admin },
<<<<<<< HEAD
        { path: "dashboard2", component: Dashboard2, canActivate: [otentikasiGuard] },
        { path: "dashboard3", component: Dashboard3, canActivate: [otentikasiGuard] },
        { path: "mahasiswa", component: Mahasiswa, canActivate: [otentikasiGuard] },
=======
        { path: "dashboard2", component: Dashboard2 },
        { path: "dashboard3", component: Dashboard3 },
        { path: "contact", component: Contact },
>>>>>>> 6dae436f7708c4e3074dcbb44d9e1af46479ab16

];

// @NgModule({
//         imports: [ RouterModule.forRoot(routes)],
//         exports: [ RouterModule ]
// })

// export class AppRoutes {}