import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {
    appPages;
    routeName ;
constructor(private router: Router,private activeRoute:ActivatedRoute){
  this.appPages = [
    {
      title: 'Dashboard',
      url: '/tabs/dashboard',
      direct: 'root',
      icon: 'flash'
    },
    {
      title: 'Workers',
      url: '/tabs/workers',
      direct: 'root',
      icon: 'information-circle-outline'
    },
    
    {
      title: 'Seekers',
      url: '/tabs/seekers',
      direct: 'root',
      icon: 'information-circle-outline'
    },
    {
      title: 'Donor',
      url: '/tabs/donor',
      direct: 'root',
      icon: 'information-circle-outline'
    },
    {
      title: 'Notification',
      url: '/tabs/notification',
      direct: 'root',
      icon: 'information-circle-outline'
    },
    {
      title: 'Profile',
      url: '/tabs/profile',
      direct: 'root',
      icon: 'information-circle-outline'
    }
  ];
}
  ngOnInit(){
    this.routeName = this.appPages.filter(page => page.url === this.router.url )[0].title;
  }
  getRouteName(routeName){
      this.routeName = routeName;
  }
}
