import { CheckoutComponent } from './test/checkout/checkout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyHomeComponent } from './body-home/body-home.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RegisterComponent } from './components/register/register.component';
import { CartComponent } from './test/cart/cart.component';
import { DetailComponent } from './test/detail/detail.component';
import { HomeComponent } from './test/home/home.component';
import { SearchProductComponent } from './components/search-product/search-product.component';
import { InformationComponent } from './test/information/information.component';

const routes: Routes = [
  { path: 'checkout', component:CheckoutComponent  },
  { path: 'cart', component:CartComponent  },
  { path: 'homes', component: HomeComponent },
  { path: 'detail/:id', component: DetailComponent },
  { path: '', component: BodyHomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'search', component: SearchProductComponent },
  { path: 'information', component: InformationComponent},
  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
