import { InjectionToken,NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient, withFetch} from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from "./component/partials/header/header.component";
import { HomeComponent} from "./component/pages/home/home.component";
import { SearchComponent} from "./component/partials/search/search.component";
import { TagsComponent} from "./component/partials/tags/tags.component";
import { FoodPageComponent} from "./component/pages/food-page/food-page.component";
import { CartPageComponent} from "./component/pages/cart-page/cart-page.component";
import { TitleComponent} from "./component/partials/title/title.component";
import { AboutusComponent } from './aboutus/aboutus.component';
import { MenuComponent } from './menu/menu.component';
import { BookEventComponent} from "./bookevent/bookevent.component";
import { OrderItemsListComponent} from "./component/partials/order-items-list/order-items-list.component";
import { ReactiveFormsModule } from '@angular/forms';
import { TextInputComponent} from "./component/partials/text-input/text-input.component";
import { CheckoutPageComponent } from './component/pages/checkout-page/checkout-page.component';
import { MapComponent } from './component/partials/map/map.component';
import { PaymentPageComponent } from './component/pages/payment-page/payment-page.component';
import { PaypalButtonComponent } from './component/partials/paypal-button/paypal-button.component';
import { NotFoundComponent } from './component/partials/not-found/not-found.component';
import { ToastrModule} from "ngx-toastr";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import { OrderTrackPageComponent } from './component/pages/order-track-page/order-track-page.component';

// import { LoginComponent } from './login/login.component';







@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    TagsComponent,
    FoodPageComponent,
    CartPageComponent,
    TitleComponent,
    AboutusComponent,
    MenuComponent,
    BookEventComponent,
    OrderItemsListComponent,
    TextInputComponent,
    CheckoutPageComponent,
    MapComponent,
    PaymentPageComponent,
    PaypalButtonComponent,
    NotFoundComponent,
    OrderTrackPageComponent,

    // LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    // { provide: TOASTR_CONFIG_TOKEN, useValue:platformBrowserDynamic().bootstrapModule(AppModule)
    //     .catch(err => console.error(err)),
    //   }
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
