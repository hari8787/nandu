import { Component, OnInit } from '@angular/core';
import { DsService } from '../ds.service';

@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styleUrls: ['./district.component.css']
})
export class DistrictComponent implements OnInit {
hhh:any;
  constructor(private ds:DsService) { }

  ngOnInit(): void {
    this.hhh=this.ds.distDetails
  }
  sort (value)
  {
    if(value=="name"){
      this.hhh = this.hhh.sort((a,b) => (a.name > b.name) ?
    -1
    :
    ((b.name > a.name) ? 1 : 0))
    }
    else if(value=="confirmed"){
      this.hhh = this.hhh.sort((a,b) => (a.confirmed > b.confirmed) ?
    -1
    :
    ((b.confirmed > a.confirmed) ? 1 : 0))
    }
  }
}
