import { Renderer2,AfterViewInit, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Sidebar } from "../sidebar/sidebar";
import { Header } from "../header/header";
import { Footer } from "../footer/footer";

@Component({
  selector: 'app-dashboard3',
  imports: [RouterModule,Sidebar, Header, Footer],
  templateUrl: './dashboard3.html',
  styleUrl: './dashboard3.css'
})
export class Dashboard3 implements AfterViewInit{
  
    constructor(private renderer: Renderer2) {}
    ngAfterViewInit(): void {
  
    this.renderer.removeClass(document.body, "sidebar-open");
    this.renderer.addClass(document.body, "sidebar-closed");
    this.renderer.addClass(document.body, "sidebar-collapse");
    }
}
