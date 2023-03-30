# LABFashion

Projeto desenvolvido utilizando Angular CLI, versão 15.1.6, e json-server para criação de um demo rest json webservice, como requisito para conclusão do projeto I do módulo I do curso DevinHouse turma Audaces.

## Ferramentas e requisitos necessárias para rodar o projeto
- VSCode
- Angular CLI 15.1.6 e suas dependências
- JSON server 0.17.3

### Como rodar a Aplicação

1. Iniciar sua IDE
2. Inicie sua api rest JSON server pelo comando json-server --watch db.json na raiz do projeto
3. Após carregar o banco de dados, acessar http://localhost:3000/ para verificar se carregou os dados corretamente 
4. Caso não carregue coom o comando a cima, utilizar comando npx json-server db.json --watch
5. Na pasta app, rodar o comando ng serve para carregar aplicação
6. Após carregar o projeto, acessar http://localhost:4200/login para começar a navegar

### Modelo JSON de entrada
```json
{
        "usuarios": [
          {
            "id": 1,
            "nome": "admin",
            "senha": "root1234",
            "nomeEmpresa": "admin",
            "cnpj": "11111111000111",
            "email": "admin@admin.com"
          }
        ],
        "colecoes": [
          {
            "id": 1,
            "nomeColecao": "Outono/Inverno",
            "responsavelColecao": "Murilo",
            "estacao": "inverno",
            "marca": "Adidas",
            "orcamento": 9500,
            "lancamento": "2023"
          }
        ],
        "modelos": [
          {
            "id": 1,
            "nomeModelo": "Camiseta sport",
            "responsavelModelo": "Murilo",
            "tipo": "camisa",
            "colecao": "Outono/Inverno",
            "colecaoId": 1,
            "bordado": "nao",
            "estampa": "nao"
          }
        ]
}
```

### Tipos de dados

- id -> identificador criado automaticamente
- nome -> String de preenchimento obrigatório
- senha" -> String de preenchimento não obrigatório com minimo de 8 caracteres
- nomeEmpresa -> String de preenchimento obrigatório
- cnpj -> String de preenchimento não obrigatório de 14 caracteres
- email -> String de preenchimento obrigatório no formato padrão de e-mail
- nomeColecao -> String de preenchimento obrigatório
- responsavelColecao -> String de preenchimento obrigatório
- estacao -> String de preenchimento obrigatório
- marca -> String de preenchimento obrigatório
- orcamento -> Number de preenchimento obrigatório
- lancamento -> String de preenchimento obrigatório
- nomeModelo -> String de preenchimento obrigatório
- responsavelModelo -> String de preenchimento obrigatório
- colecao -> String de preenchimento obrigatório
- colecaoId -> Identificador do tipo number que relaciona coleção com modelo
- bordado -> String de preenchimento obrigatório de valores Sim ou Não
- estampa -> String de preenchimento obrigatório de valores Sim ou Não

### Autor

Murilo Dircksen
https://www.linkedin.com/in/murilodircksen/
