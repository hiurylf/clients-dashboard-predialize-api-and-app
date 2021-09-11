
# Dashboard de Clientes!

## Projeto

O projeto é um monolito divido em dois módulos: **Api** e **App**. A Api foi construída em **NodeJs** e no App utilizamos **Angular**.

## Features

 - **Ao entrar na página de Clientes, o usuário deve visualizar todos os resultados exibidos em cards**.
	 - Requisitar informações do endpoint `get("/")`;
	 - Retornar da Api somente: *_id, imagem, nome, quantidade de empreendimentos e quantidade de imóveis de cada cliente.*
	 - Exibir os resultados obtidos;
	 
 - **Na página de Clientes, o usuário deve poder pesquisar por nome.**
	 - Input para pesquisa.
	 - Requisitar o endpoint `get("/name/:name")` ao digitar a pesquisa. Nenhum botão "pesquisar" deve ser criado;
	 - Retornar da Api somente: *_id, imagem, nome, quantidade de empreendimentos e quantidade de imóveis de cada cliente.*
	 - A pesquisa deve retornar os resultados mesmo que não se tenha um *match* completo do termo pesquisado.
	 - Exibir somente os resultados retornados em cards;
	 
 - **Na página de Clientes, o usuário deverá poder visualizar alguns totalizadores:**
	 - Requisitar informações do endpoint `get("/totals")`;
	 - Retornar somente os totais de: *Clientes, Empreendimentos e Imóveis;*
	 - Exibir os resultados dos totais obtidos;
	 
 - **Na página de Clientes, o usuário deverá poder ver seus detalhes de forma individual:**
	 - A página de detalhamento do App deve possuir uma rota `(/client/:_id)` e um **componente próprio.**
	 - Requisitar informações do endpoint `get("/:_id")`;
	 - Retornar somente: *_id, imagem e nome*;
	 - Exibir as informações obtidas;

 - **Na página de Detalhes do Cliente, o usuário deverá poder visualizar alguns totalizadores:**
	 - Requisitar informações do endpoint `get("/:client_id/totals")`;
	 - Retornar somente os totais de: *Empreendimentos e Imóveis;*
	 - Exibir os resultados dos totais obtidos;

 - **Na página de Detalhes do Cliente, o usuário deverá poder ver todos os empreendimentos referentes a ele:**
	 - Requisitar informações do endpoint `get("/:client_id/enterprise")`;
	 - Retornar somente: *_id, imagem, nome e quantidade de imóveis de cada cliente.*;
	 - Exibir as informações obtidas.

- **Na página de Detalhes do Cliente, o usuário deve poder pesquisar pelo nome do empreendimento:**
	- Input para pesquisa.
	- Requisitar o endpoint `get("/:client_id/enterprise/name/:name")` ao digitar a pesquisa. *Nenhum botão "pesquisar" deve ser criado;*
	- Retornar da Api os empreendimentos com somente: *_id, imagem, nome e quantidade de imóveis de cada cliente.*
	- A pesquisa deve retornar os resultados mesmo que não se tenha um "match" completo do termo pesquisado.
	- Exibir somente os resultados retornados;

- **Ao entrar na página de Empreendimentos, o usuário deve visualizar todos os resultados exibidos em cards.**
	- Requisitar informações do endpoint `get("/enterprise")`;
	- Retornar da Api somente: *_id, imagem, nome, nome do cliente (empresa) e quantidade de imóveis de cada empreendimento.*
	- Exibir os resultados obtidos em cards;

- **Na página de Empreendimentos, o usuário deve poder pesquisar por nome.**
	- Input para pesquisa.
	- Requisitar o endpoint `get("/enterprise/name/:name")` ao digitar a pesquisa. *Nenhum botão "pesquisar" deve ser criado*;
	- Retornar da Api somente: *_id, imagem, nome, nome do cliente (empresa) e quantidade de imóveis de cada cliente.*
	- A pesquisa deve retornar os resultados mesmo que não se tenha um "match" completo do termo pesquisado;
	- Exibir somente os resultados retornados;
