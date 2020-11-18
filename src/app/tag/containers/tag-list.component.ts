import { Component, OnInit } from '@angular/core';
import { TagService } from '../tag.service';
import { Tag } from '../models/tag.model';

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.scss']
})
export class TagListComponent implements OnInit {
  tagList: Tag[];

  constructor(
    public tagService: TagService,
  ) { }

  ngOnInit(): void {
    this.tagList = this.tagService.getAll();
  }

  onDelete(id: string): void {
    this.tagService.delete(id);
    this.tagList = this.tagService.getAll();
  }

}
