import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BookingComponent} from './bookings/booking.component';

const routes: Routes = [
  { path: 'booking', component: BookingComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
