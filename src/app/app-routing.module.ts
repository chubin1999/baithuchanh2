import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Bai1Component } from './bai1/bai1.component';
import { Bai2Component } from './bai2/bai2.component';
import { IndexComponent } from './index/index.component';


const routes: Routes = [
    {
      path: 'bai1',
      component: Bai1Component,
    },
    {
      path: '',
      component: IndexComponent ,
    },
    {
        path: 'index',
        component: IndexComponent ,
      },
    {
      path:'bai2',
      component:Bai2Component,
    }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

