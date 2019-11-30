import { Platform } from '@ionic/angular';
import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
 
import { Observable } from 'rxjs';
import { _throw } from 'rxjs/observable/throw';
import { catchError} from 'rxjs/operators';
import 'rxjs/Rx';

import { ToastServices } from './toast';
import { UserProvider } from './user';
import { Network } from '@ionic-native/network/ngx';
/*
  Generated class for the InterceptorProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class InterceptorProvider {
  currentPlatform: any;
  constructor(private storage: Storage, private _toast: ToastServices, private _user: UserProvider, private network: Network, private platform: Platform) {
  }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.platform.ready().then((readySource) => {
      this.currentPlatform = readySource;
    });
    if(this.currentPlatform == 'android' || this.currentPlatform == 'ios'){
      let networkType = this.network.type;
      if (!networkType) {
        this._toast.presentToast('Connection Error, Please check network connection', 400 , '');
      }else{
        let promise = this.storage.get('my_token');
        return Observable.fromPromise(promise)
        .mergeMap(token => {
            let clonedReq = this.addToken(request, token);
            return next.handle(clonedReq).pipe(
                catchError(error => {
                    this._toast.presentToast(error.error.statusMessage, 400 ,'');
                    this._user.clearAutoLoginData();
                    return _throw(error);
                })
            );
        });
      }
    }else {
      let Network = navigator.onLine;
      if(!Network){
        this._toast.presentToast('Connection Error, Please check network connection', 400 , '');
      }else {
        let promise = this.storage.get('my_token');
        return Observable.fromPromise(promise)
        .mergeMap(token => {
            let clonedReq = this.addToken(request, token);
            return next.handle(clonedReq).pipe(
                catchError(error => {
                    this._toast.presentToast(error.error.statusMessage, 400 ,'');
                    this._user.clearAutoLoginData();
                    return _throw(error);
                })
            );
        });
      }
    }
    
  }
  // Adds the token to your headers if it exists
  private addToken(request: HttpRequest<any>, token: any) { 
    let clone: HttpRequest<any>;
    if (this._user.UserID == '') {
      clone = request.clone({
          setHeaders: {
            'Content-Type': `application/json`,
          }
      });
    }else {
      clone = request.clone({
          setHeaders: {
            'Content-Type': `application/json`,
            'Authorization': this._user.Token_type + ' ' + this._user.Access_token,
            'UserID': this._user.UserID
          }
      });
    }
    return clone;
  }
}
