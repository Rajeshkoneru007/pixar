import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {VendorSearchComponent} from './vendor-search/vendor-search.component';

const routes: Routes = [
  {path:'',component:VendorSearchComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendorRoutingModule { }