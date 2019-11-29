import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';


export interface workerData {
  id: string;
  workerName: string;
  gender: string;
  city: string,
  category: string
}
export interface seekerData {
  id: string;
  seekerName: string;
  gender: string;
  city: string,
  category: string
}

const WORKER_DATA: workerData[] = [
  {
    'id': '5d0875919418fe12cdb644ff',
    'workerName': 'Lambert Coffey',
    'gender': 'male',
    'city': 'Ruffin',
    'category': 'heart'
  },
  {
    'id': '5d087591dcc4bdfc46d81c47',
    'workerName': 'Dianne Pate',
    'gender': 'female',
    'city': 'Bannock',
    'category': 'heart'
  },
  {
    'id': '5d0875915f297674d4b34e9e',
    'workerName': 'Merrill Rice',
    'gender': 'male',
    'city': 'Sugartown',
    'category': 'heart'
  },
  {
    'id': '5d087591b8693c726a8c9dfd',
    'workerName': 'Shannon Lawson',
    'gender': 'female',
    'city': 'Fairacres',
    'category': 'heart'
  },
  {
    'id': '5d0875916ec4156eb8291d28',
    'workerName': 'Webster Long',
    'gender': 'male',
    'city': 'Nicholson',
    'category': 'heart'
  },
  {
    'id': '5d087591420e195708317682',
    'workerName': 'Hayden Mathis',
    'gender': 'male',
    'city': 'Teasdale',
    'category': 'heart'
  },
  {
    'id': '5d087591c156bd6386700bdb',
    'workerName': 'Kelsey Little',
    'gender': 'female',
    'city': 'Harold',
    'category': 'heart'
  },
  {
    'id': '5d0875912aded1a5b0fa2174',
    'workerName': 'Branch Espinoza',
    'gender': 'male',
    'city': 'Singer',
    'category': 'heart'
  },
  {
    'id': '5d0875918aff8a60b62458ff',
    'workerName': 'Chris Gay',
    'gender': 'female',
    'city': 'Aurora',
    'category': 'heart'
  },
  {
    'id': '5d08759154bd435fb80b392a',
    'workerName': 'Henson Maldonado',
    'gender': 'male',
    'city': 'Dotsero',
    'category': 'heart'
  },
  {
    'id': '5d08759138d1d4afef602cbd',
    'workerName': 'Yesenia Hyde',
    'gender': 'female',
    'city': 'Draper',
    'category': 'heart'
  },
  {
    'id': '5d0875918fd710a92e706b23',
    'workerName': 'Benton Guerra',
    'gender': 'male',
    'city': 'Clay',
    'category': 'heart'
  },
  {
    'id': '5d087591983bad22c8da0594',
    'workerName': 'Gardner Nunez',
    'gender': 'male',
    'city': 'Marienthal',
    'category': 'heart'
  },
  {
    'id': '5d087591855c4ad1d5bc6e57',
    'workerName': 'Roberts Barron',
    'gender': 'male',
    'city': 'Brewster',
    'category': 'heart'
  },
  {
    'id': '5d087591dfbbf7ee13ac33ff',
    'workerName': 'Morales Fernandez',
    'gender': 'male',
    'city': 'Finzel',
    'category': 'heart'
  },
  {
    'id': '5d087591607e8d9fb8328902',
    'workerName': 'Warner Sullivan',
    'gender': 'male',
    'city': 'Imperial',
    'category': 'heart'
  },
  {
    'id': '5d087591f52bc13eff08a343',
    'workerName': 'Valarie Arnold',
    'gender': 'female',
    'city': 'Bowmansville',
    'category': 'heart'
  },
  {
    'id': '5d087591fb2b124bbe34c6bd',
    'workerName': 'Mariana Aguirre',
    'gender': 'female',
    'city': 'Colton',
    'category': 'heart'
  },
  {
    'id': '5d087591ed805a6bf307ee83',
    'workerName': 'Bryan Hinton',
    'gender': 'male',
    'city': 'Cawood',
    'category': 'heart'
  },
  {
    'id': '5d0875917986770153b0e801',
    'workerName': 'Karla Fulton',
    'gender': 'female',
    'city': 'Dexter',
    'category': 'heart'
  },
  {
    'id': '5d0875914f50e9a1d615b485',
    'workerName': 'Avery Peters',
    'gender': 'male',
    'city': 'Logan',
    'category': 'heart'
  }
];
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
  selector: 'app-workers',
  templateUrl: 'workers.page.html',
  styleUrls: ['workers.page.scss'],
  entryComponents:[ ModalPage ]
})
export class WorkersPage implements OnInit {
  isUser: any = 'seeker';
  workers = [];
  displayedColumns: string[] = ['workerName', 'gender', 'city', 'category', 'star'];
  dataSource = new MatTableDataSource(WORKER_DATA);
  seekerSource = new MatTableDataSource(SEEKER_DATA);

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public modalController: ModalController){

  }
  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.workers = WORKER_DATA;
  }
  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
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
