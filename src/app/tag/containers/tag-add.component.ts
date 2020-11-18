import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TagService } from '../tag.service';
import { TagForm } from '../models/tag.model';

@Component({
  selector: 'app-tag-add',
  templateUrl: './tag-add.component.html',
  styleUrls: ['./tag-add.component.scss']
})
export class TagAddComponent implements OnInit {
  constructor(
    public tagService: TagService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  submit(data: TagForm): void {
    this.tagService.add(data);
    this.router.navigate(['/tags']);
  }

}
