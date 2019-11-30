import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { IonicModule } from '@ionic/angular';

import { LoginPage } from './login.page';
import { InterceptorProvider } from 'src/app/services/interceptor';
import { ApiProvider } from 'src/app/api/api';
import { DeviceServices } from 'src/app/services/device';
import { UserProvider } from 'src/app/services/user';
import { Device} from '@ionic-native/device/ngx';
import { ToastServices } from 'src/app/services/toast';
import { LoaderServices } from 'src/app/services/loader';

const routes: Routes = [
  {
    path: '',
    component: LoginPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LoginPage],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorProvider, multi: true },
    ApiProvider,
    DeviceServices,
    UserProvider,
    Device,
    ToastServices,
    LoaderServices,
    DeviceServices,
    InterceptorProvider
  ]


})
export class LoginPageModule {}
