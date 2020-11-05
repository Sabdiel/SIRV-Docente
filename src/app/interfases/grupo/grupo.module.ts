import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { GrupoRoutingModule } from './grupo-routing.module';
import { GrupoComponent } from './grupo.component';


@NgModule({
  declarations: [GrupoComponent],
  imports: [
    CommonModule,
    GrupoRoutingModule,
    FormsModule,
  ]
})
export class GrupoModule { }
