import { Component, OnInit,Input } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  private requestWorker : FormGroup;
  private requestSeeker : FormGroup;

  @Input() data: {};
  constructor(public modalController: ModalController,
    private navParams : NavParams,
    private formBuilder: FormBuilder) {
      this.requestWorker = this.formBuilder.group({
        workerName: ['', Validators.required],
        city: ['', Validators.required],
        category: ['', Validators.required],
        gender: ['', Validators.required],
        message: [''],
      });
      this.requestSeeker = this.formBuilder.group({
        seekerName: ['', Validators.required],
        city: ['', Validators.required],
        category: ['', Validators.required],
        gender: ['', Validators.required],
        message: [''],
      });
    console.log(this.navParams.data);


   }

  ngOnInit() {
    if(this.navParams.data.workerName){
      this.requestWorker.patchValue(this.navParams.data)
    }
    else{
      this.requestSeeker.patchValue(this.navParams.data)
    }

  }
  logForm(type){
    if(type === 'worker'){
      console.log(this.requestWorker.value)
    }
    else{
      console.log(this.requestSeeker.value)
    }
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }

}
