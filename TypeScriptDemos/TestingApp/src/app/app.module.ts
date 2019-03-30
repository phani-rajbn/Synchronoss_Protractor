import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SimpleExampleComponent } from './Components/simple-example/simple-example.component';
import { CalcComponent } from './Components/calc/calc.component';
import { DataComponentComponent } from './data-component/data-component.component';

const appRoutes  : Routes  =[
  {"path" : 'Home', component :  SimpleExampleComponent},
  { "path" : "Calc", component : CalcComponent},
  { "path" : "Data", component : DataComponentComponent},
  { "path" : '**', redirectTo : 'Data'}
];

@NgModule({
  declarations: [
    AppComponent,
    SimpleExampleComponent,
    CalcComponent,
    DataComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
