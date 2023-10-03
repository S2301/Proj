import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalcComponent } from './Components/calc/calc.component';
import { FormsModule } from '@angular/forms';
import { EmpDetailsComponent } from './Components/emp-details/emp-details.component';
import { MasterComponent } from './Components/master/master.component';

@NgModule({
  declarations: [
    AppComponent,
    CalcComponent,
    EmpDetailsComponent,
    MasterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
