# Angular

[https://metal-flea-041.notion.site/LIVE-Criando-Projeto-Angular-c83eefb9f4834a3295399b6d6d7d332b](https://www.notion.so/LIVE-Criando-Projeto-Angular-c83eefb9f4834a3295399b6d6d7d332b?pvs=21)

O uso do this é necessário para distinguir a variável local do escopo do método e a propriedade da classe. O this.descricao é necessário para mostrar que você está acessando a propriedade da classe.

Baseada em componentes 

Possui varias bibliotecas, fornece sub módulos para testar a aplicação.

Utiliza decorator pra dizer o que essa classe significa na minha aplicação.

No angular modules são mecanismos pra agrupar componentes 

Possui uma comunidade ativa de desenvolvedores com mais de 1,7 milhões de desenvolvedores.

Para instalar o Angular: npm i -g @angular/cli

**The Angular CLI requires a minimum Node.js version of v18.13.**

O comando **`ng new fundamentos-angular`** é usado para criar um novo projeto Angular com o Angular CLI (Command Line Interface).

- `ng` É o comando principal do Angular CLI.
- `new` É um subcomando no `ng` que indica a intenção de criar um novo projeto.
- `fundamentos-angular` É o nome que você está dando ao novo projeto Angular.

Aqui estão algumas das coisas que esse comando faz:

1. **Criação de Estrutura do Projeto:**
O Angular CLI cria uma estrutura de diretórios com arquivos iniciais necessários para um projeto Angular.
2. **Configuração Inicial:**
Ele configura arquivos como **`package.json`** para gerenciar as dependências, **`angular.json`** para configurar o projeto Angular, e outros arquivos de configuração.
3. **Instalação de Dependências:**
O Angular CLI utiliza o npm para instalar as dependências necessárias para o projeto.
4. **Geração de Componentes e Módulos:**
Pode opcionalmente criar alguns componentes e módulos básicos para ajudar a começar.
5. **Configuração de um Servidor de Desenvolvimento:**
Configura um servidor de desenvolvimento que pode ser usado para testar o aplicativo localmente enquanto você desenvolve.

### Iniciar o projeto

Para iniciar o projeto `npm start` que por de trás dos panos é o comando `ng server` 

## Criando um novo componente

```tsx
ng generate component components/nome-seu-componente
```

Ou da forma reduzida:

```tsx
ng g c components/nome-seu-componente
```

```tsx

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
```

Todo componente do angular consiste

- Um template HTML
- Uma classe Typescript que define seu comportamento
- Um css para definir seu estilo

### Classe Componente

Toda classe que representa um componente angular deve ser decorada com `@component`

**`@Component`** é um ****decorador onde são definidos os metadados do componente.

Três atributos que precisam ser passados para especificar o que ira aparecer na tela:

- **selector** - Define o elemento HTML personalizado onde este componente será renderizado. Define o seletor do componente. Este componente será referenciado no HTML usando `<app-root></app-root>`.
- **imports** - Importa módulos adicionais necessários para o componente.
    - CommonModule → Importa o módulo `CommonModule` do angular, que fornece diretivas comuns, como `ngIf` e `ngfor`.
    - RouterOutlet → Importa o componente **`RouterOutlet`** do Angular, que é usado para exibir as rotas em um aplicativo Angular.
- **templateUrl** - Especificar o arquivo html externo que será usado como template para o componente.
- **styleUrls** - Especifica o arquivo de estilo css associado a este componente.

## Module

No contexto angular um modulo (module) é uma unidade organizacional que agrupa componentes, diretivas, pipes e serviços relacionados. Os módulos ajudam a organizar e modularizar o código, facilitando o desenvolvimento, a manutenção e a reutilização de componentes e funcionalidades.

****NgModule Decorator:****

- Um módulo Angular é definido por meio do uso do decorador **`@NgModule`**.

****Metadados do Módulo (`@NgModule`):**

- **`declarations`**: Lista de componentes, diretivas e pipes que pertencem a este módulo.
- **`imports`**: Outros módulos que este módulo depende.
- **`providers`**: Serviços fornecidos por este módulo. Os serviços declarados aqui ficam disponíveis para toda a aplicação.
- **`bootstrap`**: Componente principal usado quando o aplicativo é iniciado. Este é geralmente usado no módulo raiz.

****Módulo Raiz (`AppModule`):**

- No Angular, a aplicação tem um módulo raiz chamado **`AppModule`**.
- Este módulo é definido no arquivo **`app.module.ts`** e é onde a aplicação é inicializada.
- O componente principal (geralmente chamado de **`AppComponent`**) é declarado e definido como o componente de inicialização.

****Organização de Módulos:****

- Os módulos podem ser organizados em hierarquias para melhor modularização e reutilização de código.
- Módulos podem importar outros módulos e, assim, criar uma hierarquia de dependências.

****Feature Modules (Módulos de Recursos):****

- Feature modules são módulos específicos para uma funcionalidade ou recurso da aplicação.
- Eles encapsulam componentes, diretivas, pipes e serviços relacionados a uma parte específica da aplicação.

****Shared Module (Módulo Compartilhado):****

- O módulo compartilhado é um módulo que contém componentes, diretivas, pipes e serviços que são compartilhados em toda a aplicação.
- Pode ser usado para evitar a duplicação de código em vários módulos.

****Lazy Loading (Carregamento Preguiçoso):****

- Lazy loading é uma técnica onde os módulos são carregados apenas quando são necessários, melhorando o desempenho inicial da aplicação.

****NgModule Lifecycle Hooks:****

- Módulos podem usar hooks de ciclo de vida, como **`ngOnInit`** e **`ngOnDestroy`**, para executar lógica em momentos específicos durante a vida do módulo.

## Interpolação de texto

Isso é feito usando o formato de aspas duplas `{{ }}`

## Pipe

Forma poderosa de transforma dados exibidos em uma template

**Sintaxe Básica:**

A sintaxe básica de um pipe em um template Angular é a seguinte:

```tsx
{{ valor | pipe }}
```

### **Pipes Personalizados:**

Você também pode criar seus próprios pipes personalizados para atender às necessidades específicas do seu aplicativo. Um pipe personalizado é uma classe TypeScript decorada com **`@Pipe`**. A classe deve implementar a interface **`PipeTransform`** e fornecer a lógica de transformação no método **`transform`**.

```tsx
ng generate pipe caminho/do-seu-pipe/nome-do-seu-pipe
```

Exemplo de um pipe personalizado que adiciona um prefixo a uma string:

```tsx
// Definição do pipe personalizado
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prefixo'
})
export class PrefixoPipe implements PipeTransform {
  transform(valor: string, prefixo: string): string {
    return `${prefixo} ${valor}`;
  }
}
```

No template, você pode usar este pipe personalizado:

```tsx
<!-- Uso do pipe personalizado no template -->
<p>{{ minhaString | prefixo:'Prefixo Personalizado' }}</p>
```

## Event biding

É uma técnica no angular que permite que você possa responder eventos do usuário (como cliques do mouse, pressionamentos de teclas, envios de formulários, etc.) em seus componentes. A sintaxe para realizar event binding é geralmente feita usando parênteses **`()`**.

```tsx
// No seu componente TypeScript
import { Component } from '@angular/core';

@Component({
  selector: 'app-seu-componente',
  template: `
    <button (click)="onClick()">Clique em mim</button>
  `,
})
export class SeuComponente {
  onClick() {
    console.log('Botão clicado!');
    // Lógica adicional aqui
  }
}
```

Além disso, você pode passar dados do template para o componente usando event binding. Por exemplo:

```tsx
// No seu componente TypeScript
import { Component } from '@angular/core';

@Component({
  selector: 'app-seu-componente',
  template: `
    <input (input)="onInput($event)" placeholder="Digite algo" />
  `,
})
export class SeuComponente {
  onInput(event: any) {
    console.log('Texto digitado:', event.target.value);
    // Lógica adicional aqui
  }
}
```

Neste exemplo, **`(input)`** é um evento que ocorre quando o usuário digita algo em um campo de entrada. O método **`onInput`** recebe o evento como um argumento, permitindo que você acesse o valor digitado pelo usuário.

## Property biding

Ligação de propriedade . Permite que você associe dinamicamente valores de propriedades de um componente a atributos de elementos HTML. Isso é feito usando a sintaxe `[]`.

### **Sintaxe Básica:**

A sintaxe básica de property binding é **`[propriedade]="expressão"`**, onde:

- **`[propriedade]`** é a propriedade do elemento HTML à qual você deseja atribuir um valor dinâmico.
- **`"expressão"`** é uma expressão Angular no componente que será avaliada e atribuída à propriedade.

### **Exemplo Prático:**

Considere o seguinte exemplo onde queremos atribuir dinamicamente o texto de um parágrafo HTML com base em uma propriedade de um componente:

```html
<!-- No template do componente -->
<p [innerText]="mensagemDoComponente"></p>
```

```tsx
// No componente TypeScript
export class MeuComponente {
  mensagemDoComponente = 'Olá, mundo!';
}
```

## Two-way-data

(Vinculação de dados bidimensionais) . É uma funcionalidade em angular que permite a sincronização automática de dados entre o componente e a visualização. Ele combina a vinculação de eventos (event binding) e a vinculação de propriedades (property binding) para criar uma forma fácil de manter os dados sincronizados.

A principal função do two-way data biding é para campos de formulário onde você deseja refletir alterações no modelo tanto na visualização quanto no componente, e vice-versa.

A sintaxe para two-way data binding utiliza o [(ngModel)]. Vamos considerar um exemplo de uso de two-way data binding em um campo de entrada (input) para um componente:

```tsx
// No seu componente TypeScript
import { Component } from '@angular/core';

@Component({
  selector: 'app-seu-componente',
  template: `
    <input [(ngModel)]="nome" placeholder="Digite seu nome" />
    <p>Olá, {{ nome }}!</p>
  `,
})
export class SeuComponente {
  nome: string = '';
}
```

Neste exemplo:

- **`[(ngModel)]`** é a sintaxe do two-way data binding.
- **`nome`** é a propriedade do componente que está sendo vinculada ao campo de entrada.

Essa vinculação bidirecional significa que qualquer alteração em **`nome`** no componente será refletida automaticamente no campo de entrada e vice-versa.

Lembre-se de que para usar **`ngModel`**, você precisa importar o módulo **`FormsModule`** do Angular e adicioná-lo aos imports do seu módulo. Algo como:

```tsx
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [FormsModule],
  // ... outros metadados do módulo
})
export class SeuModulo { }
```

O two-way data binding é uma ferramenta poderosa, mas é importante usá-lo com moderação, especialmente em grandes projetos, para evitar complexidade desnecessária. Além disso, é necessário garantir que o módulo **`FormsModule`** seja importado quando você estiver usando **`ngModel`**.

`ngModel`  está presente no `FormsModule`

## Renderizar lista de dados e algumas diretivas

`*ngFor`

- Itera sobre uma lista de elementos e gera conteúdo para cada item.

```tsx
<ul>
  <li *ngFor="let item of listaDeItens">{{ item }}</li>
</ul>
```

`*ngIf`

- Permite a adição ou remoção de elementos do DOM com base em uma condição.

```tsx
<div *ngIf="mostrarElemento">Conteúdo a ser exibido condicionalmente</div>
```

`[ngClass]`

- Permite adicionar ou remover classes com base em uma expressão.

```tsx
<div [ngClass]="{'classe-ativa': ativo, 'classe-inativa': !ativo}">
  Este elemento terá a classe 'classe-ativa' se ativo for verdadeiro, e 'classe-inativa' caso contrário.
</div>
```

`[(ngModel)]`

- Fornece vinculação bidirecional para campos de formulário, permitindo que os valores do modelo e do formulário sejam sincronizados automaticamente.

```tsx
<input [(ngModel)]="valorDoCampo" />
```

`ngSubmit`

- Utilizado para capturar o evento de submissão de um formulário.

```tsx
<form (ngSubmit)="onSubmit()">
  <!-- Conteúdo do formulário -->
  <button type="submit">Enviar</button>
</form>
```

`ngStyle`

- Permite aplicar estilos dinamicamente com base em uma expressão.

```tsx
<div [ngStyle]="{'color': cor, 'font-size': tamanho + 'px'}">
  Este elemento terá a cor e o tamanho da fonte definidos pelas variáveis 'cor' e 'tamanho'.
</div>
```

`ngSwitch`

- Similar a uma declaração switch/case, permite alternar entre vários casos com base em uma expressão.

```tsx
<div [ngSwitch]="condicao">
  <div *ngSwitchCase="'valor1'">Conteúdo para valor1</div>
  <div *ngSwitchCase="'valor2'">Conteúdo para valor2</div>
  <div *ngSwitchDefault>Conteúdo padrão</div>
</div>
```

## Criar Componentes Personalizados

`@input` propriedades marcadas com input para receber dados do componente pai.

`@output` e EventEmitter marcado com output para enviar eventos de volta ao componente pai.

**EventEmitter** → É uma classe em angular que faz parte do módulo `angular/core` e é usada para criar e emitir eventos customizados. Desempenha um papel na comunicação entre componentes. Quando um componente emite um evento usando `EventEmitter` , outros componentes podem ouvir (subscribe) a esse evento e responder a ele.

## Serviços

Para gerar um serviço (ou service) no Angular, você pode usar o Angular CLI (Command Line Interface). O comando para criar um serviço é o seguinte:

```tsx
ng generate service nome-do-servico
```

Os serviços em angular são uma parte fundamental da arquitetura. Eles são usados para encapsular lógicas de negócios, manipulação de dados, chamadas a APIs, compartilhamentos de dados entre componentes e muito mais.

```tsx
// meu-servico.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MeuServicoService {
  dadosCompartilhados: string[] = [];

  adicionarDado(dado: string) {
    this.dadosCompartilhados.push(dado);
  }
}
```

```tsx
// meu-componente.component.ts
import { Component } from '@angular/core';
import { MeuServicoService } from './meu-servico.service';

@Component({
  selector: 'app-meu-componente',
  template: `
    <button (click)="adicionarDado()">Adicionar Dado</button>
  `,
})
export class MeuComponenteComponent {
  constructor(private meuServico: MeuServicoService) {}

  adicionarDado() {
    this.meuServico.adicionarDado('Novo Dado');
  }
}
```

O serviço é injetado no construtor do componente

## Ciclo de vida de um componente

No angular, os componentes passam por vários ciclos de vida durante sua existência. Esses ciclos de vida são gerenciados por hooks, que são métodos específicos chamados em momentos específicos durante a criação, atualização e destruição de um componente.

### `ngOnIni`

- O método é chamado uma vez, após a inicialização do componente.
- É frequentemente usado para realizar inicializações, como buscar dados de serviços ou configurar variáveis.

```tsx
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-componente',
  template: '<p>Meu Componente</p>'
})
export class MeuComponente implements OnInit {
  ngOnInit() {
    // Inicializações aqui
  }
}
```

### `ngOnChanges`

- O método é chamado quando o angular detecta mudanças nas propriedades de entrada (`@Input`) do componente.
- Recebe um objeto que contém as alterações detectadas.

```tsx
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-meu-componente',
  template: '<p>Meu Componente</p>'
})
export class MeuComponente implements OnChanges {
  @Input() meuInput: string;

  ngOnChanges(changes: SimpleChanges) {
    // Lógica para lidar com as mudanças nas propriedades de entrada
  }
}
```

### `ngOnDestroy`

- O método é chamado antes de um componente ser destruído, ou seja, removido do DOM.
- É utilizado para realizar limpezas, como cancelar assinaturas de observáveis, liberar recursos ou desconectar serviços.

```tsx
import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-meu-componente',
  template: '<p>Meu Componente</p>'
})
export class MeuComponente implements OnDestroy {
  ngOnDestroy() {
    // Limpezas aqui
  }
}
```

## ng content

`<ng-content>` é uma diretiva no Angular que é usada para criar slots de conteúdo em um componente. Isso permite que o conteúdo seja projetado (passado) para dentro de um componente a partir do componente pai. Isso é especialmente útil quando vc deseja criar componentes flexíveis e reutilizáveis.

O conteúdo passado dentro das tags de abertura e de fechamento do component <projetct-content> é o conteúdo a ser projetado. É a isso que chamamos de projeção de conteúdo. O conteúdo será renderizado dentro de `<ng-content>`, dentro do componente

## Roteamento entre páginas

A biblioteca `@angular/router` é o modulo oficial de roteamento do angular

```tsx
ng new @angular/router
```

```tsx
npm i @angular/router
```

### Conceitos mais comuns oferecidos por essa biblioteca:

1) **RouterModule:**

