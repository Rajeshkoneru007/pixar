import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendorRoutingModule } from './vendor-routing.module';
import { VendorListComponent } from './vendor-list/vendor-list.component';
import { AgentSearchComponent } from './agent-search/agent-search.component';

@NgModule({
  imports: [
    CommonModule,
    VendorRoutingModule
  ],
  declarations: [VendorListComponent, AgentSearchComponent]
})
export class VendorModule { }
