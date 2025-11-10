import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Footer } from "../footer/footer";
import { Sidebar } from "../sidebar/sidebar";
import { Header } from "../header/header";
@Component({
  selector: 'app-contact',
  imports: [RouterModule, Footer, Sidebar, Header],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {

}
