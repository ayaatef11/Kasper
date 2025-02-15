import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [NgFor],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.css'
})
export class PricingComponent {
  pricingPlans = [
    { name: 'Basic', price: 19, features: ['Feature No 1', 'Extra Feature', 'Extra Feature No 2', 'Feature'] },
    { name: 'Premium', price: 29, features: ['Feature No 1', 'Extra Feature', 'Extra Feature No 2', 'Feature'] },
    { name: 'Pro', price: 39, features: ['Feature No 1', 'Extra Feature', 'Extra Feature No 2', 'Feature'] },
    { name: 'Platinum', price: 49, features: ['Feature No 1', 'Extra Feature', 'Extra Feature No 2', 'Feature'] }
  ];
}
