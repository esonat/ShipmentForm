import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShipmentComponent} from './components/shipment/shipment.component';

const routes: Routes = [
  {path: '',pathMatch:'full',redirectTo:'shipment'},
  {path:'shipment',component:ShipmentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
