import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { TagService } from '../tag.service';
import { Tag, TagForm } from '../models/tag.model';
import { takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-tag-edit',
  templateUrl: './tag-edit.component.html',
  styleUrls: ['./tag-edit.component.scss']
})
export class TagEditComponent implements OnInit, OnDestroy {
  unsubscribe$: Subject<void> = new Subject<void>();
  data: Tag;
  editId: string;

  constructor(
    public tagService: TagService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.route.params.pipe(takeUntil(this.unsubscribe$))
    .subscribe((params) => {
      this.data = this.tagService.get(params['id']);
      this.editId = params['id'];
    });
  }

  submit(data: TagForm): void {
    this.tagService.edit(this.editId, data);
    this.router.navigate(['/tags']);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
