import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { WarehousesComponent } from '../warehouses/warehouses.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,  
    children: [
      {
        path: 'warehouses',
         component: WarehousesComponent,
      },
      
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule { }
