import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ActivatedRoute } from '@angular/router';

import { RegionService } from '../services/region/region.service';
import { VendorListService } from '../services/vendorList/vendor-list.service';


import { State, VendorList, Region } from '../model/vendor'

@Component({
  selector: 'app-vendor-search',
  templateUrl: './vendor-search.component.html',
  styleUrls: ['./vendor-search.component.css']
})
export class VendorSearchComponent implements OnInit {
  
  states:State[];
  selectedCode:string; /*TODO Move to Model File and map with table*/ 
  vendorResult:VendorList;
  regions:Region;
  

  vendorSearchForm:FormGroup;
  
  constructor(
      private fb:FormBuilder,
      private route: ActivatedRoute,
      private vendorListService:VendorListService,
      private regionService:RegionService
    ) {}
    
  getStates(){
    this.route.data.subscribe((data:{states:State[]}) => {
      this.states = data.states;
      /*TODO:why getting error(Property 'name' is missing in type 'Object'. ) with out optional model? */
    });
  }

  getRegion(){
    this.regionService.getRegion().subscribe((data) =>{
      this.regions = data;
    });
  }

  createVendorSearchForm(){
    this.vendorSearchForm = this.fb.group({
      state:['', Validators.required],
      region:[''],
      /*TODO:Check whather form model binding to data model*/
    })
  }

  get state(){
    return this.vendorSearchForm.get('state');
  }

  submit(){
    this.vendorListService.getVendorList(this.selectedCode).subscribe(data =>{
      this.vendorResult = data;
    })
  }
  ngOnInit(){
    this.getStates();
    this.getRegion();
    this.createVendorSearchForm()
  }
}