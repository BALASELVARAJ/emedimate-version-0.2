import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router'
@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {
    appPages;
constructor(private router: Router){
  this.appPages = [
    {
      title: 'Login',
      url: '/login',
      direct: 'root',
      icon: 'log-in'
    },
    {
      title: 'Profile',
      url: '/tabs/profile',
      direct: 'root',
      icon: 'information-circle-outline'
    },

    {
      title: 'App Settings',
      url: '/settings',
      direct: 'forward',
      icon: 'cog'
    }
  ];
}
  ngOnInit(){
    console.log(this.router.url)
  }
}
