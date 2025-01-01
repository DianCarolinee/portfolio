import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {isPlatformBrowser, NgOptimizedImage} from '@angular/common';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgOptimizedImage],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'] // Corregí el nombre de la propiedad de `styleUrl` a `styleUrls`
})
export class AppComponent implements OnInit {
  title = 'portfolio';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    // Verifica si está en el navegador antes de ejecutar AOS.init()
    if (isPlatformBrowser(this.platformId)) {
      AOS.init({
        duration: 1200, // Duración de las animaciones (en ms)
        once: true, // Animar solo una vez al entrar en el viewport
        easing: 'ease-in-out', // Tipo de easing para animaciones
      });
    }
  }
}
