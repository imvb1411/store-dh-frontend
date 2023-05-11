import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { SharedModule } from '../shared/shared.module';
import { WarehousesModule } from '../warehouses/warehouses.module';
import { MainComponent } from './main.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
    WarehousesModule
  ]
})
export class MainModule { }