Esse é o módulo principal do roteamento. Você precisa importá-lo no módulo da sua aplicação para usar a funcionalidade de roteamento

```tsx
// app.module.ts
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [RouterModule, AppRoutingModule], // Aqui você também importaria o AppRoutingModule que configura as rotas.
  // ... outros metadados
})
export class AppModule {}
```

2) **RouterModule.forRoot():**

O método `.forRoot()` é usado para configurar as rotas raiz da sua aplicação.

Os serviços angulares são carregados na página 1 vez (singleton) e todas as referências apontam para essa 1 instância. Método forRoot() é uma maneira de garantir que o módulo do aplicativo/módulo compartilhado/e qualquer módulo carregado lentamente usem o mesma 1 instância (a instância raiz).

```tsx
// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostDetailsComponent } from './post-details/post-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'post/:id', component: PostDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
```

3) **RouterOutlet:**

É uma diretiva que atua como um marcador de posição onde os componentes das rotas são renderizados.

```html
<!-- app.component.html -->
<div>
  <h1>Minha Aplicação Angular</h1>
  <router-outlet></router-outlet>
</div>
```

4) **routerLink:**

Usada para criar links de navegação:

```html
<!-- home.component.html -->
<a routerLink="/">Página Inicial</a>
<a [routerLink]="['/post', 1]">Detalhes do Post 1</a>
```

