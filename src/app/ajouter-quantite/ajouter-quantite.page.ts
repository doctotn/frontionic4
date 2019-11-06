import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-ajouter-quantite',
  templateUrl: './ajouter-quantite.page.html',
  styleUrls: ['./ajouter-quantite.page.scss'],
})
export class AjouterQuantitePage implements OnInit {
  ref:number;
  quantite:number;
 
  constructor(private modalCtrl:ModalController ) { }

  ngOnInit() {
  }
   async closeModal()
  {
    
    await this.modalCtrl.dismiss();
  }
}
