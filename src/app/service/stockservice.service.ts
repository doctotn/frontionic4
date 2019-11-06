import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class StockserviceService {
  url ="http://localhost:8093/produit";

  constructor(private http: HttpClient) { }
  getDetails(id) {
    //return this.http.get(`${this.url}?i=${id});
  }

  getallproduits(){
    return new Promise(resolve=>{
      this.http.get(this.url+"/findAll",{headers:new HttpHeaders({
        'Content-Type':'application/json'
      })}).subscribe(data=>{resolve(data);},err=>{console.log(err);})
    })
  }
  ajouterproduit(produit){
    return new Promise(resolve =>{
      this.http.post(this.url+'/save',produit,{headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
      
    }).subscribe(data=>{resolve(data);
    
    }, err=>{console.log(err);
    })

    })
  }
  supprimerproduit(ref){
    return new Promise(resolve=>{
      this.http.delete(this.url+'?ref='+ref,{headers:new HttpHeaders({
        'Content-Type':'application/json'
      })}).subscribe(data=>{resolve(data);}, err=>{console.log(err);
      })
    })
  }

  modifierproduit(ref){
    return new Promise(resolve=>{
      this.http.put(this.url+'?ref='+ref,{headers:new HttpHeaders({
        'Content-Type':'application/json'
      })}).subscribe(data=>{resolve(data); },err=>{console.log(err);
    })
  })
}
}
