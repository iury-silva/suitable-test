# Desafio Frontend - Suitable

Este projeto foi desenvolvido como resposta ao desafio técnico da Suitable para avaliação de candidatos na área de desenvolvimento frontend.

## 📋 Sobre o Desafio

O objetivo é desenvolver uma página web que servirá como _Home_ do cardápio digital de uma hamburgueria, incluindo:

- **Cabeçalho** com identificação do estabelecimento
- **Cardápio** com categorias e produtos organizados
- **Rodapé** com carrinho de compras (quantidade e valor total)

## 🚀 Tecnologias Utilizadas

### Core

- **React 19** - Biblioteca para construção da interface
- **TypeScript** - Superset do JavaScript com tipagem estática
- **Vite** - Build tool e dev server
- **Tailwind CSS 4** - Framework CSS utilitário

### Gerenciamento de Estado

- **Zustand** - Gerenciamento de estado global
- **TanStack Query** - Gerenciamento de estado assíncrono e cache

### UI/UX

- **Radix UI** - Componentes primitivos acessíveis
- **Lucide React** - Ícones
- **Vaul** - Drawer component
- **Class Variance Authority** - Utilitário para variantes de componentes

### Desenvolvimento

- **ESLint** - Linting de código
- **React Router Dom** - Roteamento

## 🏗️ Arquitetura do Projeto

```
src/
├── api/              # Configuração da API
├── components/       # Componentes reutilizáveis
│   ├── cart/        # Componentes do carrinho
│   ├── company/     # Componentes da empresa
│   ├── layout/      # Layout e estrutura da página
│   ├── products/    # Componentes de produtos
│   ├── theme/       # Componentes de tema
│   └── ui/          # Componentes de interface (shadcn/ui)
├── contexts/         # Context providers
├── hooks/           # Custom hooks
├── pages/           # Páginas da aplicação
├── routes/          # Configuração de rotas
├── services/        # Serviços de API
├── stores/          # Stores do Zustand
├── types/           # Definições de tipos TypeScript
└── utils/           # Funções utilitárias
```

## 🔧 Instalação e Execução

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

### Passos

1. **Clone o repositório**

   ```bash
   git clone https://github.com/iury-silva/suitable-test.git
   ```

2. **Instale as dependências**

   ```bash
   npm install
   ```

3. **Execute o projeto em modo desenvolvimento**

   ```bash
   npm run dev
   ```

4. **Acesse a aplicação**
   ```
   http://localhost:5173
   ```

## 📚 Scripts Disponíveis

```bash
npm run dev          # Executa em modo desenvolvimento
npm run build        # Gera build de produção
npm run preview      # Visualiza o build de produção
npm run lint         # Executa o linting
npm run storybook    # Executa o Storybook
npm run build-storybook # Gera build do Storybook
```

## 🔗 APIs Utilizadas

- **Produtos e Categorias**: https://demoburger.stbl.com.br/estoque/v2/app/products/list/?app_variant=mobile
- **Dados da Empresa**: https://demoburger.stbl.com.br/core/v2/app/store/config/?format=json&app_variant=mobile

## ✨ Funcionalidades Implementadas

### ✅ Requisitos Obrigatórios

- [x] Cabeçalho com identificação do estabelecimento
- [x] Cardápio organizado por categorias
- [x] Botões de adicionar (+) e remover (-) produtos
- [x] Rodapé com carrinho (quantidade e valor total)
- [x] Apresentação de nome e preço dos produtos

### 🎯 Funcionalidades Extras

- [x] Design responsivo
- [x] Componentes reutilizáveis e bem documentados
- [x] Gerenciamento de estado otimizado
- [x] Interface acessível (Radix UI)
- [x] Tema claro/escuro
- [x] Loading states e error handling


