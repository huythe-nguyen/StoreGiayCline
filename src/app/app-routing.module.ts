import { NewComponent } from './test/New/New.component';
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
import { ProfileComponent } from './test/information/profile/profile.component';
import { ChangePasswordComponent } from './test/information/changePassword/changePassword.component';
import { OrderHistoryComponent } from './test/information/order-history/order-history.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components/forgot-password/reset-password/reset-password.component';
import { AboutComponent } from './test/about/about.component';

const routes: Routes = [
  { path: 'new', component: NewComponent },
  { path: 'about', component: AboutComponent },
  { path: 'checkout', component:CheckoutComponent  },
  { path: 'cart', component:CartComponent  },
  { path: 'homes', component: HomeComponent },
  { path: 'detail/:id', component: DetailComponent },
  { path: '', component: BodyHomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'search', component: SearchProductComponent },
  { path: 'information', component: InformationComponent, children: [
    { path: 'profile', component: ProfileComponent},
    { path: 'changPassword', component: ChangePasswordComponent},
    { path: 'history', component: OrderHistoryComponent},
  ]},
  { path: 'forgotPassword', component: ForgotPasswordComponent },
  { path: 'resetPassword/:token', component: ResetPasswordComponent },
  { path: '**', component: PageNotFoundComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
