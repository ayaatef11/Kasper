import { Component } from '@angular/core';
import { RouterModule,Router, RouterLink } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../app.component';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app.routes';
import { NgFor } from '@angular/common'; // ✅ Import NgFor

@Component({//it contains the metadata of the class
  selector: 'app-header',
  standalone: true,
  imports: [NgFor,RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  navLinks = [
    { path: '', label: 'Home' },
    { path: 'services', label: 'Services' },
    { path: 'portfolio', label: 'Portfolio' },
    { path: 'about', label: 'About' },
    { path: 'pricing', label: 'Pricing' },
    { path: 'contact', label: 'Contact' }
  ];
}
