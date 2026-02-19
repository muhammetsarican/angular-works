import { Component, Input } from '@angular/core';
import { NgFor, NgIf, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [NgFor, NgIf, TitleCasePipe],
  templateUrl: './table.html',
})
export class TableComponent {
  @Input() data: any[] = [];
  @Input() columns: string[] = [];
  @Input() title: string = 'Data Log';

  get objectKeys() {
    return this.columns.length > 0 ? this.columns : (this.data.length > 0 ? Object.keys(this.data[0]) : []);
  }
}
