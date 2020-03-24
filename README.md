# Projeto Web - TokenLab

Projeto referente ao processo de admissão no estágio.

**Aplicante:** Lucas Arendt Neuhaus

**Curso:** Sistemas de Informação - USP



## O que o aplicativo faz?

- Possível criar múltiplos usuários;
- Adição de eventos;
- Edição de eventos;
- Remoção de eventos;
- Listagem de eventos;
- Não deixar sobrescrever eventos e caso ocorra, emitir um alerta para o usuário;
- Frontend renderizado no lado do cliente;



#### Atributos dos eventos

- Descrição
- Categoria
- Data
- Hora de início
- Hora de término



## O que foi utilizado para o a realização

Principais frameworks:

|                            React                             |                            Redux                             |                          Bootstrap                           |
| :----------------------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: |
| <img src="https://i.imgur.com/vv5aad5.png" alt="react" style="zoom:23%;" /> | <img src="https://i.imgur.com/GJMeyPc.png" alt="redux" style="zoom:25%;" /> | <img src="https://i.imgur.com/YABRAmF.png" alt="bootstrap" style="zoom:20%;" /> |

Demais bibliotecas:

- axios
- lodash
- react-router-dom
- react-tooltips
- redux-form
- redux-thunk



## Backend

O backend foi realizado com o auxílio da bibliteca json-server (https://github.com/typicode/json-server), o que proporcionou uma solução rápida para testar o produto com uma arquitetura REST. A comunicação entre o backend e o frontend foi realizada com a biblioteca **axios**. 



### Funcionalidades extras

1. O aplicativo não permite múltiplos usuários com o mesmo e-mail;
2. Página um pouco diferente caso não exista nenhum evento criado;
3. Nome do usuário logado no cabeçalho;
4. Não permite hora de início maior que hora de término;
5. Não permite sobreposição de eventos;
6. O botão de marca no cabeçalho redireciona de maneira diferente caso o usuário esteja logado ou não;
7. Não é possível navegar para a página de criação, edição ou listagem de eventos caso não exista um usuário logado;
8. Tooltip no ícone do evento mostrando a categoria ao sobrevoar o mouse.