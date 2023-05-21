# iHack2green
"O iHack2Green é o maior hackathon de hidrogênio do Brasil, e, nessa segunda edição, os participantes deverão desenvolver soluções para desafios relacionados a inovação em modelos de negócios financeiros para estimular o investimento e a compra de H2V, geração de negócios para tornar o Brasil reconhecido no mercado de H2V e aceleração da descarbonização da indústria por meio do H2V."

Disponível em: https://ihack2green.com.br/#hackathon (Data de acesso em 21/05/2023)

## Visão Geral



## Tecnologias Utilizadas
* HTML, CSS e JavaScript para a aplicação
* Python como servidor backend 
* Solidity para smart contract
* C++ para o embarcado

## Recursos

Para o processo de ideação e produção do mockup, utilizamos o figma:
https://www.figma.com/file/qWhTXbim1ZAHCv8mNutRjU/VerdiLabs?type=design&node-id=0%3A1&t=fD2yEqTC0lkJOKPu-1

## Arquitetura da Solução

A solução é composta por várias tecnologias interligadas para fornecer um sistema completo. A arquitetura envolve os seguintes componentes:

<p style='align: center'>
    <img src='./assets/img/Arquitetura_da_Solucao_1.png' alt="Arquitetura da solução">
</p>

#### Frontend
O frontend é desenvolvido utilizando HTML, CSS e JavaScript (HTML/CSS/JS). É responsável por fornecer a interface do usuário, permitindo interações com o sistema. Os usuários podem visualizar informações e enviar solicitações para o backend através de formulários ou botões.
### Backend
O backend é implementado utilizando o Flask, um framework de desenvolvimento web em Python. Ele processa as solicitações recebidas do frontend, gerencia a lógica de negócios e se comunica com outros componentes da solução.
### Conexão com a Blockchain
A conexão com a blockchain é estabelecida utilizando a linguagem Solidity, que é usada para desenvolver contratos inteligentes na plataforma Ethereum. O backend interage com a blockchain para executar transações, recuperar dados ou atualizar o estado dos contratos inteligentes.
### Carteira Metamask
A carteira Metamask é uma extensão de navegador que permite aos usuários interagir com aplicativos descentralizados baseados em blockchain. Ela fornece uma maneira segura de gerenciar chaves privadas e assinar transações na blockchain. O backend utiliza a carteira Metamask para autenticação e assinatura de transações.
### Sistema Embarcado
O sistema embarcado é desenvolvido em C++ e é executado em um dispositivo ESP32. Ele se comunica com o sensor MQ-7, que fornece dados relacionados a gases. Os dados coletados pelo sensor são enviados para o backend para processamento e análise.

Essa arquitetura permite que os usuários interajam com o sistema através do frontend, enquanto o backend gerencia a lógica de negócios e a comunicação com a blockchain. O sistema embarcado coleta os dados do sensor e os envia para o backend, utilizando a carteira Metamask para autenticação e assinatura de transações na blockchain.
## Front-end 

<p style='align: center'>
    <img src='assets\img\Front-Login.png' alt="Login">
</p>
<p style='align: center'>
    <img src='assets\img\Front-Menu.png' alt="Menu">
</p>

O frontend possui quatro funcionalidades principais, que são as seguintes:

Compra de H2V (com futura integração com a blockchain)
Essa funcionalidade permite que os usuários comprem H2V (Hidrogênio Verde) através do sistema. Os usuários podem fornecer detalhes da transação, como a quantidade desejada de H2V e a carteira Ethereum para a transação. No futuro, será feita a integração com a blockchain para registrar e validar as transações.

<p style='align: center'>
    <img src='assets\img\Front-buy.png' alt="Compra de H2V">
</p>

Análise dos dados fornecidos pelo sistema embarcado
Essa funcionalidade permite aos usuários visualizar e analisar os dados fornecidos pelo sistema embarcado. Os dados coletados pelo sensor MQ-7 são processados e apresentados em gráficos ou tabelas, fornecendo informações relevantes sobre a qualidade do ar ou níveis de gases detectados.

<p style='align: center'>
    <img src='assets\img\Front-analysis.png' alt="Análise">
</p>

Configuração do perfil
Essa funcionalidade permite aos usuários configurar o seu perfil no sistema. Eles podem fornecer informações pessoais, como nome, endereço de e-mail, preferências de notificação, entre outros. Esses dados são armazenados no backend para personalizar a experiência do usuário e fornecer informações relevantes.

<p style='align: center'>
    <img src='assets\img\Front-profile.png' alt="Perfil">
</p>

Calculadora para economia de dinheiro mensal
Essa funcionalidade permite aos usuários calcular a economia de dinheiro mensal obtida ao utilizar o sistema. Os usuários podem inserir detalhes sobre seu consumo atual e receber uma estimativa de economia baseada em dados históricos e modelos de previsão. Essa calculadora ajuda a demonstrar os benefícios financeiros do sistema.

<p style='align: center'>
    <img src='assets\img\Front-calc.png' alt="Calculadora">
</p>

Essas funcionalidades fornecem uma experiência abrangente aos usuários, permitindo a compra de H2V, análise dos dados fornecidos pelo sistema embarcado, configuração do perfil pessoal e estimativa de economia de dinheiro mensal.

