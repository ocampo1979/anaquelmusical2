import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DiscoComponent } from './disco/disco.component';

import { RouterModule, Routes } from '@angular/router';
import { DiscoService } from './servicios/disco.service';

const routes: Routes = [
  {path: 'disco', component: DiscoComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    DiscoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DiscoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
