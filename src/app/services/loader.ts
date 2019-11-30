/**
 * Created By Balaganesh
 * Toast Service
 */
import { Injectable } from '@angular/core';
// import { Toast, ToastOptions } from '@ionic-native/toast';
import { LoadingController } from '@ionic/angular';

@Injectable()
export class LoaderServices {
    loading: any;
    isloader: boolean = false;
    constructor(private loadingCtrl: LoadingController) {
    }
    async presentLoading() {
        this.isloader = true;
        if(!this.loading){
            this.loading = await this.loadingCtrl.create({
                spinner: 'lines',
            });
            return await this.loading.present();
        }
    }
    async dissmiss(){
        await this.loading;
        if(this.loading){
            this.loading.dismiss();
            this.loading = null;
        }
    }
}
