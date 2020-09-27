import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DistrictComponent } from './district/district.component';
import { StateComponent } from './state/state.component';

const routes: Routes = [{path:"state",component:StateComponent},
              {path:"district",component:DistrictComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
