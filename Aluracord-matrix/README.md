# Aluracord Matrix

[![licence mit](https://img.shields.io/badge/licence-MIT-blue)](LICENSE)

Projeto Next.Js tendo como base o Discord!

## Tecnologias e libs utilizadas

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.dev)
- [React.Js](https://pt-br.reactjs.org)
- [Next.Js](https://nextjs.org)
- [Supabase](https://github.com/supabase/supabase)
- [SkynexUI](https://skynexui.dev)

## Comando SQL

> Comando SQL necessário para deixar o projeto Supabase utilizável por esse projeto pode ser encontrado no [`schema.sql`](./schema.sql)

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
cd Alura-Imersao/Aluracord-matrix
```

### 5. Configurar variáveis de ambiente

Copie o arquivo `.env.example` neste diretório para `.env.local` (que será ignorado pelo Git):

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

## Licença

Este projeto esta sobe a licença [MIT](/LICENSE).