5)**Router:**

O serviço `Router` fornece métodos para a navegação programática

```tsx
// qualquer componente ou serviço onde você precisa navegar programaticamente
import { Router } from '@angular/router';

// ...

constructor(private router: Router) {}

navegarParaDetalhesDoPost(postId: number) {
  this.router.navigate(['/post', postId]);
}
```

6) **ActivatedRoute:**

O serviço **`ActivatedRoute`** fornece informações sobre a rota ativa, incluindo parâmetros da rota.

```tsx
// post-details.component.ts
import { ActivatedRoute } from '@angular/router';

// ...

constructor(private route: ActivatedRoute) {
  this.route.params.subscribe(params => {
    console.log('ID do Post:', params['id']);
  });
}
```

## **Carregamento Preguiçoso (Lazy Loading):**

Network → mostra todos os arquivos que são baixados para que nossa página carregue

O Angular suporta o carregamento preguiçoso de módulos, o que significa que você pode carregar dinamicamente partes da sua aplicação apenas quando necessário, melhorando o desempenho inicial. Isso é configurado no roteamento usando a propriedade **`loadChildren`**.

### Gerando o arquivo de roteamento

```tsx
ng generate app-router --flat --module=app
```

ou

```tsx
ng generate module app-routing --flat --module=app
```

