import { Component, OnInit } from '@angular/core';
import { StockserviceService } from '../service/stockservice.service';

@Component({
  selector: 'app-ajouter-produit',
  templateUrl: './ajouter-produit.page.html',
  styleUrls: ['./ajouter-produit.page.scss'],
})
export class AjouterProduitPage implements OnInit {
  produit:any;
  ref:String;
  quantite:number;  
  desi:String;
  prix:number;
  constructor(public stockservice:StockserviceService ) {
     

   }
  ngOnInit() {
  }
  public ajouterproduit(ref,quantite,desi,prix){
    this.produit={
      'ref':ref,
      'quantite':quantite,
      'designation':desi,
      'prix':prix,
    }
    console.log(this.produit);
     this.stockservice.ajouterproduit(this.produit).then(data=>{console.log(data);})
   
  }
}
