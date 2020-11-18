import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Tag, TagForm } from '../models/tag.model';

@Component({
  selector: 'app-tag-form',
  templateUrl: './tag-form.component.html',
  styleUrls: ['./tag-form.component.scss']
})
export class TagFormComponent implements OnInit {
  @Input() set data(value: Tag) {
    this.editId = value.id;
    this.formGroup = new FormGroup({
      name: new FormControl([value.name]),
      desc: new FormControl([value.desc]),
    });
  }
  @Output() output = new EventEmitter<TagForm>();

  formGroup: FormGroup;
  editId: string;

  constructor() { }

  ngOnInit(): void {
    if (!this.editId) {
      this.formGroup = new FormGroup({
        name: new FormControl(['']),
        desc: new FormControl(['']),
      });
    }
  }

  save(): void {
    this.output.emit({
      name: this.formGroup.controls['name'].value,
      desc: this.formGroup.controls['desc'].value,
    });
  }

}
