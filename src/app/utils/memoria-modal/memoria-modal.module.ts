import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MemoriaModalPageRoutingModule } from './memoria-modal-routing.module';

import { MemoriaModalPage } from './memoria-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MemoriaModalPageRoutingModule
  ],
  declarations: [MemoriaModalPage]
})
export class MemoriaModalPageModule {}
