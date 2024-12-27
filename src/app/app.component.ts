import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';

  ngOnInit(): void {
    AOS.init({
      duration: 1200, // Duración de las animaciones (en ms)
      once: true, // Animar solo una vez al entrar en el viewport
      easing: 'ease-in-out', // Tipo de easing para animaciones
    });
  }
}
