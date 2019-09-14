import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersModule } from './customers/customers.module';

const routes: Routes = [
  {
    path: 'orders',
    loadChildren: () => import('./orders/orders.module').then(ordersModule => ordersModule.OrdersModule),
  },
  {
    path: 'customers',
    loadChildren: () => import('./customers/customers.module').then(customersModule => customersModule.CustomersModule),
  },
  {
    path: 'items',
    loadChildren: () => import('./items/items.module').then(itemsModule => itemsModule.ItemsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
