import { Component } from '@angular/core';
import { SubscribeComponent } from "../subscribe/subscribe.component";
import { DesingComponent } from "../desing/desing.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [SubscribeComponent, DesingComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
