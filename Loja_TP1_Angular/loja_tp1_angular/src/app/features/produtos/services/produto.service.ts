import { inject, Injectable } from '@angular/core';
import { LoggerService } from '../../../core/services/logger/logger.service';
import { Produto } from '../../../model/produto';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  logger = inject(LoggerService);

  private readonly listaMock: Produto[] = [
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
    ];

    listar():Observable<Produto[]>{
      this.logger.info('[ProdutoService] - Listando Produtos');
      return of(this.listaMock);//.pipe(delay(1000));
    }

    getById(id:number):Observable<Produto|undefined>{
      return of(this.listaMock.find(p => p.id == id));//.pipe(delay(500)) para simular o atraso 
    }

    
    
}
