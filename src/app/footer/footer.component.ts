import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgFor],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  socialIcons = [
    { class: 'fab fa-facebook-f', link: 'https://www.facebook.com' },
    { class: 'fab fa-twitter', link: 'https://www.twitter.com' },
    { class: 'fas fa-home', link: '/' },
    { class: 'fab fa-linkedin', link: 'https://www.linkedin.com' }
  ];
}
