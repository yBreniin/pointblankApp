import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PbcashPageRoutingModule } from './pbcash-routing.module';

import { PbcashPage } from './pbcash.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PbcashPageRoutingModule
  ],
  declarations: [PbcashPage]
})
export class PbcashPageModule {}
