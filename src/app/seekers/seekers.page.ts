import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';



export interface seekerData {
  id: string;
  seekerName: string;
  gender: string;
  city: string,
  category: string
}


const SEEKER_DATA: seekerData[] = [{
    'id': '5d0e240f9f1e950bc61fb9bf',
    'seekerName': 'Finley Burnett',
    'gender': 'male',
    'city': 'Ogema',
    'category': 'heart'
  },
  {
    'id': '5d0e240f8de790e72a4198b9',
    'seekerName': 'Lilly Bolton',
    'gender': 'female',
    'city': 'Frierson',
    'category': 'heart'
  },
  {
    'id': '5d0e240fcbf91eec9ab8c10e',
    'seekerName': 'Maggie Knox',
    'gender': 'female',
    'city': 'Limestone',
    'category': 'heart'
  },
  {
    'id': '5d0e240f150b00ececf09266',
    'seekerName': 'Nettie Ratliff',
    'gender': 'female',
    'city': 'Brownlee',
    'category': 'heart'
  },
  {
    'id': '5d0e240ffcbac6ef819134aa',
    'seekerName': 'Mcfarland York',
    'gender': 'male',
    'city': 'Verdi',
    'category': 'heart'
  },
  {
    'id': '5d0e240f73b0a6a7e7ae01e8',
    'seekerName': 'Jefferson Leon',
    'gender': 'male',
    'city': 'Onton',
    'category': 'heart'
  },
  {
    'id': '5d0e240fff9a6f61d6d8e66f',
    'seekerName': 'Guthrie Prince',
    'gender': 'male',
    'city': 'Murillo',
    'category': 'heart'
  },
  {
    'id': '5d0e240fd6f5ef2fdcf8f1b4',
    'seekerName': 'Leslie Carey',
    'gender': 'female',
    'city': 'Harviell',
    'category': 'heart'
  },
  {
    'id': '5d0e240f919fd6f0532b8f5b',
    'seekerName': 'Yates Barron',
    'gender': 'male',
    'city': 'Balm',
    'category': 'heart'
  },
  {
    'id': '5d0e240fa602aa5dfbd88b83',
    'seekerName': 'Jessica Stokes',
    'gender': 'female',
    'city': 'Emerald',
    'category': 'heart'
  },
  {
    'id': '5d0e240ff645b05e382914a6',
    'seekerName': 'Cline Carlson',
    'gender': 'male',
    'city': 'Hillsboro',
    'category': 'heart'
  },
  {
    'id': '5d0e240fae8b34f84441e0cf',
    'seekerName': 'Good Cantrell',
    'gender': 'male',
    'city': 'Guilford',
    'category': 'heart'
  },
  {
    'id': '5d0e240f989e53aaee168b1e',
    'seekerName': 'Alejandra Bass',
    'gender': 'female',
    'city': 'Innsbrook',
    'category': 'heart'
  },
  {
    'id': '5d0e240fabd7ba95fc777431',
    'seekerName': 'Henry Serrano',
    'gender': 'male',
    'city': 'Montura',
    'category': 'heart'
  },
  {
    'id': '5d0e240f28f6c07a3781ead5',
    'seekerName': 'Marilyn Owen',
    'gender': 'female',
    'city': 'Sanford',
    'category': 'heart'
  },
  {
    'id': '5d0e240fb66575f5178f09e6',
    'seekerName': 'Spears Powers',
    'gender': 'male',
    'city': 'Elfrida',
    'category': 'heart'
  },
  {
    'id': '5d0e240f965621ee69834e02',
    'seekerName': 'Hyde Livingston',
    'gender': 'male',
    'city': 'Takilma',
    'category': 'heart'
  },
  {
    'id': '5d0e240f9c90428c4f251de9',
    'seekerName': 'Christian Cummings',
    'gender': 'male',
    'city': 'Hailesboro',
    'category': 'heart'
  },
  {
    'id': '5d0e240f4493e0f7ab0d169d',
    'seekerName': 'Dona Lyons',
    'gender': 'female',
    'city': 'Dunbar',
    'category': 'heart'
  },
  {
    'id': '5d0e240f96b9ec157ebf534d',
    'seekerName': 'Bolton Gates',
    'gender': 'male',
    'city': 'Accoville',
    'category': 'heart'
  },
  {
    'id': '5d0e240fc3908c8a0d80f421',
    'seekerName': 'Katina Newman',
    'gender': 'female',
    'city': 'Konterra',
    'category': 'heart'
  }
];
@Component({
  selector: 'app-seekers',
  templateUrl: 'seekers.page.html',
  styleUrls: ['seekers.page.scss'],
  entryComponents:[ ModalPage ]
})
export class SeekersPage implements OnInit {
  seekers = [];


  constructor(public modalController: ModalController){

  }
  ngOnInit() {

    this.seekers = SEEKER_DATA;
  }
 
  workerDetail(e){
    console.log(e)
  }

  async presentModal(data) {
    const modal = await this.modalController.create({
      component: ModalPage,
      componentProps:data
    });
    return await modal.present();
  }
}
