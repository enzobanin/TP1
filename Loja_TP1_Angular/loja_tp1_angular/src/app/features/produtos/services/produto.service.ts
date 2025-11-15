import { inject, Injectable } from '@angular/core';
import { LoggerService } from '../../../core/services/logger/logger.service';
import { Produto, ProdutoMaper } from '../../../model/produto';
import { catchError, delay, map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  logger = inject(LoggerService);
  http = inject(HttpClient);
  apiUrl = 'https://fakestoreapi.com/products';

  // private readonly listaMock: Produto[] = [
  //     {
  //       id: 1,
  //       nome: 'Camisa Brasil 2022',
  //       descricao: 'Camisa I Brasil 2022',
  //       preco: 199.99,
  //       imageURL: 'images/brasil2022.png',
  //       promo:true,
  //       estado: 'usado'
  //     },
  //     {
  //       id: 2,
  //       nome: 'Produto 2',
  //       descricao: 'Camisa de Goleiro 2024',
  //       preco: 299.99,
  //       imageURL: 'images/brasil2024gk.png',
  //       estado: 'novo',
  //       promo:true
  //     },  
  //     {
  //       id: 3,
  //       nome: 'Camisa Brasil 2024',
  //       descricao: 'Camisa II Brasil Azul',
  //       preco: 259.99,
  //       imageURL: 'images/camisa2selecaoAzul.png',
  //       estado: 'esgotado'
  //     }
  //   ];

    listar():Observable<Produto[]>{
      this.logger.info('[ProdutoService] - Listando Produtos');
      //  return of(this.listaMock);//.pipe(delay(1000));
      return this.http.get<any[]>(this.apiUrl).pipe(
        map(lista => lista.map(json => ProdutoMaper.fromJson(json))),
        catchError(err => of([]))
      );
    }

    getById(id:number):Observable<Produto|undefined>{
      // return of(this.listaMock.find(p => p.id == id));//.pipe(delay(500)) para simular o atraso 
      return of(); //exercicio
    }

    criar(produto: Produto): Observable<any>{
      let body = {
        title: produto.nome,
        price: produto.preco,
        description: produto.descricao,
        image: produto.imageURL,
        category: produto.categoria
      }
      return this.http.post(this.apiUrl, body);
    }

    
    
}
