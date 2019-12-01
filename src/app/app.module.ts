import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { ModalPage } from '../app/modal/modal.page';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpModule } from '@angular/http';


import { InterceptorProvider } from 'src/app/services/interceptor';
import { ApiProvider } from 'src/app/api/api';
import { DeviceServices } from 'src/app/services/device';
import { UserProvider } from 'src/app/services/user';
import { Device } from '@ionic-native/device/ngx';
import { ToastServices } from 'src/app/services/toast';
import { LoaderServices } from 'src/app/services/loader';
import { EncryptionServices } from './services/encryption';

import { Camera } from '@ionic-native/Camera/ngx';
import { File } from '@ionic-native/File/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { IonicStorageModule } from '@ionic/storage';





@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    AppRoutingModule,
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorProvider, multi: true },
    ApiProvider,
    DeviceServices,
    UserProvider,
    Device,
    ToastServices,
    LoaderServices,
    DeviceServices,
    EncryptionServices,
    ApiProvider,
    InterceptorProvider,
    Camera,
    File,
    WebView,
    FilePath
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
