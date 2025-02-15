import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [NgFor],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.css'
})
export class StatsComponent {
  stats = [
    { icon: 'fas fa-mug-hot', number: '1,236', text: 'Coffee Drinks' },
    { icon: 'far fa-folder', number: '256', text: 'Completed Projects' },
    { icon: 'far fa-envelope', number: '1,743', text: 'Mail Sent' },
    { icon: 'fas fa-trophy', number: '17', text: 'Awards Received' }
  ];

}
