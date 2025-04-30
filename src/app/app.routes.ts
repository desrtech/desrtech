import { Routes } from '@angular/router';
import {HomeComponent} from './modules/home/home.component';
import {DashboardComponent} from './modules/dashboard/dashboard.component';

export const routes: Routes = [{
  path: 'home',
  component: HomeComponent
},{
  path: '',
  redirectTo: '/home',
  pathMatch: 'full'
}];
