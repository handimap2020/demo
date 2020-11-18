import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExploreDatagridComponent } from './components/explore-datagrid.component';
import { ClarityModule } from '@clr/angular';
import { ExploreRoutingModule } from './explore-routing.module';
import { ExploreLayoutComponent } from './containers/explore-layout.component';
import { ExploreService } from './explore.service';
import { ExploreAddComponent } from './containers/explore-add.component';
import { ExploreFormComponent } from './components/explore-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExploreEditComponent } from './containers/explore-edit.component';
import { MapModule } from '../map/map.module';

@NgModule({
  declarations: [
    ExploreDatagridComponent,
    ExploreLayoutComponent,
    ExploreAddComponent,
    ExploreEditComponent,
    ExploreFormComponent,
  ],
  imports: [
    CommonModule,
    ClarityModule,
    ExploreRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MapModule,
  ],
  providers: [ExploreService],
})
export class ExploreModule { }
