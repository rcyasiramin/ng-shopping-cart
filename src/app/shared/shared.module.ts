import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import * as components from './components';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

const declarations: any[] = [...components.sharedComponents];

const modules: any[] = [
  CommonModule,
  MaterialModule,
  ReactiveFormsModule,
  RouterModule,
];

@NgModule({
  declarations: declarations,
  imports: modules,
  exports: [...declarations, ...modules],
})
export class SharedModule {}
