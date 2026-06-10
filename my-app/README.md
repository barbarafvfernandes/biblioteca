# Gerenciador de Livros

Uma aplicação web moderna para gerenciamento de catálogo de livros pessoais, desenvolvida com React, Vite e TypeScript. O projeto consome uma API REST para realizar operações de CRUD (Create, Read, Delete).

## Tecnologias Utilizadas

- **[React](https://react.dev)** (v19+) - Biblioteca para construção de interfaces.
- **[Vite](https://vite.dev)** - Build tool ultra-rápido para desenvolvimento frontend.
- **[TypeScript](https://typescriptlang.org)** - Para tipagem estática e segurança de código.
- **[Axios](https://axios-http.com)** - Cliente HTTP baseado em promessas para requisições à API.
- **Componentização** - Separação de responsabilidades utilizando Custom Hooks (`useBooks`) e comunicação via Props.

## Instalação

Certifique-se de ter o [Node.js](https://nodejs.org) instalado em sua máquina antes de prosseguir.

1. Clone o repositório para sua máquina local:
   ```bash
   git clone https://github.com/barbarafvfernandes/biblioteca.git
   ```

2. Acesse a pasta do projeto:
   ```bash
   cd nome-do-repositorio
   ```

3. Instale as dependências utilizando o gerenciador de pacotes de sua preferência:
   ```bash
   npm install
   # ou
   yarn install
   # ou
   pnpm install
   ```

## Execução e Scripts

No diretório do projeto, você pode executar os seguintes comandos:

### Rodar em modo de Desenvolvimento
Inicia o servidor de desenvolvimento local com suporte a Hot Module Replacement (HMR).
```bash
npm run dev
# ou yarn dev / pnpm dev
```
Após iniciar, abra [http://localhost:5173](http://localhost:5173) no seu navegador.(Atenção: pode ocorrer alguma mudança neste endereço)

### Compilar para Produção (Build)
Gera uma versão otimizada e minificada do projeto na pasta `dist/`, pronta para deploy.
```bash
npm run build
# ou yarn build / pnpm build
```

### Visualizar o Build Localmente
Executa localmente o código compilado da pasta `dist` para testar o comportamento de produção antes do deploy.
```bash
npm run preview
# ou yarn preview / pnpm preview
```

### Executar o Linter
Analisa o código em busca de problemas e garante a consistência do padrão de escrita.
```bash
npm run lint
# ou yarn lint / pnpm lint
```

## Observação Importante: API do CrudCrud

Este projeto utiliza o serviço **[CrudCrud](https://crudcrud.com)** como backend temporário para armazenar os dados dos livros.

> **Atenção:** As URLs geradas pelo CrudCrud são públicas e **expiram automaticamente após 24 horas** ou após atingirem o limite de requisições gratuitas.

Se os livros pararem de carregar ou ocorrer erro nas requisições:
1. Acesse o site [crudcrud.com](https://crudcrud.com).
2. Copie a nova URL única gerada na página inicial.
3. Abra o arquivo onde o hook `useBooks` está configurado (`src/hooks/useBooks.ts`).
4. Atualize a constante `API_URL` com o seu novo endpoint, lembrando de adicionar o sufixo do seu recurso (ex: `/livros`):

```typescript
// Exemplo de atualização no arquivo useBooks.ts
const API_URL = 'https://crudcrud.comapi/NOVA_CHAVE_AQUI/livros';
```

```
