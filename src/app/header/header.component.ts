import { Component } from '@angular/core';
import { RouterModule,Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../app.component';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app.routes';
@Component({//it contains the metadata of the class
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
ll="http://localhost:4200/about";
path2="http://localhost:4200/services";
path3="http://localhost:4200/portfolio";
path4="http://localhost:4200/about";
path5="http://localhost:4200/Pricing";
path6="http://localhost:4200/contact";
}