Usado para criar um novo módulo na sua aplicação. Explicação das flags:

—flat → Gera um arquivo na pasta atual sem gerar uma subpasta

—module → Indica que esse módulo será importado no módulo principal da aplicação chamado “app” (geralmente app.module.ts).

outra flags

—route → significa que você deseja criar uma rota associada a esse modulo.

## Navegação entre páginas

**Usando links**

Use a diretiva **`routerLink`** para criar links de navegação.

**Programaticamente com o serviço Router** 

// injetar o serviço Router no construtor
constructor(private router: Router) {}

 `this.router.navigate([” ” ])`

## Redirecionamento de Urls e criação da página não encontrada (404)

**Redirecionamento para a Página Inicial (`""`)**:

- **`{ path: '', redirectTo: 'primeira-pagina', pathMatch: 'full' }`**: Isso significa que, se a rota estiver vazia (**`""`**), o Angular redirecionará para a rota completa especificada, que é **`'primeira-pagina'`**. O **`pathMatch: 'full'`** garante que a rota vazia só será redirecionada se a URL inteira corresponder à rota vazia, não apenas parte dela.

**Rota de Fallback para Páginas Não Encontradas (`"**"`)**:

- **`{ path: '**', component: PaginaNaoEncontradaComponent }`**: Isso configura uma rota wildcard (**`"**"`**) para todas as rotas que não correspondem às rotas anteriores. Ele usa o componente **`PaginaNaoEncontradaComponent`** para exibir uma página não encontrada.

