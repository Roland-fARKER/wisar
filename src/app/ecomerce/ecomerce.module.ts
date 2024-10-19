import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { EcomerceRoutingModule } from './ecomerce.routing';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { BadgeModule } from 'primeng/badge';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { HeaderComponent } from './components/header/header.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SharedModule } from '../shared/shared.module';
import { ProductlistComponent } from './components/productlist/productlist.component';
import { ProfileComponent } from './views/profile/profile.component';
import { PanelModule } from 'primeng/panel';
import { PersonalInfoComponent } from './components/personal-info/personal-info.component';
import { MitiendaComponent } from './components/mitienda/mitienda.component';
import { CreateShopComponent } from './components/create-shop/create-shop.component';
import { MyproductsComponent } from './components/myproducts/myproducts.component';
import { ProductCartComponent } from './components/product-cart/product-cart.component';
import { CarouselModule } from 'primeng/carousel';
import { TruncatePipe } from './pipes/truncate.pipe';
import { MyCouponsComponent } from './components/my-coupons/my-coupons.component';
import { InputNumberModule } from 'primeng/inputnumber';
import { CheckboxModule } from 'primeng/checkbox';
import { CalendarModule } from 'primeng/calendar';
import { FileUploadModule } from 'primeng/fileupload';
import { SelectButtonModule } from 'primeng/selectbutton';
import { CarruselInfoComponent } from './components/carrusel-info/carrusel-info.component';
import { LtsProdComponent } from './views/lts-prod/lts-prod.component';
import { PasarelaComponent } from './views/pasarela/pasarela.component';

@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
    SearchBarComponent,
    ProductlistComponent,
    ProfileComponent,
    PersonalInfoComponent,
    MitiendaComponent,
    CreateShopComponent,
    MyproductsComponent,
    ProductCartComponent,
    TruncatePipe,
    MyCouponsComponent,
    CarruselInfoComponent,
    LtsProdComponent,
    PasarelaComponent
  ],
  imports: [
    CommonModule,
    EcomerceRoutingModule,
    BadgeModule,
    OverlayPanelModule,
    SharedModule,
    PanelModule,
    RouterModule,
    CarouselModule,
    InputNumberModule,
    CheckboxModule,
    CalendarModule,
    FileUploadModule,
    SelectButtonModule
  ],
  exports:[NavbarComponent, FooterComponent ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class EcomerceModule { }
