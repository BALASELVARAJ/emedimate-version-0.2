import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { ModalPage } from '../modal/modal.page';
import { ModalController } from '@ionic/angular';


export interface workerData {
  id: string;
  donorName: string;
  bloodGroup: string,
  category: string
}


const WORKER_DATA: workerData[] = [
  {
    'id': '5d0e1b366d6cfc29512633a2',
    'donorName': 'Sanchez Kelley',
    'bloodGroup': 'B+',
    'category': 'Donor'
  },
  {
    'id': '5d0e1b36c8b6c9b51d194cbc',
    'donorName': 'Ophelia Castro',
    'bloodGroup': 'AB+',
    'category': 'Donor'
  },
  {
    'id': '5d0e1b366a09d09a2c719f81',
    'donorName': 'Noble Frye',
    'bloodGroup': 'B+',
    'category': 'Donor'
  },
  {
    'id': '5d0e1b36062ee37dc2618b8f',
    'donorName': 'Lorene Carter',
    'bloodGroup': 'AB+',
    'category': 'Donor'
  },
  {
    'id': '5d0e1b36f2f3b24d03ff7e44',
    'donorName': 'Cardenas Hooper',
    'bloodGroup': 'B+',
    'category': 'Donor'
  },
  {
    'id': '5d0e1b36550519c37efc7f81',
    'donorName': 'Ward Gordon',
    'bloodGroup': 'B+',
    'category': 'Donor'
  },
  {
    'id': '5d0e1b36cfa97839d9957b3f',
    'donorName': 'Lang Lawrence',
    'bloodGroup': 'B+',
    'category': 'Donor'
  },
  {
    'id': '5d0e1b36ffd56a3d886eed25',
    'donorName': 'Keller Cameron',
    'bloodGroup': 'B+',
    'category': 'Donor'
  },
  {
    'id': '5d0e1b363cc1bcee6b6a48f0',
    'donorName': 'Hattie Curtis',
    'bloodGroup': 'AB+',
    'category': 'Donor'
  },
  {
    'id': '5d0e1b36b25f7754a5b64994',
    'donorName': 'Livingston Porter',
    'bloodGroup': 'B+',
    'category': 'Donor'
  },
  {
    'id': '5d0e1b36fab7a9e9db162bbb',
    'donorName': 'Millicent Beard',
    'bloodGroup': 'AB+',
    'category': 'Donor'
  },
  {
    'id': '5d0e1b3629a303083e296608',
    'donorName': 'Adeline Mccoy',
    'bloodGroup': 'AB+',
    'category': 'Donor'
  },
  {
    'id': '5d0e1b3626fce86dd569dc8d',
    'donorName': 'Gale Lindsey',
    'bloodGroup': 'AB+',
    'category': 'Donor'
  },
  {
    'id': '5d0e1b36665bf825b844cf4d',
    'donorName': 'Dudley Johnston',
    'bloodGroup': 'B+',
    'category': 'Donor'
  },
  {
    'id': '5d0e1b368d52ce0f27948055',
    'donorName': 'Raquel Dickerson',
    'bloodGroup': 'AB+',
    'category': 'Donor'
  },
  {
    'id': '5d0e1b368822870b9fe7455c',
    'donorName': 'Riley Garcia',
    'bloodGroup': 'B+',
    'category': 'Donor'
  },
  {
    'id': '5d0e1b36d500483d82a1b78e',
    'donorName': 'Concetta Sampson',
    'bloodGroup': 'AB+',
    'category': 'Donor'
  },
  {
    'id': '5d0e1b3668e39a52065f3165',
    'donorName': 'Klein Pearson',
    'bloodGroup': 'B+',
    'category': 'Donor'
  },
  {
    'id': '5d0e1b36a6b12c5d167beb01',
    'donorName': 'Mitzi Schwartz',
    'bloodGroup': 'AB+',
    'category': 'Donor'
  },
  {
    'id': '5d0e1b365ee4b767fd69676e',
    'donorName': 'Carmela Blair',
    'bloodGroup': 'AB+',
    'category': 'Donor'
  },
  {
    'id': '5d0e1b3652f0f529fd84323c',
    'donorName': 'Esperanza Bright',
    'bloodGroup': 'AB+',
    'category': 'Donor'
  }
]

@Component({
  selector: 'app-notifications',
  templateUrl: 'notifications.page.html',
  styleUrls: ['notifications.page.scss']
})
export class NotificationsPage {


  displayedColumns: string[] = ['donorName', 'bloodGroup', 'category', 'star'];
  dataSource = new MatTableDataSource(WORKER_DATA);

  @ViewChild(MatSort) sort: MatSort;
  public list_launches = [
    { mission_name: 'Rajkumar' }, { mission_name: 'Ramkumar' },
    { mission_name: 'Ranjith' }, { mission_name: 'Raja' },
    { mission_name: 'Ranji' }, { mission_name: 'Ramraj' },
    { mission_name: 'Rajkavi' }, { mission_name: 'Mani' },
    { mission_name: 'Rani' }, { mission_name: 'Banu'}
  ]
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(public modalCtrl: ModalController) {

  }
  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }
  
}
