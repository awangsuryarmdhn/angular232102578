import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-sidebar',
  imports: [ RouterModule ],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class Sidebar implements OnInit {
  @Input() moduleName: string = "";
  username: string = "";
  _header = document.querySelector('.main-header') as HTMLElement;

  constructor(private cookieService: CookieService,private router:Router){}

  ngOnInit(): void {
    this.username = this.cookieService.get("userId");

    const saved = localStorage.getItem('adminlte-theme');
    // Jika tersimpan 'dark', aktifkan mode gelap
    if (saved === 'dark') {
      document.body.classList.add('dark-mode');

      if (this._header) {
        this._header.classList.remove('navbar-white', 'navbar-light');
        this._header.classList.add('navbar-dark', 'navbar-primary');
      }
    } else {
      // Jika tidak (default light), pastikan mode terang aktif
      if (this._header) {
        this._header.classList.remove('navbar-dark', 'navbar-primary');
        this._header.classList.add('navbar-white', 'navbar-light');
      }
    }
  }

  // --- FUNGSI TOGGLE (Dipanggil saat klik menu) ---
  toggleTheme(): void {
    // Cek ulang elemen header jika belum terambil saat inisialisasi
    if (!this._header) {
      this._header = document.querySelector('.main-header') as HTMLElement;
    }

    // Cek apakah saat ini sedang dark mode
    if (document.body.classList.contains('dark-mode')) {
      // Switch ke Light Mode
      document.body.classList.remove('dark-mode');
      
      if (this._header) {
        this._header.classList.remove('navbar-dark', 'navbar-primary');
        this._header.classList.add('navbar-white', 'navbar-light');
      }
      
      localStorage.setItem('adminlte-theme', 'light');
    } else {
      // Switch ke Dark Mode
      document.body.classList.add('dark-mode');
      
      if (this._header) {
        this._header.classList.remove('navbar-white', 'navbar-light');
        this._header.classList.add('navbar-dark', 'navbar-primary');
      }
      
      localStorage.setItem('adminlte-theme', 'dark');
    }
  }
}
