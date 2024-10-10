import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraComponent } from './barra/barra.component';
import { FooterComponent } from './footer/footer.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraComponent,
    FooterComponent,
    SobreNosotrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
