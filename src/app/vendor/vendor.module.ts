import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import {MatListModule} from '@angular/material/list';

import { VendorService } from './services/vendor.service';
import { VendorListService } from './services/vendorList/vendor-list.service';
import { RegionService } from './services/region/region.service';

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
    MatSelectModule,
    MatTableModule,
    MatListModule,
    MatInputModule
  ],
  providers:[VendorService,VendorListService,RegionService],

  declarations: [VendorListComponent, VendorSearchComponent]
})
export class VendorModule { }
