import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeraRoutingModule } from './primera-routing.module';
import { PrimeraComponent } from './primera.component';


@NgModule({
  declarations: [PrimeraComponent],
  imports: [
    CommonModule,
    PrimeraRoutingModule
  ]
})
export class PrimeraModule { }
