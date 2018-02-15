import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';

import {VendorService} from './services/vendor.service';

import { VendorRoutingModule } from './vendor-routing.module';
import { VendorListComponent } from './vendor-list/vendor-list.component';
import { VendorSearchComponent } from './vendor-search/vendor-search.component';


@NgModule({
  imports: [
    CommonModule,
    VendorRoutingModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule
  ],
  providers:[VendorService],

  declarations: [VendorListComponent, VendorSearchComponent]
})
export class VendorModule { }
