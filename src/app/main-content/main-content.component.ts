import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { PhilosophyComponent } from './philosophy/philosophy.component';
import { MaterialsComponent } from './materials/materials.component';
import { InspirationsComponent } from './inspirations/inspirations.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [
    HomeComponent,
    PhilosophyComponent,
    MaterialsComponent,
    InspirationsComponent,
  ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss',
})
export class MainContentComponent {}
