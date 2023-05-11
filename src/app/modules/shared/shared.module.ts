import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { CardPanelComponent } from './components/card-panel/card-panel.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ColorPipe } from './pipes/color.pipe';
import { SizePipe } from './pipes/size.pipe';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';

const modules = [
  CommonModule,
  ReactiveFormsModule,
  MaterialModule,
];

const components = [
  CardPanelComponent,
];

@NgModule({
  declarations: [...components, ColorPipe, SizePipe, ConfirmationDialogComponent],
  imports: [...modules],
  exports: [...modules, ...components, ColorPipe, SizePipe]
})
export class SharedModule { }
