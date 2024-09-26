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
    MyproductsComponent
  ],
  imports: [
    CommonModule,
    EcomerceRoutingModule,
    BadgeModule,
    OverlayPanelModule,
    SharedModule,
    PanelModule,
    RouterModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class EcomerceModule { }
