import { Component, OnInit } from '@angular/core';
import { StockserviceService } from '../service/stockservice.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-gestion-stock',
  templateUrl: './gestion-stock.page.html',
  styleUrls: ['./gestion-stock.page.scss'],
})
export class GestionStockPage implements OnInit {
  produit:any;
  ref:String;
  quantite:number;  
  desi:String;
  prix:number;
  constructor(public stockservice:StockserviceService ) {
     

   }

  ngOnInit() {
  }
  
  public modifierproduit(ref,quantite,desi,prix){
    this.produit={
      'ref':ref,
      'quantite':quantite,
      'designation':desi,
      'prix':prix,
    }
    console.log(this.produit);
    this.stockservice.modifierproduit(this.produit).then(data=>{console.log(data);})
  }
    public supprimerproduit(ref){
      this.stockservice.supprimerproduit(this.produit).then(data=>{console.log(data);})
      
    }
    public getallproduits(){
      this.stockservice.getallproduits().then(data=>{console.log(data);});

    }
  }

