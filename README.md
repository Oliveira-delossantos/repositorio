# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
# Meu Portfólio - Desenvolvedor Full Stack

Este é o meu portfólio pessoal, desenvolvido utilizando **React** e **TypeScript**. Através deste portfólio, você poderá conhecer mais sobre o meu trabalho, minhas habilidades e projetos desenvolvidos.

## Tecnologias Usadas

- **React** (Biblioteca JavaScript para construção de interfaces)
- **TypeScript** (Superset do JavaScript para maior segurança de tipo)
- **Vite** (Ferramenta de bundling para desenvolvimento rápido)
- **React Router DOM** (Para navegação entre páginas)
- **CSS** (Para o estilo da aplicação)

## Funcionalidades

- **Página Inicial**: Apresenta uma visão geral de mim, incluindo uma foto e uma descrição das minhas habilidades e experiências.
- **Sobre Mim**: Expõe detalhes sobre minha formação acadêmica, experiência profissional e projetos desenvolvidos.
- **Meus Projetos**: Exibe dois projetos principais com links para os repositórios no GitHub.
- **Contato**: Formulário simples para que as pessoas entrem em contato comigo por email.

## Como Rodar o Projeto

### Requisitos

Antes de rodar o projeto, você precisa ter o **Node.js** e o **npm** ou **yarn** instalados. Você pode baixar o Node.js a partir de [aqui](https://nodejs.org/).

### Passos

1. **Clonar o repositório**:

   ```bash
   git clone https://github.com/usuario/meu-portifolio.git
   
 my-portifolio/
  ├── src/                   # Código fonte do aplicativo
  │   ├── assets/            # Imagens e outros arquivos estáticos
  │   │   ├── minha-foto.jpg # Foto pessoal
  │   │   ├── projeto1.jpg   # Imagem do Projeto 1
  │   │   ├── projeto2.jpg   # Imagem do Projeto 2
  │   ├── components/        # Componentes reutilizáveis (ex: Header, Footer)
  │   ├── pages/             # Páginas principais (ex: Home, ContactPage)
  │   ├── App.tsx            # Componente principal da aplicação
  │   ├── App.css            # Arquivo de estilos
  ├── public/                # Arquivos públicos (index.html, ícones, etc.)
  ├── package.json           # Definições do projeto e dependências
  ├── vite.config.ts         # Configuração do Vite
