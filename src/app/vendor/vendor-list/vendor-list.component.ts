import { Component, OnInit,Input } from '@angular/core';

import {VendorList} from '../model/vendor';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {

  displayedColumns = ['vendorId','vendorName','Address','city','state','zip','phone','contact'];

  @Input() vendorResult: VendorList;
  
  
  constructor() { }

  ngOnInit() {
  }

}
