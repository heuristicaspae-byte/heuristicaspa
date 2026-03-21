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

}