import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListWarehouseComponent } from './list-warehouse/list-warehouse.component';
import { CreateWarehouseComponent } from './create-warehouse/create-warehouse.component';
import { SharedModule } from '../shared/shared.module';
import { WarehousesComponent } from './warehouses.component';



@NgModule({
  declarations: [
    WarehousesComponent,
  ],
  imports: [
    SharedModule
  ]
})
export class WarehousesModule { }
