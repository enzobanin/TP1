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
      nome: 'Camisa Brasil 2022',
      descricao: 'Camisa I Brasil 2022',
      preco: 199.99,
      imageURL: 'images/brasil2022.png',
      promo:true,
      estado: 'usado'
    },
    {
      id: 2,
      nome: 'Produto 2',
      descricao: 'Camisa de Goleiro 2024',
      preco: 299.99,
      imageURL: 'images/brasil2024gk.png',
      estado: 'novo',
      promo:true
    },  
    {
      id: 3,
      nome: 'Camisa Brasil 2024',
      descricao: 'Camisa II Brasil Azul',
      preco: 259.99,
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

