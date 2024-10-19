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
import { MessagesModule } from 'primeng/messages';
import { ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { StepperModule } from 'primeng/stepper';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FileUploadModule } from 'primeng/fileupload';
import { HttpClientModule } from '@angular/common/http';
import { DialogModule } from 'primeng/dialog';
import { TabViewModule } from 'primeng/tabview';

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
    CheckboxModule,
    MessagesModule,
    ReactiveFormsModule,
    DropdownModule,
    StepperModule,
    FloatLabelModule,
    FileUploadModule,
    DialogModule,
    TabViewModule
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
    CheckboxModule,
    MessagesModule,
    ReactiveFormsModule,
    DropdownModule,
    StepperModule,
    FloatLabelModule,
    FileUploadModule,
    HttpClientModule,
    DialogModule,
    TabViewModule
  ],
  providers: [ MessageService ]
})
export class SharedModule { }
