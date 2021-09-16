import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
  heroDeleted: string = '';

  borrarUltimoElemento = () => this.heroes.pop();

  borrarPrimerElemento() {
    this.heroDeleted = this.heroes.shift() || '';
  }
}
