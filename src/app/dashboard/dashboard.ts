import { Component, Input } from '@angular/core';
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
export class Dashboard {

}
