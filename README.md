# Case-API-Angular
<h1 align="center"> Case de lançamento de gastos pessoais </h1> 

Esse projeto foi realizado e Angular e o objetivo dele foi consumir a API: https://github.com/adelbs/it-api-case e em paralelo realizar a construção do Front-end da aplicação, que gerência os seus gastos pessoais, possuindo telas de cadastro de categorias  e lançamentos de gastos.

Essa aplicação é feita com as seguintes bibliotecas: Boostrap

## Arquitetura

![arquitetura](https://github.com/pamelsilva/Case-API-Angular/assets/69605954/53ac7574-ea52-405d-83ec-e63015c3b34b)


<h1 align="center">
   
</h1>

## Pré Requisitos 

* NodeJS: Você pode realizar o download em: https://nodejs.org/ 
* Visual Studio Code: Você pode realizar o download em: https://code.visualstudio.com/
* Git bash: Você pode realizar o download em: https://git-scm.com/downloads

## Como executar o projeto:

1) Faça o clone do repositório em sua máquina com o Git bash:

```bash
git clone https://github.com/pamelsilva/Case--API-Angular.git
```

3) Acesse a pasta onde está localizado o download 

```bash
cd nomedapasta (onde foi realizado o clone do projeto)
```
5) Com o Git bash, utilize o comando (code .), será aberto o aplicativo VsCode em sua máquina
6) Após o projeto ser aberto no VsCode, clique em terminal e execute os passos abaixo: 

```bash
cd it-api-case
```

```bash
node index.js
```
7) Se você ver a mensagem abaixo, está tudo certo, e a API já está rodando:

```
Aplicação no ar!
```
-----------------------------------------------------------------------------------------------------------

8) Para rodar o frontend da aplicação:

```bash
cd it-frontend-case
```

```bash
ng serve
```
9) Aguarde a mensagem de compilação, conforme a imagem abaixo:
10) Veja também a porta de execução da aplicação

![image](https://github.com/pamelsilva/Case-API-Angular/assets/69605954/50c44a0b-5002-4f13-bfe3-66b4774a01b1)


-----------------------------------------------------------------------------------------------------------

Testes de Qualidade e de Aplicação

1. Testes Unitários: Os testes unitários verificam se cada unidade individual do seu código (como funções, classes ou componentes) funciona conforme o esperado. Para testar o código do Angular, você pode usar estruturas como Jasmine e Karma. Para testar o código Node.js, você pode utilizar o Jest, Mocha ou outras bibliotecas de teste. Esses testes são rápidos e ajudam a identificar problemas nas partes mais básicas do código.


2. Testes Regressivos: Os testes regressivos garantem que alterações e novos recursos adicionados ao código não causem regressões, ou seja, que não quebrem partes existentes do aplicativo. Para isso, você pode criar uma suíte de testes abrangente que cubra todos os principais recursos do aplicativo e executá-la sempre que houver uma mudança significativa no código.

3. Testes Integrados: Os testes integrados verificam se diferentes partes do sistema funcionam juntas corretamente. No caso de uma aplicação Angular com um backend Node.js, você pode usar ferramentas como o Protractor para testar a integração entre os componentes do frontend e do backend. Os testes integrados ajudam a garantir que todas as partes se comuniquem corretamente.

4. Testes de Performance: Os testes de desempenho avaliam o desempenho e a escalabilidade do aplicativo sob diferentes condições de carga. Você pode usar ferramentas como o Apache JMeter para simular usuários e verificar como o aplicativo responde a diferentes níveis de tráfego. Esses testes garantem que o aplicativo funcione sem problemas em condições de uso reais.

5. Testes de Resiliência: Os testes de resiliência verificam como o aplicativo se comporta em situações de falha. Você pode usar ferramentas como o Chaos Monkey para injetar falhas em componentes específicos do sistema e verificar se a aplicação consegue se recuperar adequadamente. Esses testes são especialmente importantes em ambientes distribuídos e em nuvem.
