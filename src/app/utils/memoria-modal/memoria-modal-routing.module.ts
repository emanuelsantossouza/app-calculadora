import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MemoriaModalPage } from './memoria-modal.page';

const routes: Routes = [
  {
    path: '',
    component: MemoriaModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MemoriaModalPageRoutingModule {}
