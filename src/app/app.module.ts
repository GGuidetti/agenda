import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Pagina1Page } from './pagina1/pagina1.page';
import { Pagina2Page } from './pagina2/pagina2.page';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';


@NgModule({
  declarations: [AppComponent, Pagina1Page, Pagina2Page],
  entryComponents: [],
  imports: [BrowserModule, FormsModule, IonicModule.forRoot(), AppRoutingModule,
  AngularFireModule.initializeApp({apiKey: "AIzaSyC_wjME5iigOca9CHBzCwUS4CzlZ4Yzl00",
    authDomain: "agenda-d5944.firebaseapp.com",
    databaseURL: "https://agenda-d5944.firebaseio.com",
    projectId: "agenda-d5944",
    storageBucket: "agenda-d5944.appspot.com",
    messagingSenderId: "117199507169",
    appId: "1:117199507169:web:95c28516aa37ce59"}), AngularFireDatabaseModule ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
