import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagDatagridComponent } from './components/tag-datagrid.component';
import { ClarityModule } from '@clr/angular';
import { TagRoutingModule } from './tag-routing.module';
import { TagService } from './tag.service';
import { TagAddComponent } from './containers/tag-add.component';
import { TagFormComponent } from './components/tag-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TagEditComponent } from './containers/tag-edit.component';
import { MapModule } from '../map/map.module';
import { TagListComponent } from './containers/tag-list.component';



@NgModule({
  declarations: [
    TagDatagridComponent,
    TagListComponent,
    TagAddComponent,
    TagEditComponent,
    TagFormComponent,
  ],
  imports: [
    CommonModule,
    ClarityModule,
    TagRoutingModule,
    ReactiveFormsModule,
    MapModule,
  ],
  providers: [TagService],
})
export class TagModule { }
