import { TopbarComponent } from './test/topbar/topbar.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';

import { BodyHomeComponent } from './body-home/body-home.component';
// import {IvyCarouselModule} from 'angular-responsive-carousel';
import { ProductDisplayComponent } from './components/product-display/product-display.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {CarouselModule} from 'primeng/carousel';
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// import {ImageModule} from 'primeng/image';
import {LoginComponent} from './components/login/login.component';
import {DialogModule} from 'primeng/dialog';
import { HttpClientModule } from '@angular/common/http';
import { RestApiService } from './service/rest-api.service';
import { DataService } from './service/data.service';
import { RegisterComponent } from './components/register/register.component';
import { DetailComponent } from './test/detail/detail.component';
import { HomeComponent } from './test/home/home.component';
import { NavbarComponent } from './test/navbar/navbar.component';
import { FilterBarComponent } from './test/filter-bar/filter-bar.component';
import { FooterComponent } from './test/footer/footer.component';
import { CartComponent } from './test/cart/cart.component';
import { CheckoutComponent } from './test/checkout/checkout.component';
import { SearchProductComponent } from './components/search-product/search-product.component';
import { FilterPipe } from './shared/filter.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import {SliderModule} from 'primeng/slider';
import { InformationComponent } from './test/information/information.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyHomeComponent,
    ProductDisplayComponent,
    LoginComponent,
    RegisterComponent,
    TopbarComponent,
    DetailComponent,
    HomeComponent,
    NavbarComponent,
    FilterBarComponent,
    FooterComponent,
    CartComponent,
    CheckoutComponent,
    SearchProductComponent,
    FilterPipe,
    InformationComponent,
    PageNotFoundComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    NgbModule,
    CarouselModule,
    ButtonModule,
    ToastModule,
    FormsModule,
    NgbModule,
    SliderModule,
    DialogModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [RestApiService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
