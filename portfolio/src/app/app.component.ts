import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExperiencesComponent } from './modules/portfolio/components/experiences/experiences.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  template:'<router-outlet />'

})
export class AppComponent {};
