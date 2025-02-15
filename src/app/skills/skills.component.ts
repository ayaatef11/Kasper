import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [NgFor],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  testimonials = [
    { image: "/images/skills-01.jpg", text: 'Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget tincidunt.', author: 'John Doe, CEO' },
    { image: "/images/skills-02.jpg", text: 'Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget tincidunt.', author: 'John Doe, CEO' }
  ];

  skills = [
    { name: 'Adobe', progress: '90%' },
    { name: 'HTML & CSS', progress: '85%' },
    { name: 'JavaScript', progress: '80%' },
    { name: 'PHP', progress: '90%' }
  ];

}
