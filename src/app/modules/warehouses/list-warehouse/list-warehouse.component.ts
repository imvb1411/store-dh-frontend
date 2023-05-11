import { AfterViewInit, Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { WarehouseResponse } from 'src/app/core/http/warehouses/warehouse.dto';
import { WarehousesService } from 'src/app/core/http/warehouses/warehouses.service';
import { ConfirmationDialogComponent } from '../../shared/components/confirmation-dialog/confirmation-dialog.component';
import { Subject } from 'rxjs';
import { CreateWarehouseComponent } from '../create-warehouse/create-warehouse.component';

@Component({
  selector: 'app-list-warehouse',
  templateUrl: './list-warehouse.component.html',
  styleUrls: ['./list-warehouse.component.css']
})
export class ListWarehouseComponent implements AfterViewInit {

  @Input() refreshSubject$: Subject<void> = new Subject<void>();
  
  constructor(
    private service: WarehousesService, 
    public dialog: MatDialog, 
    ) {

  }
  ngAfterViewInit(): void {
    this.loadData();
  }

  dataSource: WarehouseResponse[] = [];
  displayedColumns: string[] = ['id', 'color', 'size', 'price', 'quantity', 'actions'];

  loadData() {
    this.service.list().subscribe({
      next: response => {
        this.dataSource = response;
      },
      error: error => {
        console.log(error);
      }
    });
  }

  addPatito() {
    const dialogRef = this.dialog.open(CreateWarehouseComponent, {
      disableClose: true,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.loadData();
      }
    });
  }

  editPatito(warehouse: WarehouseResponse) {
    const dialogRef = this.dialog.open(CreateWarehouseComponent, {
      disableClose: true,
      data: warehouse
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.loadData();
      }
    });
  }

  public delete(warehouse: WarehouseResponse) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {message: "Está seguro que desea eliminar este patito?"},
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        console.log('Ok');
        this.service.delete(warehouse.id).subscribe({
          next: response => {
            this.loadData();
          },
          error: error => {

          }
        });
      }
    });
  }

}
