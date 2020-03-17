import { Component } from '@angular/core';
import { EstudianteModule } from './estudiante/estudiante.module';
import {MenubarComponent} from './menubar/menubar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Estudiantes';
}
