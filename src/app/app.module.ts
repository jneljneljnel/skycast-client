import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AgmCoreModule } from '@agm/core';
import { ChartsModule } from 'ng2-charts';
import { Chart } from 'chart.js';


import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { ChartComponent } from './chart/chart.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ChartsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBi85MGJeBnkryuxVuvbn_gnOz1X-n6fTg'
    })
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
