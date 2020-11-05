import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SegundoRoutingModule } from './segundo-routing.module';
import { SegundoComponent } from './segundo.component';


@NgModule({
  declarations: [SegundoComponent],
  imports: [
    CommonModule,
    SegundoRoutingModule
  ]
})
export class SegundoModule { }
