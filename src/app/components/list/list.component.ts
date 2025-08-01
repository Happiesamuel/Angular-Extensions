import { NgClass, NgFor } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Extension } from '../../../..';
import { FormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
@Component({
  selector: 'app-list',
  standalone: true,
  imports: [NgFor, FormsModule, MatSlideToggleModule, NgClass],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  @Input() extension!: Extension;
  @Input() active!: number;
  @Input() newExtension!: Extension[];
  @Input() extensions!: Extension[];
  @Input() darkMode!: boolean;
  exten: Extension[] = [];
  newExten: Extension[] = [];
  @Output() activeChange = new EventEmitter<{
    exten: Extension[];
    newExten: Extension[];
  }>();
  @Input() handleClick!: (name: string) => void;
  handleClicks(name: string) {
    this.exten = this.extensions.map((exten) => {
      return exten.name === name
        ? { ...exten, isActive: !exten.isActive }
        : { ...exten };
    })!;
    this.newExten = this.newExtension
      .map((exten) => {
        return exten.name === name
          ? { ...exten, isActive: !exten.isActive }
          : { ...exten };
      })
      .filter((x) =>
        this.active === 1 ? x.isActive : this.active === 2 ? !x.isActive : x
      )!;
    setTimeout(() => {
      this.clic(this.exten, this.newExten);
    }, 1000);
  }
  clic(exten: Extension[], newExten: Extension[]) {
    this.activeChange.emit({
      exten: exten,
      newExten: newExten,
    });
  }
}
