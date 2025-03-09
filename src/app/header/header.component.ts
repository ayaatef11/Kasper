import { Component } from '@angular/core';
import { RouterModule,Router, RouterLink } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../app.component';
import { CommonModule, NgIf,NgFor } from '@angular/common';
import { AppRoutingModule } from '../app.routes';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgFor,RouterLink,CommonModule],
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
    { path: 'contact', label: 'Contact' },
    { path: 'video', label: 'Video' },
    { path: 'design', label: 'Design' },
    { path: 'footer', label: 'Summary' },
    { path: 'pricing', label: 'Pricing' },
    { path: 'quote', label: 'Quote' },
    { path: 'skills', label: 'Skills' },
    { path: 'stats', label: 'Stats' },
    { path: 'subscribe', label: 'Subscribe' }

  ];

  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen; 
  }
}
