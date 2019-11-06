import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  { path: 'gestion-stock', 
  loadChildren: './gestion-stock/gestion-stock.module#GestionStockPageModule' },
  { path: 'consulter-stock', 
  loadChildren: './consulter-stock/consulter-stock.module#ConsulterStockPageModule' },
  { path: 'ajouter-produit', loadChildren: './ajouter-produit/ajouter-produit.module#AjouterProduitPageModule' },
  { path: 'modifier-produit', loadChildren: './modifier-produit/modifier-produit.module#ModifierProduitPageModule' },
  { path: 'ajouter-quantite', 
  loadChildren: './ajouter-quantite/ajouter-quantite.module#AjouterQuantitePageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
