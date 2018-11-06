import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatCardModule, MatListModule,],
  exports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatCardModule, MatListModule,],
})
export class MaterialModule { }