import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [],
  templateUrl: './logout.html',
  styleUrl: './logout.css'
})
export class Logout implements OnInit {
  
  // Menggunakan inject() atau constructor seperti di slide sama saja. 
  // Di sini kita pakai constructor agar PERSIS dengan slide Anda.
  constructor(private cookieService: CookieService, private router: Router) {}

  ngOnInit(): void {
    // 1. Hapus semua cookie (sesuai slide: deleteAll)
    // Codingan slide: Hapus cookie atau token autentikasi
    this.cookieService.deleteAll();

    // 2. Arahkan kembali ke login
    // Codingan slide: Arahkan ke halaman login
    this.router.navigate(['/login']);
  }
}