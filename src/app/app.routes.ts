import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Product1Component } from './product1/product1.component';
import { Product2Component } from './product2/product2.component';
import { NgModule } from '@angular/core';
import { SamsungComponent } from './productComponent/samsung/samsung.component';
import { LgComponent } from './productComponent/lg/lg.component';
import { OnidaComponent } from './productComponent/onida/onida.component';
import { VideoconComponent } from './productComponent/videocon/videocon.component';



export const routes: Routes = [
  {
    path:'',component: HomeComponent
  },
  {
    path:'product1',component: Product1Component
  },
  {
    path:'product2',component: Product2Component
  },
  {
    path:'samsung',component: SamsungComponent
  },
  {
    path:'lg',component: LgComponent
  },
  {
    path:'onida',component: OnidaComponent
  },
  {
    path:'videocon',component: VideoconComponent
  },
];


