import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { LoaderComponent } from './components/loader/loader.component';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { ListboxModule } from 'primeng/listbox';
import { DividerModule } from 'primeng/divider';
import { CheckboxModule } from 'primeng/checkbox';

@NgModule({
  declarations: [ LoaderComponent ],
  imports: [
    CommonModule,
    ButtonModule,
    CardModule,
    InputGroupModule,
    InputGroupAddonModule,
    InputTextModule,
    FormsModule,
    ToastModule,
    ScrollPanelModule,
    AvatarModule,
    AvatarGroupModule,
    ListboxModule,
    DividerModule,
    CheckboxModule
  ],
  exports: [
    ButtonModule,
    LoaderComponent,
    CardModule,
    InputGroupModule,
    InputGroupAddonModule,
    InputTextModule,
    FormsModule,
    ToastModule,
    ScrollPanelModule,
    AvatarModule,
    AvatarGroupModule,
    ListboxModule,
    DividerModule,
    CheckboxModule
  ],
  providers: [ MessageService ]
})
export class SharedModule { }
