import { NgModule } from '@angular/core';
import { ListWarehouseComponent } from './list-warehouse/list-warehouse.component';
import { CreateWarehouseComponent } from './create-warehouse/create-warehouse.component';
import { SharedModule } from '../shared/shared.module';
import { WarehousesComponent } from './warehouses.component';



@NgModule({
  declarations: [
    WarehousesComponent,
    ListWarehouseComponent,
    CreateWarehouseComponent
  ],
  imports: [
    SharedModule
  ]
})
export class WarehousesModule { }
