import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'dashboard',
        children: [
          {
            path: '',
            loadChildren: '../dashboard/dashboard.module#DashboardPageModule'
          }
        ]
      },
      {
        path: 'workers',
        children: [
          {
            path: '',
            loadChildren: '../workers/workers.module#WorkersPageModule'
          }
        ]
      },
      {
        path: 'seekers',
        children: [
          {
            path: '',
            loadChildren: '../seekers/seekers.module#SeekersPageModule'
          }
         
        ]
      },
      {
        path: 'donor',
        children: [
          {
            path: '',
            loadChildren: '../donor/donor.module#DonorPageModule'
          }         
        ]
      },
      {
        path: 'notifications',
        children: [
          {
            path: '',
            loadChildren: '../notifications/notifications.module#NotificationsPageModule'
          }
        ]
      },
      {
        path: 'profile',
        children: [
          {
            path: '',
            loadChildren: '../profile/profile.module#ProfilePageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/dashboard',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
