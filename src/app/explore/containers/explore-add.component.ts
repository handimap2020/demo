import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TagService } from '../../tag/tag.service';
import { Tag } from '../../tag/models/tag.model';
import { ExploreService } from '../explore.service';
import { SpotForm } from '../models/explore.model';

@Component({
  selector: 'app-explore-add',
  templateUrl: './explore-add.component.html',
  styleUrls: ['./explore-add.component.scss']
})
export class ExploreAddComponent implements OnInit {
  tags: Tag[];

  constructor(
    public exploreService: ExploreService,
    public tagService: TagService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.tags = this.tagService.getAll();
  }

  submit(data: SpotForm): void {
    this.exploreService.add(data);
    this.router.navigate(['/explore']);
  }

}
