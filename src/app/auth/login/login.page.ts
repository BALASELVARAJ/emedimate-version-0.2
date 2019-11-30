import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, MenuController, ToastController, AlertController, LoadingController } from '@ionic/angular';
import { Platform } from '@ionic/angular';
import { DeviceServices } from 'src/app/services/device';
import { LoaderServices } from 'src/app/services/loader';
import { ApiProvider } from 'src/app/api/api';
import { EncryptionServices } from 'src/app/services/encryption';
import { UserProvider } from 'src/app/services/user';
import { ToastServices } from 'src/app/services/toast';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public onLoginForm: FormGroup;
  userDevice: any;
  isSignIn : boolean = false;


  isPass: boolean = false;
  passwordType: string = 'password';
  passwordIcon: string = 'eye-off';





  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    private formBuilder: FormBuilder,
    private _deviceServices: DeviceServices,
     platform: Platform, 
    private _loader: LoaderServices,
    private _encrypt :EncryptionServices,
    private _apiService : ApiProvider,
    private _userInfo: UserProvider,
    private _toast:ToastServices
  ) {
        console.log(this._deviceServices)
    platform.ready().then((source) => {
      this.userDevice = this._deviceServices.deviceInfo.platform;
    });

   }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  ngOnInit() {

    this.onLoginForm = this.formBuilder.group({
      'email': [null, Validators.compose([
        Validators.required
      ])],
      'password': [null, Validators.compose([
        Validators.required
      ])]
    });
  }

  async forgotPass() {
    const alert = await this.alertCtrl.create({
      header: 'Forgot Password?',
      message: 'Enter you email address to send a reset link password.',
      inputs: [
        {
          name: 'email',
          type: 'email',
          placeholder: 'Email'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Confirm',
          handler: async () => {
            const loader = await this.loadingCtrl.create({
              duration: 2000
            });

            loader.present();
            loader.onWillDismiss().then(async l => {
              const toast = await this.toastCtrl.create({
                showCloseButton: true,
                message: 'Email was sended successfully.',
                duration: 3000,
                position: 'bottom'
              });

              toast.present();
            });
          }
        }
      ]
    });

    await alert.present();
  }

  // // //
  goToRegister() {
    this.navCtrl.navigateRoot('/register');
  }

  hideShowPassword(input) {
    console.log('input', input);
    // input.setFocus();
    this.isPass = !this.isPass;
    this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
  }
  submit() {
    let signInData: any = {};
    this._encrypt.convert(this.onLoginForm.controls.password.value);
    if(this._deviceServices.deviceInfo.platform == 'Android' || this._deviceServices.deviceInfo.platform == 'iOS'){
      signInData = {
        emailID: this.onLoginForm.controls.email.value,
        password: this.onLoginForm.controls.password.value,
        deviceID: this._deviceServices.deviceInfo.id,
        deviceToken: this._deviceServices.deviceInfo.id,
        osName: this._deviceServices.deviceInfo.os,
        modelName: this._deviceServices.deviceInfo.model,
        osVersion: this._deviceServices.deviceInfo.version,
        platform: this._deviceServices.deviceInfo.platform
      }
    }else {
      signInData = {
        emailID: this.onLoginForm.controls.email.value,
        password: this.onLoginForm.controls.password.value,
        deviceID:"",
        deviceToken:"",
        osName:"",
        modelName:"",
        osVersion:"",
        platform: ""
      }
    }
    this.signIn(signInData);
  }
  private signIn(signInData){
    let signedInData: any = {};
    this.isSignIn = true;
    this._loader.presentLoading();
    this._apiService.signIn(signInData)
    .subscribe((data:any) => { 
        this.isSignIn = false;
        this._loader.dissmiss();
        if (data.statusCode == 200) {
          data["issued"] = data[".issued"];
          delete data[".issued"];
          data["expired"] = data[".expired"];
          delete data[".expired"];
          signedInData = {
            access_token :  data.access_token,
            token_type :  data.token_type,
            expires_in :  data.expires_in,
            emailID :  data.emailID,
            UserID :  data.UserID,
            roleID :  data.roleID,
            deviceID :  data.deviceID,
            isChangePassword :  data.isChangePassword,
            issued :  data.issued,
            expired :  data.expired 
          }
          this._userInfo.updateSignedInData(signedInData);
          // this._userInfo.updateSignInData(signInData);
          if(this._userInfo.IsChangePassword == "false"){
            this.navCtrl.navigateRoot('/register');
          }else {
            this.navCtrl.navigateRoot('/tabs');   
          
          }
        }else {
          this._toast.presentToast(data.statusMessage, data.statusCode, "");
        }
    }, err => {
        this._loader.dissmiss();
        this.isSignIn = false;
    });
  }


}
