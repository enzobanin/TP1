import { Component, computed, signal } from '@angular/core';
import { Produto } from '../../../model/produto';
import { CardProduto } from "../card-produto/card-produto";

@Component({
  selector: 'lista-produtos',
  imports: [CardProduto],
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.css'
})
export class ListaProdutos {
  produtos: Produto[] = [
    {
      id: 1,
      nome: 'Produto 1',
      descricao: 'Desc. Prod 1',
      preco: 179.90,
      imageURL: 'images/brasil2022.png',
      promo:true,
      estado: 'usado'
    },
    {
      id: 2,
      nome: 'Produto 2',
      descricao: 'Desc. Prod 2',
      preco: 101,
      imageURL: 'images/brasil2024gk.png',
      estado: 'novo'
    },
    {
      id: 3,
      nome: 'Produto 3',
      descricao: 'Desc. Prod 3',
      preco: 601.99,
      imageURL: 'images/camisa2selecaoAzul.png',
      estado: 'esgotado'
    }
  ]

  apenasPromo = signal(false);

  prodExibidos = computed(() => this.apenasPromo() ? this.produtos.filter(p => p.promo): this.produtos);

  alternarPromo(){
    this.apenasPromo.update(p => !p);
  }

  onAddProduct(produto:{id:number, quantity:number}){
    alert(`Produto ${produto.id}, ${produto.quantity} unidades`);
  }

  onViewProduct(id:number){
    alert(`Id do produto ${id}`);
  }

}

