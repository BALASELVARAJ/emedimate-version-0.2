import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {NavController} from '@ionic/angular'
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  processing:boolean;
  public uploadImage: any;
  public onRegisterForm: FormGroup;
  constructor( private formBuilder: FormBuilder,  public navCtrl: NavController) { }
  gender: any[] = [
    {
      id: 1,
      name: 'Male'
    },
    {
      id: 2,
      name: 'Female'
    }
  ];
  country: any[] = [
    {
      id: 1,
      name: 'India'
    },
    {
      id: 2,
      name: 'Srilanka'
    }
  ];
  State: any[] = [
    {
      id: 1,
      name: 'Tamilnadu'
    },
    {
      id: 2,
      name: 'Kerala'
    }
  ];
  city: any[] = [
    {
      id: 1,
      name: 'Chennai'
    },
    {
      id: 2,
      name: 'Trichy'
    }
  ];
  pType: any[] = [
    {
      id: 1,
      name: 'Worker'
    },
    {
      id: 2,
      name: 'Seeker'
    }
  ];
  eType: any[] = [
    {
      id: 1,
      name: 'Employee'
    },
    {
      id: 2,
      name: 'Employer'
    }
  ];
  bloodGrp: any[] = [
    {
      id: 1,
      name: 'O+ve'
    },
    {
      id: 2,
      name: 'O-ve'
    },
    {
      id: 3,
      name: 'B+ve'
    }
  ];

  compareFn(c1: any, c2: any): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
}

  ngOnInit() {

    this.onRegisterForm = this.formBuilder.group({
      'name': [null, Validators.compose([
        Validators.required
      ])],
      'password': [null, Validators.compose([
        Validators.required
      ])],
      'confirmPassword': [null, Validators.compose([
        Validators.required
      ])],
      'age': [null, Validators.compose([
        Validators.required
      ])],
      'gender': [null, Validators.compose([
        Validators.required
      ])],
      'country': [null, Validators.compose([
        Validators.required
      ])],
      'city': [null, Validators.compose([
        Validators.required
      ])],
      'contactNo': [null, Validators.compose([
        Validators.required
      ])],
      'pType': [null, Validators.compose([
        Validators.required
      ])],
      'education': [null, Validators.compose([
        Validators.required
      ])],
      'speciality': [null, Validators.compose([
        Validators.required
      ])],
      'etype': [null, Validators.compose([
        Validators.required
      ])],
      'cName': [null, Validators.compose([
        Validators.required
      ])],
      'bloodDonor': [null, Validators.compose([
        Validators.required
      ])],
      'bloodGrp': [null, Validators.compose([
        Validators.required
      ])]
    });

    
  }

  onRegister(){
    console.log(this.onRegisterForm.value)
  }
  goToLogin(){
    this.navCtrl.navigateRoot('/login');

  }
  presentActionSheet(fileLoader) {
    fileLoader.click();
    var that = this;
    fileLoader.onchange = function () {
      var file = fileLoader.files[0];
      console.log(file,'file:::');
      var reader = new FileReader();
      this.uploadImage = reader.result;
      console.log(reader);
      console.log(this.uploadImage);
      reader.addEventListener("load", function () {
        that.processing = true;
        that.getOrientation(fileLoader.files[0], function (orientation) {
          if (orientation > 1) {
            that.resetOrientation(reader.result, orientation, function (resetBase64Image) {
            //  this.uploadImage = resetBase64Image;
            });
          } else {
           // this.uploadImage = reader.result;
          }
        });
      }, false);

      if (file) {
        reader.readAsDataURL(file);
      }
    }
  }
imageLoaded(){
  this.processing = false;
}
getOrientation(file, callback) {
  var reader = new FileReader();
  reader.onload = function (e:any) {

    var view = new DataView(e.target.result);
    if (view.getUint16(0, false) != 0xFFD8) return callback(-2);
    var length = view.byteLength, offset = 2;
    while (offset < length) {
      var marker = view.getUint16(offset, false);
      offset += 2;
      if (marker == 0xFFE1) {
        if (view.getUint32(offset += 2, false) != 0x45786966) return callback(-1);
        var little = view.getUint16(offset += 6, false) == 0x4949;
        offset += view.getUint32(offset + 4, little);
        var tags = view.getUint16(offset, little);
        offset += 2;
        for (var i = 0; i < tags; i++)
          if (view.getUint16(offset + (i * 12), little) == 0x0112)
            return callback(view.getUint16(offset + (i * 12) + 8, little));
      }
      else if ((marker & 0xFF00) != 0xFF00) break;
      else offset += view.getUint16(offset, false);
    }
    return callback(-1);
  };
  reader.readAsArrayBuffer(file);
}
resetOrientation(srcBase64, srcOrientation, callback) {
  var img = new Image();

  img.onload = function () {
    var width = img.width,
      height = img.height,
      canvas = document.createElement('canvas'),
      ctx = canvas.getContext("2d");

    // set proper canvas dimensions before transform & export
    if (4 < srcOrientation && srcOrientation < 9) {
      canvas.width = height;
      canvas.height = width;
    } else {
      canvas.width = width;
      canvas.height = height;
    }

    // transform context before drawing image
    switch (srcOrientation) {
      case 2: ctx.transform(-1, 0, 0, 1, width, 0); break;
      case 3: ctx.transform(-1, 0, 0, -1, width, height); break;
      case 4: ctx.transform(1, 0, 0, -1, 0, height); break;
      case 5: ctx.transform(0, 1, 1, 0, 0, 0); break;
      case 6: ctx.transform(0, 1, -1, 0, height, 0); break;
      case 7: ctx.transform(0, -1, -1, 0, height, width); break;
      case 8: ctx.transform(0, -1, 1, 0, 0, width); break;
      default: break;
    }

    // draw image
    ctx.drawImage(img, 0, 0);

    // export base64
    callback(canvas.toDataURL());
  };

  img.src = srcBase64;
}
removePic() {
  this.uploadImage = null;
}
}