## Parâmetros de rotas e parâmetros de consulta

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/8580cf04-5af3-4360-b739-96b735ae68de/288f0884-5a97-4a4a-8312-38f99b89f2e6/Untitled.png)

```tsx
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-seu-componente',
  templateUrl: './seu-componente.component.html',
  styleUrls: ['./seu-componente.component.css']
})
export class SeuComponenteComponent implements OnInit {
  id: number | null = null;
  idade: number | null = null;
  nome: string | null = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      // Use '+' para converter a string para número de forma mais concisa
      this.id = +params.get('id') || null;
    });

    this.route.queryParamMap.subscribe(params => {
      this.nome = params.get('nome') || '';
      // Use '+' para converter a string para número de forma mais concisa
      this.idade = +params.get('idade') || null;
    });
  }
}
```

O código está configurado para extrair parâmetros de rota e parâmetros de consulta (query parameters) usando o Angular's **`ActivatedRoute`**.

**`this.route.paramMap.subscribe(params => { ... })`:**

- O método **`paramMap.subscribe`** é usado para observar as mudanças nos parâmetros de rota. Sempre que os parâmetros de rota mudam, a função dentro do bloco **`{ ... }`** é executada.
- **`params`** é um objeto que contém os parâmetros da rota. **`params.get("id")`** obtém o valor do parâmetro "id" da rota.

