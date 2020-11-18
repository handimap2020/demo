import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TagAddComponent } from './containers/tag-add.component';
import { TagEditComponent } from './containers/tag-edit.component';
import { TagListComponent } from './containers/tag-list.component';

const routes: Routes = [
  {
    path: 'tags/:id/edit',
    component: TagEditComponent,
  },
  {
    path: 'tags/add',
    component: TagAddComponent,
  },
  {
    path: 'tags',
    component: TagListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class TagRoutingModule {}
