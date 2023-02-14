import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  bootstrapApplication,
  platformBrowser,
} from '@angular/platform-browser';
import { FeladatComponent } from './feladat/feladat.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, FeladatComponent],
  template: '<feladat-app></feladat-app>',
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
