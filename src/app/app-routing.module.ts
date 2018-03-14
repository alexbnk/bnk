import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { InventoryComponent } from './inventory/inventory.component';




const routes: Routes = [

    { path: 'inventory',  component: InventoryComponent}
]


@NgModule({


})

export class AppRoutingModule {}

// this constant contains the components used in routing so we will not import them twice , nere and in the appmodule
export const routingComponents = [ InventoryComponent ];
