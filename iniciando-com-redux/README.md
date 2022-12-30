# Avançando com React - Iniciando com Redux

## React
Lib mantida pelo Facebook/Instagram, open-source para a criação de interfaces, permitindo a criação de componentes reutilizáveis de forma simples e eficiente. Ideal para quem deseja trabalhar somente com o "V" do conceito MVC, visando somente a camada de visualização.

## Flux
É uma arquitetura criada pelo Facebook para desenvolver apps frontend que visa compartilhar o estado entre componentes de sua aplicação, tornando a comunicação unidirecional.

![Flux](./.github/flux-graph-simple.png)

## Redux
Redux é um container para controle e gerenciamento de estado global de aplicações JavaScript baseado na arquitetura Flux (tem o propósito de solucionar o problema de compartilhamento de estados entre componentes, tornando-o unidirecional).

![Flux vs Redux](./.github/flux-vs-redux.jpeg)

## Store
É um container imutável, isto é, não há alteração dele, e sim evolução, que armazena e centraliza o estado global da aplicação. Com isso, podemos dizer que é o conjunto de estados da aplicação centralizados/reunidos em um apenas um lugar.

O Store segue um dos princípios que formam e definem o conceito do Redux: **Um único ponto de verdade**

**Imutabilidade do estado**: o estado da aplicação é inalterável, mas é evoluível.

**Alterações são realizadas apenas por funções puras**: 
Reducers recebem as actions emitidas aplicando-as ao estado global. Sempre retornando um estado.

Tecnicamente, é um objeto JavaScript que possui todos os estados dos componentes da aplicação. Além disso, a store possui a função de monitorar as mudanças e notificar os que precisam saber delas.

## Reducers
Reducers são funções puras (funções que não geram efeitos colaterais, isto é, para a mesma entrada, temos a mesma saída) com a capacidade de disparar eventos e que podem alterar um atributo da store, evoluindo o estado global da aplicação.

Funcionam como filtros recebendo e tratando as informações, enviando essas informações à store. É encarregado de lidar com todas as ações, como algum componente pedindo para alterar algum dado da store, por exemplo.

Para todo dado contido na store, deve existir um reducer próprio daquele dado.

Tecnicamente, reducer é uma função JavaScript que recebe o estado anterior, ou um estado definido com padrão no seu parâmetro, e uma action e, dependendo do type dessa action pode gerar um novo estado, o que implica que nem sempre teremos evolução do estado.

Então, dentro dos reducers, temos as actions.

**Todo reducer ouve todas as actions disparadas pela aplicação e para alterar qualquer informação do estado, precisamos utilizar os reducers.**

**Anatomia de um reducer**
``` javascript
const initialState = {...}

function exemploReducer1(state = initialState, action) {
	switch(action.type) {
		case ‘TYPE_1’ :
			return { ...state, data: action.payload.data };
		default:
			return state;
                }
}
```

## Actions
**São fontes de informações que são enviadas da aplicação para o store passando pelos reducers**. São disparadas (dispatch) pelos actions creators (funções puras responsáveis por criarem as actions).

Tecnicamente, uma action é um objeto que possui, obrigatoriamente, um atributo nomeado type que indica que ação é. Pode ter dados associados ou não, mas geralmente possuem. Esses dados são reunidos em único atributo chamado de payload.

Como sugerido acima, um payload é um conjunto de dados, mas também pode ser, por exemplo, uma chamada para back-end.

Actions não realiza nenhuma alteração em nosso estado global. Lembre-se, são apenas objetos.

**Anatomia da Action**
``` javascript
{ 
    type: “TIPO_DO_EVENTO”,
    payload: {
	// dados associados a essa action
         }
}
```

**Action Creator**
Actions creators são funções puras responsáveis por criarem as actions.

``` javascript
function func1(params) {
      // lógica
    return {
        type: "TIPO_EVENTO",
        payload: {
            // dados associados a essa action 
        }
    }
}
```

### Quando usar Redux?
- Quando necessário gerenciar os estados de componentes;
- Reduzir complexidade em grandes projetos;
- Compartilhar dados entre os componentes;

