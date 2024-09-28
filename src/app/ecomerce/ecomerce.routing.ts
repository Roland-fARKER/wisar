import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { ProfileComponent } from './views/profile/profile.component';
import { PersonalInfoComponent } from './components/personal-info/personal-info.component';
import { MitiendaComponent} from './components/mitienda/mitienda.component';
import { CreateShopComponent } from './components/create-shop/create-shop.component';
import { MyproductsComponent } from './components/myproducts/myproducts.component';
import { MyCouponsComponent } from './components/my-coupons/my-coupons.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent ,
    children: [
      { path: '', redirectTo: 'personal-info', pathMatch: 'full' }, 
      { path: 'personal-info', component: PersonalInfoComponent },
      { path: 'my-shop', component: MitiendaComponent },
      { path: 'create-shop', component: CreateShopComponent },
      { path: 'my-products', component: MyproductsComponent },
      { path: 'my-coupons', component: MyCouponsComponent  }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EcomerceRoutingModule {}
