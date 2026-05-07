# 💊 Farmácia API

<p align="center">
  <img src="https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white" />
  <img src="https://img.shields.io/badge/REST%20API-000000?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Status-Em%20Desenvolvimento-yellow?style=for-the-badge" />
</p>

---

## 📖 Sobre o Projeto

O **Farmácia API** é uma aplicação backend desenvolvida com **NestJS** e **TypeScript**, focada na construção de uma API moderna, organizada e escalável.

O projeto foi estruturado utilizando boas práticas de arquitetura backend, separação de responsabilidades e modularização, servindo como base sólida para sistemas de gerenciamento farmacêutico.

A aplicação utiliza o ecossistema NestJS para fornecer:

- Estrutura modular
- Organização em camadas
- Injeção de dependência
- Escalabilidade
- Facilidade de manutenção
- Testes automatizados

---

## ✨ Funcionalidades

✅ Estrutura completa com NestJS  
✅ API REST preparada para expansão  
✅ Arquitetura modular  
✅ Injeção de dependência  
✅ Inicialização automática do servidor  
✅ Configuração pronta para testes unitários  
✅ Configuração de lint e formatação  
✅ Ambiente preparado para produção  

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Finalidade |
|---|---|
| NestJS | Framework backend |
| TypeScript | Linguagem principal |
| Node.js | Ambiente de execução |
| Jest | Testes automatizados |
| ESLint | Padronização de código |
| Prettier | Formatação automática |
| RxJS | Programação reativa |
| Express | Servidor HTTP interno do NestJS |

---

## 🧠 Conceitos Aplicados

- Arquitetura Modular
- REST API
- Dependency Injection
- Clean Code
- Organização em camadas
- Testes unitários
- Escalabilidade backend
- Estrutura enterprise com NestJS

---

## 📂 Estrutura do Projeto

```bash
.
├── src/
│   ├── app.controller.spec.ts
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   └── main.ts
├── test/
├── .gitignore
├── .prettierrc
├── README.md
├── eslint.config.mjs
├── nest-cli.json
├── package-lock.json
├── package.json
├── tsconfig.build.json
└── tsconfig.json
```

---

## ⚙️ Pré-requisitos

Antes de executar o projeto, é necessário ter instalado:

- Node.js
- npm
- NestJS CLI

---

## 🚀 Instalação e Execução

### 1️⃣ Clone o repositório

```bash
git clone https://github.com/seu-usuario/farmacia_gen.git
```

---

### 2️⃣ Acesse a pasta do projeto

```bash
cd farmacia_gen
```

---

### 3️⃣ Instale as dependências

```bash
npm install
```

---

### 4️⃣ Execute o projeto em desenvolvimento

```bash
npm run start:dev
```

---

### 5️⃣ Executando em produção

```bash
npm run build
npm run start:prod
```

---

## 💻 Exemplo de Uso

### ▶️ Requisição

```http
GET /
```

### ✅ Resposta

```json
Hello World!
```

---

## 🛡️ Resiliência e Tratamento de Erros

O projeto utiliza a estrutura do NestJS, que oferece suporte nativo para:

### ✔️ Tratamento centralizado de exceções

O framework possui suporte a:

- Exception Filters
- HTTP Exceptions
- Interceptors
- Middleware

---

### ✔️ Arquitetura escalável

A separação em módulos facilita:

- Manutenção
- Expansão futura
- Reutilização de código

---

### ✔️ Testabilidade

A aplicação já está configurada com:

- Jest
- Testes unitários
- Ambiente isolado para validação

---

## 🧪 Testes e Validação

O projeto possui configuração pronta para testes automatizados utilizando Jest.

### ▶️ Executar testes unitários

```bash
npm run test
```

---

### ▶️ Executar cobertura de testes

```bash
npm run test:cov
```

---

### Cenários validados

| Cenário | Resultado Esperado |
|---|---|
| Inicialização da API | Servidor online |
| Controller principal | Retorno correto |
| Service principal | Funcionamento validado |
| Ambiente de testes | Execução sem falhas |

---

## 📚 Aprendizados

Este projeto permitiu aprofundar conhecimentos em:

- Desenvolvimento backend com NestJS
- Estruturação de APIs REST
- Arquitetura modular
- Dependency Injection
- Configuração de ambiente Node.js
- Testes automatizados com Jest
- Padronização de código com ESLint e Prettier

---

## 🔮 Melhorias Futuras

- CRUD de produtos
- CRUD de categorias
- Integração com banco de dados
- Swagger Documentation
- Autenticação JWT
- Controle de estoque
- Deploy em nuvem
- Dockerização da aplicação

---

## 👨‍💻 Autor

Desenvolvido por **Yasmin Guidella** 🚀
