import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [NgFor],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  categories = ['All', 'App', 'Photo', 'Web', 'Print'];

  images = [
    { src: 'assets/images/image1.jpg', title: 'Awesome Image', category: 'Photography' },
    { src: 'assets/images/image2.jpg', title: 'Awesome Image', category: 'Photography' },
    { src: 'assets/images/image3.jpg', title: 'Awesome Image', category: 'Photography' },
    { src: 'assets/images/image4.jpg', title: 'Awesome Image', category: 'Photography' },
    { src: 'assets/images/image5.jpg', title: 'Awesome Image', category: 'Photography' },
    { src: 'assets/images/image6.jpg', title: 'Awesome Image', category: 'Photography' },
    { src: 'assets/images/image7.jpg', title: 'Awesome Image', category: 'Photography' },
    { src: 'assets/images/image8.jpg', title: 'Awesome Image', category: 'Photography' }
  ];
}
