import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Extension } from '../../../..';

@Component({
  selector: 'app-buttons',
  standalone: true,
  imports: [NgFor, NgIf, NgClass],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.css',
})
export class ButtonsComponent {
  @Input() active!: number;
  @Input() extensions!: Extension[];
  @Input() newExtension!: Extension[];
  @Output() activeChange = new EventEmitter<{
    id: number;
    extension: Extension[];
  }>();
  @Input() darkMode!: boolean;
  buttons: { content: string; id: number }[] = [
    {
      content: 'All',
      id: 0,
    },
    {
      content: 'Active',
      id: 1,
    },
    {
      content: 'Inactive',
      id: 2,
    },
  ];
  handleClick(id: number) {
    this.newExtension =
      id === 0
        ? this.extensions
        : id === 1
        ? this.extensions.filter((i) => i.isActive)
        : this.extensions.filter((i) => !i.isActive);
    this.activeChange.emit({ id: id, extension: this.newExtension });
  }
  getCount(content: string): number {
    return content === 'All'
      ? this.extensions.length
      : content === 'Active'
      ? this.extensions.filter((x) => x.isActive).length
      : this.extensions.filter((x) => !x.isActive).length;
  }
}
