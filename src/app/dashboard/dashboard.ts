import { AfterViewInit,Component,Renderer2, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Footer } from "../footer/footer";
import { Sidebar } from "../sidebar/sidebar";
import { Header } from "../header/header";
@Component({
  selector: 'app-dashboard',
  imports: [RouterModule, Footer, Sidebar, Header],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard implements AfterViewInit, OnInit {
  // Inject Renderer2
  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    // Paksa hapus login-page untuk jaga-jaga
    this.renderer.removeClass(document.body, 'login-page');
    
    // Tambahkan class standar AdminLTE untuk dashboard
    this.renderer.addClass(document.body, 'sidebar-mini');
    this.renderer.addClass(document.body, 'layout-fixed');
    
  }

  ngAfterViewInit(): void {
    this.renderer.removeClass(document.body, "sidebar-open");
    this.renderer.addClass(document.body, "sidebar-closed");
    this.renderer.addClass(document.body, "sidebar-collapse");
  }
}
