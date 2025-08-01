import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { ContainerListComponent } from './components/container-list/container-list.component';
import { Extension } from '../../';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    HeaderComponent,
    ButtonsComponent,
    ContainerListComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'extension';
  extensions: Extension[] = [];
  newExtension: Extension[] = [];
  active: number = 0;
  darkMode: boolean = true;
  constructor() {}
  handleChange(event: {
    exten: Extension[];
    newExten: Extension[];
    change?: string;
  }): void {
    this.extensions = event.exten;
    this.newExtension = event.newExten;
  }
}