**`this.route.queryParamMap.subscribe(params => { ... })`:**

- O método **`queryParamMap.subscribe`** é usado para observar as mudanças nos parâmetros de consulta (query parameters). Sempre que os parâmetros de consulta mudam, a função dentro do bloco **`{ ... }`** é executada.
- **`params`** é um objeto que contém os parâmetros de consulta. **`params.get("nome")`** obtém o valor do parâmetro de consulta "nome".
- **`params.get("idade")`** obtém o valor do parâmetro de consulta "idade".

Em aplicações Angular, **`queryParamMap`** e **`paramMap`** são duas propriedades importantes do serviço **`ActivatedRoute`** que são usadas para obter informações sobre os parâmetros de consulta (query parameters) e os parâmetros de rota, respectivamente.

**`queryParamMap`:**

- A propriedade **`queryParamMap`** do **`ActivatedRoute`** fornece um objeto que contém os parâmetros de consulta da URL.

**`paramMap`:**

- A propriedade **`paramMap`** do **`ActivatedRoute`** fornece um objeto que contém os parâmetros de rota.

`subscribe` :

- **`.subscribe(params => { ... })`** inicia a observação dos valores emitidos pelo objeto observável.
- Sempre que os parâmetros de rota mudam, a função dentro do bloco **`{ ... }`** é executada, permitindo que você reaja a essas mudanças.

## Route Guards

Por exemplo, se você quiser criar um guard chamado **`AuthGuard`**, o comando seria:

```tsx
ng generate guard nome-do-guarda
```

São funcionalidades do Angular que permitem que você controle a navegação para ou de uma rota. Eles são usados para proteger rotas e para realizar operações específicas antes que um um usuário saio ou entre de uma determinada rota.

Existem vários tipos de Route Guards no Angular, cada um atendendo a um propósito específico. Aqui estão os principais tipos de Route Guards:

1. **CanActivate:**