## Back-end 

API e Rotas
A aplicação possui várias rotas para fornecer diferentes funcionalidades aos usuários. A seguir, estão documentadas as rotas disponíveis e suas respectivas funções:

### Rota: /
Renderiza o template login.html para exibir a página inicial do sistema.
### Rota: /analises
Renderiza o template analysis.html para exibir a página de análises. Passa os dados a partir da conexão com a integração com um banco de dados (implementação futura) para o template.
### Rota: /menu
Renderiza o template menu.html para exibir o menu principal do sistema.
### Rota: /h2v
Renderiza o template buyh2v.html para exibir a página de compra de H2V. Passa os dados a partir da conexão com a integração com um banco de dados (implementação futura) para o template.
### Rota: /configuracoes

Renderiza o template perfil.html para exibir a página de configurações de perfil do usuário.
### Rota: /calculadora

Renderiza o template calculator.html para exibir a calculadora de economia de dinheiro mensal.
Essas rotas fornecem os endpoints necessários para cada funcionalidade do sistema, permitindo que o frontend renderize os templates correspondentes de acordo com as requisições do usuário.


## Blockchain

O contrato "comprarH2V" é um contrato inteligente escrito em Solidity que facilita a compra e venda de hidrogênio entre produtores e compradores. Ele implementa um conjunto de regras de negócio para garantir a segurança e a integridade das transações.

### Funcionalidades

1. Adicionar Produtores e Compradores
Os administradores do contrato (Verdelabs) podem adicionar produtores e compradores ao sistema. Os produtores são responsáveis por fornecer o hidrogênio, enquanto os compradores desejam adquiri-lo.

2. Definir Taxa Administrativa
A Verdelabs pode definir a taxa administrativa aplicada a cada transação. Essa taxa é deduzida do valor total da compra e é usada para cobrir os custos de operação do contrato.

3. Saldo dos Produtores e Compradores
Os produtores e compradores podem verificar seus saldos no contrato. Os produtores podem visualizar o valor total acumulado com a venda de hidrogênio, enquanto os compradores podem ver o valor total de fundos que depositaram para a compra.

4. Retirar Fundos Administrativos
A Verdelabs pode retirar o valor total acumulado das taxas administrativas para sua conta.

5. Solicitar Compra de Hidrogênio
Os compradores podem solicitar a compra de hidrogênio de um produtor específico. Eles especificam a quantidade desejada e o valor total que estão dispostos a pagar.

6. Aprovar ou Rejeitar Solicitações de Compra
Os produtores têm o poder de aprovar ou rejeitar as solicitações de compra de hidrogênio. Eles podem revisar as solicitações pendentes e tomar uma decisão com base em sua disponibilidade e critérios específicos.

7. Completar a Compra de Hidrogênio
Quando uma solicitação de compra é aprovada, o comprador pode finalizar a compra, enviando o valor total especificado. O valor é dividido entre o produtor e a taxa administrativa, com o produtor recebendo a maior parte.

8. Retirar Fundos
Tanto os produtores quanto os compradores podem retirar os fundos acumulados em suas contas. Os produtores podem sacar os valores referentes às vendas de hidrogênio, enquanto os compradores podem sacar os valores restantes de suas compras após a dedução da taxa administrativa.

### Requisitos
Solidity ^0.8
OpenZeppelin: SafeMath Library
### Utilização
1. Faça o deploy do contrato "comprarH2V" em uma blockchain compatível com Ethereum.

2. Defina a taxa administrativa e o endereço do proprietário (Verdelabs) durante o deploy do contrato.

3. Adicione produtores e compradores ao contrato usando as funções addMemberProducer e addMemberBuyer, respectivamente.

4. Os produtores podem visualizar seus saldos usando a função viewUserBalanceProducer.

5. Os compradores podem visualizar seus saldos usando a função viewUserBalanceBuyer.

6. Os produtores podem aprovar ou rejeitar as solicitações
## Embarcado

<p style='align: center'>
    <img src='assets\img\circuit.png' alt="Solução embarcada">
</p>

Para nosso projeto de incentivo a utilização do hidrogênio verde, utilizamos um sistema embarcado para receber os dados de energia que estão sendo economizados ao utilizar esse meio sustentável de combustível.

Para esse protótipo, fizemos uma simulação no simulador wokwi de um microcontrolador ESP32 que recebe dados e os envia para uma API, porém, como este não possuí o componente MQ-7 para realização da medição de gáses, optamos por usar outro sensor (LDR) para simular os dados de entrada do dispositivo. Ao receber esses dados, ele se conecta com a rede local, e os envia para o Backend onde vão ser processados e analisados.


## Team:
- [Emanuel de Oliveira Costa](https://www.linkedin.com/in/emanuel-45b637185/)
- [Filipi Enzo Siqueira Kikchi](https://www.linkedin.com/in/filipi-enzo-siqueira-kikuchi-1811a9213/)
- [Igor Garcia](https://www.linkedin.com/in/igor-garcia-126a1823b/?jobid=1234)
- [Lucas Britto](https://www.linkedin.com/in/lucas-britto-376665208/)
- [Vitória Rodrigues de Oliveira](https://www.linkedin.com/in/vit%C3%B3ria-rodrigues-de-oliveira-bb955921b/)
