import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Color, Size, WarehouseResponse, WarehouseCreateRequest, WarehouseUpdateRequest } from 'src/app/core/http/warehouses/warehouse.dto';
import { WarehousesService } from 'src/app/core/http/warehouses/warehouses.service';

@Component({
  selector: 'app-create-warehouse',
  templateUrl: './create-warehouse.component.html',
  styleUrls: ['./create-warehouse.component.css']
})
export class CreateWarehouseComponent implements OnInit {

  colors: Color[] = [Color.Black, Color.Green, Color.Red, Color.Yellow];
  sizes: Size[] = [Size.XSmall, Size.Small, Size.Medium, Size.Large, Size.XLarge];

  createPatitoForm: FormGroup = this.fb.group({
    color: ['', [Validators.required]],
    price: ['', [Validators.required, Validators.min(0.01)]],
    quantity: ['', [Validators.required, Validators.min(1)]],
    size: ['', [Validators.required]]
  });

  constructor(
    private fb: FormBuilder, 
    private service: WarehousesService,
    @Inject(MAT_DIALOG_DATA) public warehouse: WarehouseResponse,) {
    }
  
  ngOnInit(): void {
    if(this.warehouse) {
      this.createPatitoForm.get('color')?.setValue(this.warehouse.color);
      this.createPatitoForm.get('size')?.setValue(this.warehouse.size);
      this.createPatitoForm.get('price')?.setValue(this.warehouse.price);
      this.createPatitoForm.get('quantity')?.setValue(this.warehouse.quantity);
    }
  }

  submit() {
    if(this.warehouse) {
      const warehouseUpdateRequest : WarehouseUpdateRequest = {
        price: this.createPatitoForm.get('price')!.value,
        quantity: this.createPatitoForm.get('quantity')!.value,
      }
      this.service.update(this.warehouse.id ,warehouseUpdateRequest).subscribe({
        next : response => {
          console.log(response);
        },
        error: error => {
          console.log(error);
        }
      });
    } else {
      const warehouseCreateRequest: WarehouseCreateRequest = {
        color: this.createPatitoForm.get('color')!.value,
        size: this.createPatitoForm.get('size')!.value,
        price: this.createPatitoForm.get('price')!.value,
        quantity: this.createPatitoForm.get('quantity')!.value,
      }
      this.service.create(warehouseCreateRequest).subscribe({
        next: response => {
          console.log(response);
        },
        error: error => {
          console.log(error);
        }
      });
    }
  }
}
