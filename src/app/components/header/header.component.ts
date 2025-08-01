import { NgClass, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIf, NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @Input() darkMode!: boolean;
  @Output() activeChange = new EventEmitter<boolean>();

  handleClick() {
    this.darkMode = !this.darkMode;
    this.activeChange.emit(this.darkMode);
  }
}
