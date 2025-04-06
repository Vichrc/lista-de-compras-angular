import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ItemLista } from './itemlista';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-de-compras',
  imports: [FormsModule, CommonModule],  // <-- Adiciona o CommonModule aqui
  templateUrl: './lista-de-compras.component.html',
  styleUrl: './lista-de-compras.component.scss'
})
export class ListaDeComprasComponent {
  item: string = '';
  lista: ItemLista[] = []

  adicionarItem(){
    let itemLista = new ItemLista();
    itemLista.nome = this.item;
    itemLista.id = this.lista.length + 1;

    this.lista.push(itemLista);

    this.item = '';
  }

  riscarItem(itemLista: ItemLista) {
    itemLista.comprado = !itemLista.comprado;
  }
}
