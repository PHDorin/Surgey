import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { LoadingPageComponent} from './loadingPage/loading-page.component'
import {AddComponent} from './add/add.component'
import {ResultsComponent} from './results/results.component'

const appRoutes: Routes = [
  {path: '', redirectTo: 'add', pathMatch: 'full'},
  {path: 'add', component: AddComponent },
  {path: 'results', component: ResultsComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
