import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExploreAddComponent } from './containers/explore-add.component';
import { ExploreEditComponent } from './containers/explore-edit.component';
import { ExploreLayoutComponent } from './containers/explore-layout.component';

const routes: Routes = [
  {
    path: 'explore/:id/edit',
    component: ExploreEditComponent,
  },
  {
    path: 'explore/add',
    component: ExploreAddComponent,
  },
  {
    path: 'explore',
    component: ExploreLayoutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class ExploreRoutingModule {}
