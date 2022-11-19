# Aluratube

[![license mit](https://img.shields.io/badge/licence-MIT-blue)](../LICENSE "Ver licença MIT")

[<img src="./public/Logo.svg" alt="Logo" width="80" />](https://aluratube0.vercel.app/ "Demonstração do projeto")

Projeto [Next.Js](https://nextjs.org/ "Site do Next.Js") tendo como ideia a criação das playlists do YouTube.

## Tecnologias utilizadas

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.dev)
- [React.Js](https://pt-br.reactjs.org)
- [Next.Js](https://nextjs.org)
- [Supabase](https://github.com/supabase/supabase)
- [Styled Components](https://styled-components.com/)

## Comando SQL

> Comando SQL necessário para deixar o projeto Supabase utilizável por esse projeto pode ser encontrado no [`schema.sql`](./schema.sql).

## Como executar o projeto

Para executar o projeto você precisa ter o [Node.js](https://nodejs.dev) e o [Git](https://git-scm.com) instalados na sua maquina. Você também precisará de um editor de código, eu utilizei o [VSCode](https://code.visualstudio.com).

### 1. Configurando o [Supabase](https://app.supabase.io/)

- Faça login e crie um projeto no [Supabase](https://app.supabase.io/). Aguarde o início do banco de dados.

- Depois que seu banco de dados for iniciado, execute o [Comando SQL](#comando-sql). Dentro do seu projeto, entre na guia do `SQL Editor`, Clique em "New Query", cole o comando e clique em  "RUN".

### 2. Pegando a URL e a Key

Agora, vá para as configurações do projeto **(o ícone de engrenagem)**, abra a guia API e encontre a URL da API e a Key **(Anon Public)**, você precisará delas na [etapa 5](#5-configurar-vari%C3%A1veis-de-ambiente).

### 3. Clone esse repositório

```bash
git clone https://github.com/ShadowsS01/Alura-Imersao.git
```

### 4. Acesse a pasta do projeto

```bash
cd Alura-Imersao/aluratube
```

### 5. Configurar variáveis de ambiente

Copie o arquivo `.env.example` neste diretório para `.env.local` *(que será ignorado pelo Git)*:

```bash
cp .env.example .env.local
```

Em seguida, defina cada variável em `.env.local` com a URL e a key obtida na [Etapa 2](#2-pegando-a-url-e-a-key):

```env
NEXT_PUBLIC_SUPABASE_URL=Url Obtida
NEXT_PUBLIC_SUPABASE_ANON_KEY=A key anon
```

### 6. Instale as dependências

```bash
npm install
```

### 7. Execute a aplicação em modo de desenvolvimento

```bash
npm run dev
```

## Demo

<https://aluratube0.vercel.app/>

## Licença

Este projeto esta sob a licença [MIT](../LICENSE "Ver licença MIT").

🔝[Voltar para o topo](#aluratube "Voltar para o topo")
