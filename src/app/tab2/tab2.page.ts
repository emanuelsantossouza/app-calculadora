import { Component } from '@angular/core';
import { evaluate, sqrt } from 'mathjs';
import { IMmemoria } from '../models/IMemoria.models';

import { ModalController } from '@ionic/angular';
import { MemoriaModalPage } from '../utils/memoria-modal/memoria-modal.page';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  operacao = '';
  resultado = '';
  numero = false;
  caracter = true;
  caracteres = ['.', '/', '*', '-']; //controle 

  memoria:IMmemoria[] = [];

  constructor(private modalCtrl: ModalController) {} 

  ngOnInit() {}


  async openModal() {
    const modal = await this.modalCtrl.create({
      component: MemoriaModalPage,
      componentProps: {
        memoria:this.memoria,
      }
    });
    modal.present();

  }

  maisMemoria(){
    if (this.operacao != '') {
    this.calcularOperacao();   
    const memoria = this.memoria[this.memoria,length -1];
    const novaMemoria: IMmemoria = {
      operacao: `${this.resultado} + ${memoria.resultado}`,
      resultado: Number(this.resultado) + memoria.resultado,
    };
    this.memoria.push(novaMemoria);
    console.log('Adicionou:', this.memoria);
   }
  }  
  
    menosMemoria() {
        const memoria = this.memoria[this.memoria,length -1];
        const novaMemoria: IMmemoria = {
          operacao: `${this.resultado} + ${memoria.resultado}`,
          resultado: Number(this.resultado) - memoria.resultado,
        };
        this.memoria.push(novaMemoria);
        console.log('Adicionou:', this.memoria);
    }

  limparCampo() {
    this.memoria = [];
  }

  showMemoria(){
    const memoria = this.memoria[this.memoria.length - 1];
    this.operacao = memoria.operacao;
    this.resultado = memoria.resultado.toString();
  }

  adicionarMemoria(){
    if (this.operacao != '' && this.resultado != ''){
      const memoria: IMmemoria = {
        operacao: this.operacao,
        resultado: Number(this.resultado),
      };

      this.memoria.push(memoria);
      
    }else if(this.operacao != '' && this.resultado == ''){
      this.calcularOperacao();
    }else{
    }

    console.log(this.memoria)
  }

  SomarMemoria(){
    if (this.operacao != '' && this.resultado != ''){
      const memoria: IMmemoria = {
        operacao: this.operacao,
        resultado: Number(this.resultado),
      };

      this.memoria.push(memoria);
      
    }else if(this.operacao != '' && this.resultado == ''){
      this.calcularOperacao();
    }else{
    }

    console.log(this.memoria)
  }

  LimparMemoria(){
    if (this.operacao != '' && this.resultado != ''){
      const memoria: IMmemoria = {
        operacao: this.operacao,
        resultado: Number(this.resultado),
      };

      this.memoria.push(memoria);
      
    }else if(this.operacao != '' && this.resultado == ''){
      this.calcularOperacao();
    }else{
    }

    console.log(this.memoria)
  }

  
  calcularOperacao(){
      try{ //trara erro
        this.resultado = evaluate(this.operacao);
      } catch (err) {
        this.resultado = 'Invalido!';
      }
    
  }

  adicionarValor(valor: string) {
    this.caracter = this.caracteres.includes(valor); // transdormando o caracter em stringr

    if (!this.caracter) { // fazer o teste de validação
      this.operacao += valor;
      this.numero = true;
    } else if (this.caracter && this.numero) {
      this.operacao += valor;
      this.numero = false;
    }
  }
    
  limparMemoria() {
    this.operacao = '';
    this.resultado = '';
    this.numero = false;
  }

  limparOperacao() {
    this.operacao = '';
    this.numero = false;
  }

  
  apagarCaracter(){
    if(this.operacao.length > 0) {
      this.operacao = this.operacao.substring(0, this.operacao.length -1);  // substring, pega o utlimo numero 
    }

    const ultimo = this.operacao.substring(this.operacao.length, 1);  // validação
    this.caracter = this.caracteres.includes(ultimo);

    console.log(ultimo);

    if (!this.caracter) {
      this.numero = true;
    } else {
      this.numero = false
    }
  }
}
