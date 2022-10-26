# Sobre o projeto

Este projeto foi desenvolvido para o processo seletivo da empresa Dialog.

É um projeto para desenvolvimento fullstack, mas foquei no desenvolvimento do front-end, utilizando como banco de dados um arquivo chamado `db.json` com dados mocados disponibilizados pela empresa no repositório a seguir: [dialog-pwa-test](https://github.com/criticalmassbr/dialog-pwa-test).

## Criando a API fake

> Só será necessário criar uma nova API fake se a que eu criei para esse projeto parar de funcionar. Não sei quando ou se isso vai acontecer, mas fica o aviso.

Para criar a API fake a partir do arquivo mencionado acima, basta seguir os passos a seguir:

1. Entre no site: [API Mocha](https://apimocha.com/).
2. Crie um projeto com o nome que quiser.
3. Agora, crie um novo mock (Create New Mock) dentro das regras (Mock Rules).
4. Os únicos campos que serão modificados são `Request URL` e `Response HTTP Body`.
5. No campo `Request URL` coloque o nome como `/all`.
6. Já no campo `Response HTTP Body` copie e cole o arquivo `db.json`, ele está na pasta `db`.
7. Depois disso é só salvar.

> Obs.: Se você teve que criar uma nova API fake é necessário mais um passo, mas agora dentro do projeto. Vá até o arquivo `api.ts` dentro da pasta `services` e troque o parametro da propriedade `baseURL` para a do projeto que você criou. Será algo do tipo `https://apimocha.com/nome-do-projeto/`.

## Rodando o projeto localmente

Clone o projeto na sua máquina.

Depois disso, é preciso instalar os pacotes do projeto.

Rode o comando abaixo

```bash
yarn install
# ou
yarn
```

Com os pacotes instalados basta rodar o comando abaixo para inicializar o projeto:

```bash
yarn start
```

Abra [http://localhost:3000](http://localhost:3000) no navegador para ver o resultado.

Depois disso basta testar.

## Acessando o projeto em um servidor

Para visualizar o projeto rodando em um servidor da [`Vercel`](https://vercel.com/), acesse: [teste-dialog.vercel.app](https://teste-dialog.vercel.app/)
