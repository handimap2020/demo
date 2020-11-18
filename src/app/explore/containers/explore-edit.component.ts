import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TagService } from '../../tag/tag.service';
import { Tag } from '../../tag/models/tag.model';
import { Subject } from 'rxjs';
import { ExploreService } from '../explore.service';
import { Spot, SpotForm } from '../models/explore.model';
import { takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-explore-edit',
  templateUrl: './explore-edit.component.html',
  styleUrls: ['./explore-edit.component.scss']
})
export class ExploreEditComponent implements OnInit, OnDestroy {
  unsubscribe$: Subject<void> = new Subject<void>();
  data: Spot;
  editId: string;
  tags: Tag[];

  constructor(
    public exploreService: ExploreService,
    public tagService: TagService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.tags = this.tagService.getAll();
    this.route.params.pipe(takeUntil(this.unsubscribe$))
    .subscribe((params) => {
      this.data = this.exploreService.get(params['id']);
      this.editId = params['id'];
    });
  }

  submit(data: SpotForm): void {
    this.exploreService.edit(this.editId, data);
    this.router.navigate(['/explore']);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
