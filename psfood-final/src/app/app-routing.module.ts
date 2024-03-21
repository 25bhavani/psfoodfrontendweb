import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent} from "./component/pages/cart-page/cart-page.component";
import { FoodPageComponent} from "./component/pages/food-page/food-page.component";
import { HomeComponent} from "./component/pages/home/home.component";
import { AboutusComponent } from './aboutus/aboutus.component';
import { MenuComponent } from './menu/menu.component';
import { BookEventComponent} from "./bookevent/bookevent.component";
import { TextInputComponent} from "./component/partials/text-input/text-input.component";
import { CheckoutPageComponent} from "./component/pages/checkout-page/checkout-page.component";
import { PaymentPageComponent } from './component/pages/payment-page/payment-page.component';
import { NotFoundComponent } from "./component/partials/not-found/not-found.component";
import {OrderTrackPageComponent} from "./component/pages/order-track-page/order-track-page.component";


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search/:searchTerm', component: HomeComponent },
  { path: 'tag/:tag', component: HomeComponent },
  {path:'food/:id', component:FoodPageComponent},
  {path:'cart-page', component: CartPageComponent},
  {path:'aboutus', component:AboutusComponent},
  {path:'menu',component:MenuComponent},
  {path:'home',component:HomeComponent},
  {path:'bookevent',component:BookEventComponent},
  {path:'checkout-page',component:CheckoutPageComponent},
  // {path:'payment',component:PaymentPageComponent},
  {path:'not-found',component:NotFoundComponent},
  {path:'track/:orderId', component: OrderTrackPageComponent},
  { path: 'payment-page', component: PaymentPageComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
