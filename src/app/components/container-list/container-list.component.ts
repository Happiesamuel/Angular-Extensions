import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Extension } from '../../../..';
import { DataService } from '../../services/data.service';
import { firstValueFrom } from 'rxjs';
import { ListComponent } from '../list/list.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-container-list',
  standalone: true,
  imports: [ListComponent, NgFor],
  templateUrl: './container-list.component.html',
  styleUrl: './container-list.component.css',
})
export class ContainerListComponent {
  @Input() active!: number;
  @Input() darkMode!: boolean;
  @Input() extensions!: Extension[];
  @Input() newExtension!: Extension[];
  @Output() activeChange = new EventEmitter<{
    exten: Extension[];
    newExten: Extension[];
  }>();
  @Input() handleClick!: (name: string) => void;
  loading: boolean = false;
  constructor(private dataService: DataService) {}

  async ngOnInit(): Promise<void> {
    try {
      this.loading = true;
      const data = (await firstValueFrom(
        this.dataService.getData()
      )) as Extension[];
      this.loading = false;
      this.activeChange.emit({ exten: data, newExten: data });
    } catch (error) {
      this.loading = false;
      console.log(error);
    }
  }
  handleChange(event: { exten: Extension[]; newExten: Extension[] }) {
    this.activeChange.emit({ exten: event.exten, newExten: event.newExten });
  }
}
