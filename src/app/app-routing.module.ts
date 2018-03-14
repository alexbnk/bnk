import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InventoryComponent } from './inventory/inventory.component';
import { TestComponent } from './test/test.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AppModule } from './app.module';



// Define routes and corespondent components here
const routes: Routes = [

    { path: '', redirectTo: 'test', pathMatch: 'full'},
    { path: 'inventory', component: InventoryComponent },
    { path: 'test', component: TestComponent },
    // fallback route
    { path: '**', component: PagenotfoundComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]


})

export class AppRoutingModule { }

// this constant contains the components used in routing so we will not import them twice , nere and in the appmodule
export const routingComponents =
    [
        InventoryComponent,
        TestComponent,
        PagenotfoundComponent
    ];
