import { Injectable } from '@angular/core';
import { IProdutoCarrinho } from './product';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  itens: IProdutoCarrinho[] = [];

  constructor() { }

  obtemCarrinho(){
    this.itens= JSON.parse(localStorage.getItem("carrinho") || "[]");
    return this.itens;
  }

  adicionarAoCarrinho(produto: IProdutoCarrinho){
    this.itens.push(produto);
    localStorage.setItem("carrinho",JSON.stringify(this.itens));
  }
  //Deixar no carrinho os produtos com id diferenre
  removerProdutosCarrinho(produtoId: number){
    this.itens = this.itens.filter(item => item.id !== produtoId);
    //Sobrescrevendo os dados
    localStorage.setItem("carrinho",JSON.stringify(this.itens));
  }

  limparCarrinho(){
    this.itens = [];
    localStorage.clear();
  }
}
