import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PbcashPage } from './pbcash.page';

const routes: Routes = [
  {
    path: '',
    component: PbcashPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PbcashPageRoutingModule {}
