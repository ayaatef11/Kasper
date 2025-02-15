import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [NgFor],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
 categories = ['All', 'App', 'Photo', 'Web', 'Print'];
path="/images/shuffle-01.jpg"
//src must start with / and the path is between  "" not '' ok )
  images = [
    { src: "/images/shuffle-01.jpg", title: 'Awesome Image', category: 'Photography' },
    { src: "/images/shuffle-02.jpg", title: 'Awesome Image', category: 'Photography' },
    { src: "/images/shuffle-03.jpg", title: 'Awesome Image', category: 'Photography' },
    { src: "/images/shuffle-04.jpg", title: 'Awesome Image', category: 'Photography' },
    { src: "/images/shuffle-05.jpg", title: 'Awesome Image', category: 'Photography' },
    { src: "/images/shuffle-06.jpg", title: 'Awesome Image', category: 'Photography' },
    { src: "/images/shuffle-07.jpg", title: 'Awesome Image', category: 'Photography' },
    { src: "/images/shuffle-08.jpg", title: 'Awesome Image', category: 'Photography' }
  ];
}
