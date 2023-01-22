import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';

const COMPONENTS: any[] = [
  MatToolbarModule,
  MatCardModule,
  MatIconModule,
  MatButtonModule,
  MatBadgeModule,
  MatInputModule,
  MatSelectModule,
  MatMenuModule,
];

@NgModule({
  declarations: [],
  imports: COMPONENTS,
  exports: COMPONENTS,
})
export class MaterialModule {}
