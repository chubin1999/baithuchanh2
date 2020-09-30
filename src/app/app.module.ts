import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Bai1Component } from './bai1/bai1.component';
import { Bai1HearderComponent } from './bai1-hearder/bai1-hearder.component';
import { Bai1FooterComponent } from './bai1-footer/bai1-footer.component';
import { Bai1BodyComponent } from './bai1-body/bai1-body.component';
import { AppRoutingModule } from './app-routing.module';
import { Bai2Component } from './bai2/bai2.component';
import { IndexComponent } from './index/index.component';
import { Bai2HeaderComponent } from './bai2-header/bai2-header.component';
import { Bai2FooterComponent } from './bai2-footer/bai2-footer.component';
import { Bai2MainComponent } from './bai2-main/bai2-main.component';

@NgModule({
  declarations: [
    AppComponent,
    Bai1Component,
    Bai1HearderComponent,
    Bai1FooterComponent,
    Bai1BodyComponent,
    Bai2Component,
    IndexComponent,
    Bai2HeaderComponent,
    Bai2FooterComponent,
    Bai2MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