O **`CanActivate`** é um guarda que determina se uma rota pode ser ativada. Ele é usado para proteger o acesso de uma rota específica. Se o **`CanActivate`** retornar **`true`**, a navegação é permitida; se retornar **`false`** ou um **`Observable`**/**`Promise`** que resolve para **`false`**, a navegação é cancelada.

Exemplo:

```tsx
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // Implemente lógica de autenticação aqui
    const isAuthenticated = /* lógica de autenticação */;
    if (isAuthenticated) {
      return true; // Navegação permitida
    } else {
      this.router.navigate(['/login']); // Redireciona para a página de login
      return false; // Navegação cancelada
    }
  }
}
```

Exemplo de configuração de rota com **`CanActivate`**:

```tsx
const routes: Routes = [
  { path: 'restrita', component: ComponenteRestrito, canActivate: [AuthGuard] },
  // ... outras rotas
];
```

### SessionStorage ou LocalStorage

São dois objetos fornecidos pelo navegador para armazenamento de dados do lado do cliente. Ambos fornecem uma maneira  de armazenar dados persistentes (no caso do **`localStorage`**) ou dados de sessão (no caso do **`sessionStorage`**) entre solicitações do navegador. Aqui estão as principais diferenças entre eles:

### **localStorage:**

1. **Persistência:**
    - Os dados armazenados no **`localStorage`** são persistentes e permanecem no navegador mesmo após o fechamento e reabertura do navegador.
2. **Escopo:**
    - Os dados no **`localStorage`** estão disponíveis para todas as guias/janelas do navegador que compartilham o mesmo domínio.
3. **Vida útil:**
    - Os dados no **`localStorage`** não têm uma vida útil específica e permanecem armazenados até que sejam explicitamente removidos pelo código JavaScript ou pelo usuário.
4. **Armazenamento de Dados:**
    - Armazena dados em pares chave-valor no formato de string.
    
    Exemplo:
    
    ```tsx
    // Armazenando dados no localStorage
    localStorage.setItem('nome', 'João');
    
    // Recuperando dados do localStorage
    const nome = localStorage.getItem('nome');
    ```
    

### **sessionStorage:**

1. **Persistência:**
    - Os dados armazenados no **`sessionStorage`** são de curta duração e são válidos apenas para a duração da sessão do navegador. Eles são excluídos quando a guia ou janela do navegador é fechada.
2. **Escopo:**
    - Os dados no **`sessionStorage`** estão disponíveis apenas para a guia ou janela do navegador que os criou.
3. **Vida útil:**
    - Os dados no **`sessionStorage`** são automaticamente excluídos quando a sessão do navegador termina (quando a guia ou janela do navegador é fechada).
4. **Armazenamento de Dados:**
    - Armazena dados em pares chave-valor no formato de string, semelhante ao **`localStorage`**.
    
    Exemplo:
    
    ```tsx
    // Armazenando dados no sessionStorage
    sessionStorage.setItem('idade', '25');
    
    // Recuperando dados do sessionStorage
    const idade = sessionStorage.getItem('idade');
    ```
    

Como acessar o sessionstorage ou localStorage → Consegui ter acesso através de application → Local Storage ou SessionStorage 

## Bibliotecas que fornecem componentes prontos

### Angular Material

O Angular Material é uma biblioteca de componentes e estilos implementados de acordo com as diretrizes de design do Material Design, desenvolvido pela equipe do Angular. Essa biblioteca facilita a criação de interfaces de usuário consistentes e atraentes para aplicativos Angular.

**Instale o Angular Material e o Angular CDK (Component Dev Kit):**

```html
ng add @angular/material
```

### MatSnackBar

A **`MatSnackBar`** é um componente do Angular Material que fornece uma maneira simples de exibir mensagens temporárias, conhecidas como "snackbars" (barras de notificação) em uma aplicação Angular. Snackbars são úteis para exibir mensagens de sucesso, erros, ou informações breves para os usuários.

****Uso do MatSnackBar:****
1. **Importe o `MatSnackBarModule` e `MatSnackBar`:**

```html
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';
```

1. **Adicione `MatSnackBarModule` aos módulos do seu aplicativo:**

```tsx
@NgModule({
  // ... outros imports
  imports: [MatSnackBarModule],
})
export class SeuModulo { }
```

1. **Injete o `MatSnackBar` no seu componente:**

```tsx
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  // ... outros metadados do componente
})
export class SeuComponente {
  constructor(private snackBar: MatSnackBar) { }

