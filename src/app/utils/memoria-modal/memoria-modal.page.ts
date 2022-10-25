import { Component, OnInit } from '@angular/core';
import { IMmemoria } from 'src/app/models/IMemoria.models';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-memoria-modal',
  templateUrl: './memoria-modal.page.html',
  styleUrls: ['./memoria-modal.page.scss'],
})
export class MemoriaModalPage implements OnInit {
  memoria: IMmemoria[];

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  fechar() {
    this.modalCtrl.dismiss();
  }
}
