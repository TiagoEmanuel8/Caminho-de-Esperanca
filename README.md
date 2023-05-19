
# Boas vindas ao projeto Caminho de Esperança

# Sumário

- [Comentários sobre o projeto](#comentários-sobre-o-projeto)
- [O que é o Caminhos de esperança?](#o-que-é-o-caminhos-de-esperança)
- [Deploy](#deploy)
- [Tecnologias envolvidas](#tecnologias-envolvidas)
- [Funcionalidades](#funcionalidades)
- [Preview](#preview)
- [Instalação e uso](#instalação-e-uso)

---

#  Comentários sobre o projeto

Esse projeto é sobre um projeto social fictício chamado 'Caminho de esperança', mas tive essa ideia a partir da atuação em grupos de voluntários que arrecadam e distribuem cestas básicas para familias necessitadas.

Então pensei em uma solução que envolvesse conhecimentos como desenvolvedor web que pudessem ajudar, foi então que tive a ideia de fazer um sistema de doação, onde quem se interessar pode em poucos passos realizar a doação para o projeto e também é possível ver quantas cestas básicas o projeto já arrecadou.

Esse projeto foi especial porque é totalmente aplicável a ajudar algum projeto social futuramente e também usei  o graphql para uma comunicação mais rápida possível entre frontend e backend, considerando fatores como velocidade de internet e dispositivos que as pessoas irão acessar para fazer a doação na plataforma nesse contexto o graphql é uma solução interessante. 

Para os próximos passos irei fazer o deploy da aplicação, integrar com alguma plataforma de pagamento e configurar um serviço de avisos por email.

possui alguma dúvida, feedback ou quer entrar em contato comigo? 
procure me através do email: tiago.emanuel.n@gmail.com

---

# O que é o Caminhos de Esperança?

Uma aplicação fullstack para arrecadar cestas básicas para um projeto social fictício chamado _caminhos de esperança_ que ajuda famílias necessitadas. 

---

# Deploy

Acesse https://caminho-de-esperanca.vercel.app/ e veja a aplicação em tempo real em sua máquina

---

# Tecnologias envolvidas:
<div>
  <a href="https://www.typescriptlang.org/">
    <img src="https://img.shields.io/badge/typescript-339933?style=for-the-badge&logo=typescript&color=gray" />
  </a>
  <a href="https://javascript.info/">
    <img src="https://img.shields.io/badge/javascript-339933?style=for-the-badge&logo=javascript&color=gray" />
  </a>
    <a href="https://www.docker.com/">
    <img src="https://img.shields.io/badge/docker-339933?style=for-the-badge&logo=docker&color=gray" />  </a>
    <a href="https://docs.npmjs.com/">
        <a href="https://www.docker.com/">
    <img src="https://img.shields.io/badge/graphql-339933?style=for-the-badge&logo=graphql&color=gray" />  </a>
    <a href="https://docs.npmjs.com/">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&color=gray" />
  </a>
  <a href="https://docs.npmjs.com/">
  <img src="https://img.shields.io/badge/reactjs-339933?style=for-the-badge&logo=react&color=gray" />
  </a>
    <a href="https://expressjs.com/pt-br/">
    <img src="https://img.shields.io/badge/nest-339933?style=for-the-badge&logo=nestjs&color=gray" /> 
  </a>
  <a href="https://expressjs.com/pt-br/">
    <img src="https://img.shields.io/badge/Express.js-339933?style=for-the-badge&logo=express&color=gray" /> 
  </a>
  <a href="https://www.mongodb.com/">
    <img src="https://img.shields.io/badge/postgres-339933?style=for-the-badge&logo=postgresql&color=gray" />
  </a>
  <a href="https://mongoosejs.com/">
    <img src="https://img.shields.io/badge/prisma-339933?style=for-the-badge&logo=prisma&color=gray" />
  </a>
  <a href="https://nodemon.io/">
    <img src="https://img.shields.io/badge/chackra-ui-339933?style=for-the-badge&logo=chackra-ui&color=gray" />
  </a>
  <a href="https://jestjs.io/pt-BR/">
    <img src=" https://img.shields.io/badge/jest-339933?style=for-the-badge&logo=jest&color=gray "/>
  </a>
    <a href="https://git-scm.com/">
    <img src="https://img.shields.io/badge/git-339933?style=for-the-badge&logo=git&color=gray" />
  </a>
  <a href="https://eslint.org/">
    <img src="https://img.shields.io/badge/eslint-339933?style=for-the-badge&logo=eslint&color=gray" />
  </a>
  </a>
  </div>

---

# Funcionalidades

- Realizar doação
- Listar todas as doações em um mural
- Listar todas as doações pela mais recente ou maior doação

---

# Preview

_Obs: essa marca d'água foi gerada por um site que usei para acelerar a velocidade do vídeo_

![2023-05-18-11-43-49_Ud1FLOqZ](https://github.com/TiagoEmanuel8/Caminho-de-Esperanca/assets/72472530/75f8e7a6-37e4-483c-bd18-93fa058aa575)


---

# Instalação e uso

Para executar o projeto sua máquina deve satisfazer os requisitos abaixo.  
  
Pré-requisitos  
  
```  
- node v18.16.0  
- npm v9.5.1  
- git version v2.34.1  
  
```  
  
[Download node js](https://nodejs.org/en/)  
  
[Download git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)  
  
### Clonando o projeto  
  
Digite o comando abaixo para clonar o projeto.  
  
```  
git clone https://github.com/TiagoEmanuel8/Caminho-de-Esperanca.git
  
```  
  
Entre na pasta  
  
```  
cd caminhos-de-esperanca
  
```  
### Executando o projeto com **docker**

<details>

<summary>Clique para exibir os detalhes</summary>


### Execute o comando abaixo para iniciar o docker  
  
```  
docker-compose up -d && docker exec -it caminhos_de_esperanca bash
```  
### Abra 2 terminais dentro do projeto
 no 1º terminal acesse
```  
cd backend
```  
e instale as dependências com o comando
```  
npm install
```  

 no 2º terminal acesse
```  
cd frontend
```  
e instale as dependências com o comando
```  
npm install
```  
### Execute o projeto  
  em ambos os terminais digite
```  
npm start  
```  

### Caso queira parar a execução do docker use o comando
  
```  
docker-compose down --rmi local --volumes --remove-orphans
```  

*Obs: apesar do docker ter abordagens mais simples onde com um comando é possível criar tudo, mas meu objetivo inicial era popular o banco de dados sem a necessidade de testar todas as rotas e para isso deveria usar as seeders do sequelize, então a melhor solução que encontrei foi essa.*

</details>

### Executando o projeto **localmente**

<details>

<summary>Clique para exibir os detalhes</summary>
  
### Instale as dependências  
  
```  
npm install  
```  
### Execute o projeto  
  
```  
npm start  
```  
ou
``` 
npm run nodemon  
``` 
</details>

---

