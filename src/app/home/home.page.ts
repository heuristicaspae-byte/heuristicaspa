import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  irASeccion(id: string) {
    const elemento = document.getElementById(id);
    if (elemento) {
      elemento.scrollIntoView({ behavior: 'smooth' });
    }
  }

  abrirFormulario() {
    window.open(
      'https://docs.google.com/forms/d/e/1FAIpQLSft4mhYyjjv6XqlVNjREruAJyJ0lHj5m7rgF3D0ioYPS1eRSg/viewform',
      '_blank'
    );
  }

  abrirWhatsApp() {
  window.open(
    'https://wa.me/56954358478?text=Estimados%20Heurística%20Electricidad%20SPA,%20me%20gustaría%20solicitar%20información%20y%20cotización%20sobre%20sus%20servicios%20eléctricos.%20Necesito%20evaluar%20un%20trabajo%20y%20quisiera%20coordinar%20una%20visita.%20Quedo%20atento(a)%20a%20su%20disponibilidad.%20Muchas%20gracias.',
    '_blank'
  );
}

}