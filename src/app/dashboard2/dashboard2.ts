import { Component, Input} from '@angular/core';
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
export class Dashboard2 {

}

