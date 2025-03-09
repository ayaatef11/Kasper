import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { StatsComponent } from "../stats/stats.component";
import { SkillsComponent } from "../skills/skills.component";
import { QuoteComponent } from "../quote/quote.component";
import { PricingComponent } from "../pricing/pricing.component";

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [NgFor, StatsComponent, SkillsComponent, QuoteComponent, PricingComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  services = [
    { icon: 'fas fa-desktop fa-3x', title: 'Vorem amet intuitive', description: 'Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur aliquet quam.' },
    { icon: 'fas fa-cog fa-3x', title: 'Vorem amet intuitive', description: 'Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur aliquet quam.' },
    { icon: 'fas fa-pencil-ruler fa-3x', title: 'Vorem amet intuitive', description: 'Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur aliquet quam.' },
    { icon: 'fas fa-camera fa-3x', title: 'Vorem amet intuitive', description: 'Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur aliquet quam.' }
  ];

}
