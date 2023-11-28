import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from '../carrinho.service';
import { IProdutoCarrinho } from '../product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  itensCarrinho: IProdutoCarrinho[]=[];
  total = 0;

  constructor(
    public carrinhoService: CarrinhoService,
    private route : Router
  ){}

  ngOnInit(): void {
    this.itensCarrinho = this.carrinhoService.obtemCarrinho();  
    this.calculaTotal();
  }
  calculaTotal(){
    this.total = this.itensCarrinho.reduce((acumulador,valorAtual)=> acumulador + (valorAtual.preco * valorAtual.quantidade),0)

  }

  removeProdutoCarrinho(produtoId:number){
    this.itensCarrinho = this.itensCarrinho.filter(item => item.id !== produtoId)
    this.carrinhoService.removerProdutosCarrinho(produtoId)
    this.calculaTotal();
  }

  comprar(){
    alert("Parabéns, você finalizou a sua compra!");
    this.carrinhoService.limparCarrinho();
    this.route.navigate(["produtos"])


  }

}
