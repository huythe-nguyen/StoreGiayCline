import { CheckoutComponent } from './test/checkout/checkout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyHomeComponent } from './body-home/body-home.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProductAllComponent } from './components/product-all/product-all.component';
import { ProductCartComponent } from './components/product-cart/product-cart.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { RegisterComponent } from './components/register/register.component';
import { NavComponent } from './nav/nav.component';
import { CartComponent } from './test/cart/cart.component';
import { DetailComponent } from './test/detail/detail.component';
import { HomeComponent } from './test/home/home.component';

const routes: Routes = [
  { path: 'checkout', component:CheckoutComponent  },
  { path: 'cart', component:CartComponent  },
  { path: 'homes', component:HomeComponent  },
  { path: 'detail/:id', component: DetailComponent },
  { path: '', component: BodyHomeComponent },
  { path: 'home', component: NavComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'tat-ca-san-pham', component: ProductAllComponent},
  { path: 'gio-hang', component: ProductCartComponent},
  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
