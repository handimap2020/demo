import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Spot } from '../models/explore.model';

@Component({
  selector: 'app-explore-datagrid',
  templateUrl: './explore-datagrid.component.html',
  styleUrls: ['./explore-datagrid.component.scss']
})
export class ExploreDatagridComponent implements OnInit {
  @Input() data: Spot[];
  @Output() delete = new EventEmitter<string>();
  @Output() goto = new EventEmitter<Spot>();

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onEdit(id: string): void {
    this.router.navigate([`explore/${id}/edit`]);
  }

  onDelete(id: string): void {
    this.delete.emit(id);
  }

  onGoto(value: Spot): void {
    this.goto.emit(value);
  }

}