  // ... restante do componente
}
```

1. **Injete o `MatSnackBar` no seu componente:**

```tsx
abrirSnackBar() {
  this.snackBar.open('Mensagem da Snackbar', 'Fechar', {
    duration: 2000, // Duração em milissegundos (2 segundos neste exemplo)
  });
}
```

Neste exemplo, **`abrirSnackBar()`** abre uma snackbar com uma mensagem e um botão de fechar.

### **Configurações Adicionais:**

- **`duration`:** Define a duração em milissegundos que a snackbar ficará visível.
- **`panelClass`:** Adiciona classes de painel adicionais à snackbar.
- **`horizontalPosition` e `verticalPosition`:** Controlam a posição da snackbar na tela.
- **`data`:** Pode ser usado para passar dados adicionais para o template da snackbar.

## Deixar o carrinho salvo mesmo fechando a aplicação

localStorage

### snapshot

Em Angular, você pode usar o **`ActivatedRoute`** para acessar os parâmetros da rota, incluindo os parâmetros de consulta (query parameters) e os parâmetros de rota (route parameters). O **`snapshot`** do **`ActivatedRoute`** fornece uma única imagem (snapshot) dos parâmetros no momento em que a rota foi ativada.

```tsx
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-seu-componente',
  template: `
    <p>Parâmetro da Rota: {{ parametroRota }}</p>
  `,
})
export class SeuComponente implements OnInit {
  parametroRota: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Usando snapshot para obter parâmetros de rota
    this.parametroRota = this.route.snapshot.params['id'];

    // Você também pode usar o método paramMap para obter os parâmetros de rota
    // this.route.paramMap.subscribe(params => {
    //   this.parametroRota = params.get('id');
    // });
  }
}
```

**IMPORTANTE :**

Tenha em mente que o uso do **`snapshot`** é adequado quando você sabe que os parâmetros de rota não mudarão enquanto o componente estiver ativo. Se você espera que os parâmetros mudem durante a vida do componente (por exemplo, ao navegar de/para o mesmo componente), é recomendável usar o método **`paramMap.subscribe`** para observar alterações nos parâmetros de rota.

## <ng-template #algumNome>

A construção **`<ng-template>`** é uma parte fundamental da manipulação de templates no Angular. A diretiva `ng-template` permite definir um bloco de conteúdo HTML que não será renderizado diretamente no DOM. Em vez disso, você pode referenciar e reutilizar esse bloco de conteúdo em outros lugares usando uma variável de referência.

Aqui está um exemplo de como você pode usar **`<ng-template>`** com uma variável de referência chamada **`#semProduto`**:

```html
<!-- Seu componente Angular HTML -->
<ng-container *ngIf="produtos.length > 0; else semProduto">
  <!-- Se há produtos, exiba-os aqui -->
  <div *ngFor="let produto of produtos">
    {{ produto.nome }}
  </div>
</ng-container>

<ng-template #semProduto>
  <!-- Se não há produtos, exiba uma mensagem -->
  <p>Não há produtos disponíveis no momento.</p>
</ng-template>
```

## Variável de referência

Variável de referência, denotada pelo símbolo `#` (hash), é uma maneira de se referir a um elemento especifico ou a um componente especifico do template angular

Essa referência pode ser usada para interagir com o elemento/componente no código do componente, seja para obter informações, manipular dados ou acionar métodos.

Vamos ver como funciona essa variável de referência com alguns exemplos:

****Referência a um Elemento HTML:****

```tsx
<!-- Usando uma variável de referência para um elemento HTML -->
<input #nomeInput type="text" />
<button (click)="exibirNome(nomeInput.value)">Exibir Nome</button>
```

```tsx
// No código do componente
exibirNome(nome: string) {
  alert(`Nome: ${nome}`);
}
```

Neste exemplo, **`#nomeInput`** é uma variável de referência para o elemento de entrada (**`<input>`**). Quando o botão é clicado, o método **`exibirNome`** é chamado, e o valor do campo de entrada é passado como argumento.

## Formulários

ReacvtiveFormsModule

FormsBuilder

formsGroup

Validators

formControlName → fazer a ligação

class.valid

class.invalid

Eventos que o formsContorl tem 

biblioteca ngx-mask

## Fazer o build da aplicação

"outputPath": "dist/proway-computers", —>"outputPath": "docs",

Url para que todos consigam acessar.

git 

comando para identificar

git config —global [user.name](http://user.name) “Luciano”

git config —global [user.](http://user.name)email lucianogfortes@gmail.com
