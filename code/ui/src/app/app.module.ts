import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';  // replaces previous Http service
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatExpansionModule,
  MatToolbarModule,
  MatTabsModule,
  MatDatepickerModule,
  MatRadioModule,
  MatSnackBarModule,
  MatDividerModule
} from '@angular/material';
import {MatNativeDateModule} from '@angular/material/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BookingComponent } from './bookings/booking.component';
import { BookingService } from './bookings/booking.service';
import { HttpService } from './service/http.service';


@NgModule({
  declarations: [
    AppComponent,
    BookingComponent,
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatExpansionModule,
    MatToolbarModule,
    MatTabsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSnackBarModule,
    MatDividerModule
  ],
  providers: [BookingService,HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }

