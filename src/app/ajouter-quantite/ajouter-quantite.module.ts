import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AjouterQuantitePage } from './ajouter-quantite.page';

const routes: Routes = [
  {
    path: '',
    component: AjouterQuantitePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AjouterQuantitePage]
})
export class AjouterQuantitePageModule {}
