import { Component, OnInit } from '@angular/core';
import { StockserviceService } from '../service/stockservice.service';
import { ModalController } from '@ionic/angular';
import { AjouterQuantitePage } from '../ajouter-quantite/ajouter-quantite.page';
@Component({
  selector: 'app-consulter-stock',
  templateUrl: './consulter-stock.page.html',
  styleUrls: ['./consulter-stock.page.scss'],
})
export class ConsulterStockPage implements OnInit {
  dataReturned:any; 
  produit:any [];
  ref:String;
  quantite:number;  
  desi:String;
  prix:number;

  constructor(public stockservice:StockserviceService,public modalController: ModalController ) {
    this.getallproduits();
   }

  ngOnInit() {
    
  }
  
  public getallproduits(){
   return this.stockservice.getallproduits().then(data=>{console.log(data);
    

  
    
    });


  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: AjouterQuantitePage
    });
    return await modal.present();
  }
   
}
