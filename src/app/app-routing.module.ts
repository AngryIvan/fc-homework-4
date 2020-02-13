import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './components/content-page/content.component';
import { CreateEditPageComponent } from './components/create-edit-page/create-edit-page.component';


const routes: Routes = [
  { path: 'create', component: CreateEditPageComponent, data: { title: 'create'}},
  { path: 'edit', component: CreateEditPageComponent, data: { title: 'edit'}},
  { path: '', component: ContentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
