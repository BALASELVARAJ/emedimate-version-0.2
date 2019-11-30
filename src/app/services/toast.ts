/**
 * Created By Balaganesh 30/11/2019
 * Toast Service
 */
import { Injectable } from '@angular/core';
// import { Toast, ToastOptions } from '@ionic-native/toast';
import { ToastController } from '@ionic/angular';

@Injectable()
export class ToastServices {
    constructor(private toastCtrl: ToastController) {
    }
   async presentToast(msg, statusCode, flag) {
    let toast = await this.toastCtrl.create({
        message: msg,
        duration: 1500,
        position: 'bottom'
        });
        toast.present()
    }

}
