import { Routes ,RouterModule} from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DesingComponent } from './desing/desing.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LandingComponent } from './landing/landing.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PricingComponent } from './pricing/pricing.component';
import { QuoteComponent } from './quote/quote.component';
import { ServicesComponent } from './services/services.component';
import { SkillsComponent } from './skills/skills.component';
import { Stats } from 'fs';
import { StatsComponent } from './stats/stats.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { VideoComponent } from './video/video.component';

export const routes: Routes = [
  {path:"about",component:AboutComponent},
  {path:"contact",component:ContactComponent},
  {path:"design",component:DesingComponent},
  {path:"footer",component:FooterComponent},
  {path:"header",component:HeaderComponent},
  {path:"landing",component:LandingComponent},
  {path:"portfolio",component:PortfolioComponent},
  {path:"pricing",component:PricingComponent},
  {path:"quote",component:QuoteComponent},
  {path:"services",component:ServicesComponent},
  {path:"skills",component:SkillsComponent},
  {path:"stats",component:StatsComponent},
  {path:"subscribe",component:SubscribeComponent},
  {path:"video",component:VideoComponent},
  {path: '', redirectTo: 'about', pathMatch: 'full' }, // Redirect default route must do it or yu'll get errors
  {path: '**', redirectTo: 'about' } // Wildcard route (optional)
];

export class AppRoutingModule{}
