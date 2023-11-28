import { Injectable } from '@angular/core';
import { IProduto,produtos } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  produtos: IProduto[] = produtos;

  constructor() { }

  getAll(){
    return this.produtos;
  }

  getOne(produtoId: number){
    return this.produtos.find(produto => produtoId === produto.id)
  }
}
