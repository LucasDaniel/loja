# loja

Faça o git clone de todo o projeto

No BackEnd:
- Instale o xampp e inicie o modulo de mysql
- Instale o MysqlWorkbench versão mais atual
  * Crie um schema com o nome de bd_loja
- Instale o node js versão mais atual
- Abra o visual studio code e na pasta backend Instale as dependencias necessarias do nestjs
- Adicione o seguinte .env na pasta backend
  * DB_HOST=127.0.0.1
  * DB_PORT=3306
  * DB_USERNAME=root
  * DB_PASSWORD=root
  * DB_NAME=db_loja
- Rode a aplicação pelo "npm run start:dev"

No FrontEnd:
- Abra o visual studio code e na pasta do front end Instale as dependencias necessarias do angular
- Rode a aplicação pelo "ng serve --open"
- Acesse o front end pelo http://localhost:4200

Para o envio de email:
- Na linha 36 do formulario.component.ts esta a variavel "toEmail" que é o email que será enviado após o termino do cadastro
