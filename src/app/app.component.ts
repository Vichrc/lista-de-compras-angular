import { Component } from '@angular/core';
import { ListaDeComprasComponent } from './lista-de-compras/lista-de-compras.component'

@Component({
  selector: 'app-root',
  imports: [ListaDeComprasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'listadecompras';
}
