# Case-API-Angular
<h1 align="center"> Case de lançamento de gastos pessoais </h1> 

Esse projeto foi realizado e Angular e o objetivo dele foi consumir a API: https://github.com/adelbs/it-api-case e em paralelo realizar a construção do Front-end da aplicação, que gerência os seus gastos pessoais, possuindo telas de cadastro de categorias  e lançamentos de gastos.

Essa aplicação é feita com as seguintes bibliotecas: Boostrap

## Arquitetura

<p align="center">
  <img src="https://github.com/pamelsilva/Case-API-Angular/assets/69605954/53ac7574-ea52-405d-83ec-e63015c3b34b" alt="Minha imagem" width="700px" />
</p>


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
## Testes de Qualidade e de Aplicação

<p align="center">
  <img src="https://github.com/pamelsilva/Case-API-Angular/assets/69605954/744913dd-bdab-4743-81e7-e287bcf8fece" alt="Minha imagem" width="100px" />
</p>



1. Testes Unitários: Os testes unitários verificam se cada unidade individual do seu código (como funções, classes ou componentes) funciona conforme o esperado. Para testar o código do Angular, você pode usar estruturas como Jasmine e Karma. Para testar o código Node.js, você pode utilizar o Jest, Mocha ou outras bibliotecas de teste. Esses testes são rápidos e ajudam a identificar problemas nas partes mais básicas do código.


2. Testes Regressivos: Os testes regressivos garantem que alterações e novos recursos adicionados ao código não causem regressões, ou seja, que não quebrem partes existentes do aplicativo. Para isso, você pode criar uma suíte de testes abrangente que cubra todos os principais recursos do aplicativo e executá-la sempre que houver uma mudança significativa no código.

3. Testes Integrados: Os testes integrados verificam se diferentes partes do sistema funcionam juntas corretamente. No caso de uma aplicação Angular com um backend Node.js, você pode usar ferramentas como o Protractor para testar a integração entre os componentes do frontend e do backend. Os testes integrados ajudam a garantir que todas as partes se comuniquem corretamente.

4. Testes de Performance: Os testes de desempenho avaliam o desempenho e a escalabilidade do aplicativo sob diferentes condições de carga. Você pode usar ferramentas como o Apache JMeter para simular usuários e verificar como o aplicativo responde a diferentes níveis de tráfego. Esses testes garantem que o aplicativo funcione sem problemas em condições de uso reais.

5. Testes de Resiliência: Os testes de resiliência verificam como o aplicativo se comporta em situações de falha. Você pode usar ferramentas como o Chaos Monkey para injetar falhas em componentes específicos do sistema e verificar se a aplicação consegue se recuperar adequadamente. Esses testes são especialmente importantes em ambientes distribuídos e em nuvem.



-----------------------------------------------------------------------------------------------------------
## Engenharia de Software e DevOps


<p align="center">
  <img src="https://github.com/pamelsilva/Case-API-Angular/assets/69605954/272b1bee-41b9-400f-b008-57c721694997" alt="Minha imagem" width="100px" />
</p>



Para aplicar escalabilidade, resiliência, alta disponibilidade, observabilidade com monitoração, segurança, acessibilidade e esteira CI/CD (Continuous Integration/Continuous Deployment) em uma aplicação Node.js com Angular, você pode seguir algumas práticas recomendadas e utilizar ferramentas apropriadas. Abaixo estão algumas sugestões para cada área:


1. Escalabilidade:

Utilize balanceadores de carga para distribuir o tráfego entre múltiplas instâncias do servidor Node.js.
Adote a arquitetura de microsserviços para que diferentes partes da aplicação possam ser escaladas independentemente.
Utilize serviços de nuvem que ofereçam escalabilidade automática, como AWS Elastic Beanstalk.

2. Resiliência e Alta Disponibilidade:

 Implemente tratamento de falhas em diferentes camadas da aplicação para garantir que erros não causem uma parada completa do sistema.
Utilize clusters ou contêineres para permitir que a aplicação seja executada em várias instâncias.
Configure bancos de dados e sistemas de armazenamento em alta disponibilidade para garantir que os dados estejam sempre acessíveis.

3. Observabilidade com Monitoração e Logs:

Utilize ferramentas de monitoração como o Prometheus e Grafana para acompanhar a saúde da aplicação e métricas de desempenho.
Registre logs detalhados para identificar e solucionar problemas de forma mais eficiente.
Utilize serviços de rastreamento de transações para entender o fluxo de uma requisição pela aplicação, como por ex: Appdynamics.

4. Segurança:

Mantenha todas as dependências do projeto atualizadas para evitar vulnerabilidades conhecidas.
Utilize autenticação e autorização robustas para proteger os endpoints da API.
Implemente práticas de segurança no código, como validação de entrada, para prevenir ataques comuns, como injeção de SQL ou ataques XSS (Cross-Site Scripting).

5. Acessibilidade:

Siga as diretrizes de acessibilidade do WCAG (Web Content Accessibility Guidelines) para garantir que sua aplicação seja acessível para pessoas com deficiência.
Faça uso de ferramentas de verificação de acessibilidade para identificar e corrigir problemas de acessibilidade em seu aplicativo.

6. Esteira CI/CD (Continuous Integration/Continuous Deployment):

Configure um sistema de integração contínua para automatizar os testes e builds de sua aplicação, como Jenkins, CircleCI ou GitLab CI/CD.
Automatize a implantação da aplicação em ambientes de desenvolvimento, teste e produção, usando ferramentas como Kubernetes, Docker, ou ferramentas de infraestrutura em nuvem como AWS CloudFormation.




