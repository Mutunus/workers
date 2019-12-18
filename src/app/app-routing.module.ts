import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment.prod';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes), ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
