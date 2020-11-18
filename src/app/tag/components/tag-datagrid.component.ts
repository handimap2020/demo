import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Tag } from '../models/tag.model';

@Component({
  selector: 'app-tag-datagrid',
  templateUrl: './tag-datagrid.component.html',
  styleUrls: ['./tag-datagrid.component.scss']
})
export class TagDatagridComponent implements OnInit {
  @Input() data: Tag[];
  @Output() delete = new EventEmitter<string>();

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onEdit(id: string): void {
    this.router.navigate([`tags/${id}/edit`]);
  }

  onDelete(id: string): void {
    this.delete.emit(id);
  }

}
