import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DsService } from '../ds.service';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit {
 h:any;
  constructor(private ds:DsService , private r:Router) { }

  ngOnInit() {
    this.ds.readdata().subscribe(obj=>{(obj)
      this.h=obj;
   })
  }
  details (obj) {
    this.ds.details(obj);
    
     this.r.navigate(["/district"]); 
    
  }
  sort (value)
{
  if(value=="state"){
    this.h = this.h.sort((a,b) => (a.state > b.state) ?
  -1
  :
  ((b.state > a.state) ? 1 : 0))
  }
  else if(value=="confimed"){
    this.h = this.h.sort((a,b) => (a.confimed > b.confimed) ?
  -1
  :
  ((b.confimed > a.confimed) ? 1 : 0))
  }
  else if(value=="active"){
    this.h = this.h.sort((a,b) => (a.active > b.active) ?
  -1
  :
  ((b.active > a.active) ? 1 : 0))
  }
  else if(value=="recovered"){
    this.h = this.h.sort((a,b) => (a.recovered > b.recovered) ?
  -1
  :
  ((b.recovered > a.recovered) ? 1 : 0))
  }
  
}

}
