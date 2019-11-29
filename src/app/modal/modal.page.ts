import { Component, OnInit,Input } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  private request : FormGroup;

  @Input() data: {};
  constructor(public modalController: ModalController,
    private navParams : NavParams,
    private formBuilder: FormBuilder) {
      this.request = this.formBuilder.group({
        workerName: ['', Validators.required],
        city: ['', Validators.required],
        category: ['', Validators.required],
        gender: ['', Validators.required],
        message: [''],
      });
    console.log(this.navParams.data);

   }

  ngOnInit() {
    this.request.patchValue(this.navParams.data)
  }
  logForm(){
    console.log(this.request.value)
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }

}
