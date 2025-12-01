import { AfterViewInit, Component, Input, Renderer2} from '@angular/core';
import { RouterModule } from '@angular/router';
import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import { Sidebar } from "../sidebar/sidebar";
@Component({
  selector: 'app-dashboard2',
  imports: [RouterModule, Footer, Header, Sidebar],
  templateUrl: './dashboard2.html',
  styleUrl: './dashboard2.css'
})
export class Dashboard2 implements AfterViewInit {
    constructor(private renderer: Renderer2) {}
  ngAfterViewInit(): void {
    this.renderer.removeClass(document.body, "sidebar-open");
    this.renderer.addClass(document.body, "sidebar-closed");
    this.renderer.addClass(document.body, "sidebar-collapse");
  }
}

