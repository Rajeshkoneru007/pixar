import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AgentSearchComponent} from './agent-search/agent-search.component';

const routes: Routes = [
  {path:'',component:AgentSearchComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendorRoutingModule { }