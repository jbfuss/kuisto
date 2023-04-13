import {isDevMode, LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import localeFr from '@angular/common/locales/fr';
import {DatePipe, registerLocaleData} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    BrowserAnimationsModule,
    EffectsModule.forRoot(),
    StoreModule.forRoot(),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  providers: [ { provide: LOCALE_ID, useValue: "fr-FR" }, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
