# Carrinho de compras

Projeto de um carrinho de compras desenvolvido como desafio para o Bootcamp `Eldorado Tech Training`.

## Angular

O projeto foi gerado com o [Angular CLI](https://github.com/angular/angular-cli) versão 15.1.1.

## Execução em desenvolvimento

Rode `ng serve` para executar o projeto em desenvolvimento. Use a url `http://localhost:4200/`.

## API

Foi utilizado dados baseados na [Fake Store API](https://fakestoreapi.com/) para geração de produtos aleatórios.

Os dados foram acessados pelo [Insomnia](https://insomnia.rest/).

### CUPONS

Esses são os cupons válidos na aplicação. Todos os cupons foram inseridos neste [arquivo](src/app/shared/constants/coupon.constant.ts).

| Cupom     | Desconto (%) |
| :-------- | -----------: |
| GET50OFF  |           50 |
| BRUNO5    |            5 |
| PROSPER15 |           15 |

### Usuários de Teste

Esses são alguns usuários criados para teste dentro da plataforma. Todos os usuários foram inseridos neste [arquivo](src/app/shared/constants/users.constant.ts).

| E-mail                | Senha      | Role  |
| :-------------------- | :--------- | :---: |
| atuny0@sohu.com       | 9uQFF1Lh   | Admin |
| hbingley1@plala.or.jp | CQutx25i8r | User  |
| rshawe2@51.la         | OWsTbMUgFc | User  |
