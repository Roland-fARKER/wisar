import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './views/home/home.component';
import { EcomerceRoutingModule } from './ecomerce.routing';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { BadgeModule } from 'primeng/badge';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { HeaderComponent } from './components/header/header.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
    SearchBarComponent
  ],
  imports: [
    CommonModule,
    EcomerceRoutingModule,
    BadgeModule,
    OverlayPanelModule,
    SharedModule
  ]
})
export class EcomerceModule { }
