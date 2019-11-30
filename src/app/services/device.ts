// import { Http, Headers, RequestOptions } from '@angular/http';
// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import 'rxjs/Rx';
import { Platform } from '@ionic/angular';
import { Device } from '@ionic-native/device/ngx';
/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DeviceServices {
  public deviceInfo: deviceInterface = {};
  osId: string = '2';
  constructor(private device: Device,platform: Platform) {
    platform.ready().then(() => {
        this.getDeviceDetails();
    });
  }
  getDeviceDetails(){
    this.deviceInfo.id = this.device.uuid;
    this.deviceInfo.model = this.device.model;
    this.deviceInfo.platform = this.device.platform;
    this.deviceInfo.version = this.device.version;
    this.deviceInfo.os = this.device.platform +' '+ this.device.version;
  }
}
interface deviceInterface {
  id?: string,
  model?: string,
  cordova?: string,
  platform?: string,
  version?: string,
  manufacturer?: string,
  serial?: string,
  os?: string,
  isVirtual?: boolean,
 
};
