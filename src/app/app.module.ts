import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenubarComponent } from './menubar/menubar.component';
import { EstudianteModule } from './estudiante/estudiante.module';

@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EstudianteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
