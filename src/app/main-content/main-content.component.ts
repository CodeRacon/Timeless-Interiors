import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { PhilosophyComponent } from './philosophy/philosophy.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [HomeComponent, PhilosophyComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss',
})
export class MainContentComponent {}
