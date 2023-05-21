// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8;

import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract comprarH2V {
    using SafeMath for uint256;
    //Verdelabs -> Dono do contrato
    address payable owner;
    //% Taxa de transação
    uint256 adminTax;
    //Valor total da taxa
    uint256 adminTaxAmount;

    mapping(address => string) memberProducer;
    mapping(address => uint256) memberProducerFunds;
    mapping(address => string) memberBuyer;
    mapping(address => uint256) memberBuyerFunds;

    uint256 public memberProducerCount;
    uint256 public memberBuyerCount;
    //modifier para ser usado quando só o owner do contrato (Coover) pode realizar a função
    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }

    /*Regra de negócio 1: A Verdelabs é definida como dona e administradora do contrato,
    devendo estabelecer o valor da taxa administrativa*/
    constructor(
        uint256 _adminTax,
        address _owner
    ) {
        owner = payable(_owner);
        adminTax = _adminTax;
    }

    /Regra de negócio 2: Adicionar produtores/
    function addMemberProducer(address member) public onlyOwner {
        memberProducer[member] = "produtor";
        memberProducerFunds[member] = 0;
        //memberProducerCount++;
    }

    /Regra de negócio 3: Adicionar compradores/
    function addMemberBuyer(address member) public onlyOwner {
        memberBuyer[member] = "comprador";
        memberBuyerFunds[member] = 0;
        //memberBuyerCount++;
    }

    //Regra de negócio 4: Retirar o valor total da taxa administrativa
    function adminWithdrawal() public onlyOwner {
        owner.transfer(adminTaxAmount);
    }

    //Regra de negócio 5: O produtor pode visuslizar seu saldo
    function viewUserBalanceProducer() public view msg.sender returns (uint256) {
        return memberProducerFunds[msg.sender];
    }

    //Regra de negócio 6: O comprador e o produtor podem retirar os fundos
    function viewUserBalanceBuyer() public view msg.sender returns (uint256) {
        return memberBuyerFunds[msg.sender];
    }
    
    //Regra de negócio 7: O comprador e o produtor podem retirar os fundos
    function withdrawFunds() public {
        require(
            memberProducer[msg.sender] == "produtor" || memberBuyer[msg.sender] == "comprador",
            "Somente produtores ou compradores membros podem sacar fundos"
        );
        uint256 amount = 0;
        if (memberProducer[msg.sender] == "produtor") {
            amount = memberProducerFunds[msg.sender];
            require(amount > 0, "Sem fundos para sacar");
            memberProducerFunds[msg.sender] = 0;
        } else {
            amount = memberBuyerFunds[msg.sender];
            require(amount > 0, "Sem fundos para sacar");
            memberBuyerFunds[msg.sender] = 0;
        }

        payable(msg.sender).transfer(amount);
    }
    //Regra de negócio 8: O comprador pode solicitar a compra de hidrogênio de um produtor específico
    function requestHydrogenPurchase(address producer, uint256 quantity, uint256 totalValue) public {
        //Verifica se o remetente é o comprador
        require(memberBuyer[msg.sender] == "comprador", "Somente compradores podem solicitar uma compra");
        //Verifica se o endereço do produtor fornecido é válido
        require(memberProducer[producer] == "produtor", "Produtor inválido");
        // Armazena a solicitação de compra do comprador para o produtor específico
        pendingBuyerRequests[msg.sender][producer] = totalValue;
        // Emitir um evento para notificar o produtor sobre a nova solicitação de compra
        emit HydrogenPurchaseRequest(msg.sender, producer, quantity, totalValue);
    }

    //Regra de negócio 9: Aprovar uma solicitação de compra de hidrogênio feita por um comprador específico
    function approveHydrogenPurchase(address buyer, uint256 requestId) public onlyOwner {
        require(memberProducer[msg.sender] == "produtor", "Apenas produtores podem aprovar compras");
        require(buyerRequestStatus[buyer][msg.sender] == false, "Compra já aprovada ou rejeitada");
        require(pendingBuyerRequests[buyer][msg.sender] == requestId, "Solicitação de compra inválida");

        uint256 quantity = pendingBuyerRequests[buyer][msg.sender];
        uint256 totalValue = calculateTotalValue(quantity);

        buyerRequestStatus[buyer][msg.sender] = true;

        emit HydrogenPurchaseApproved(buyer, msg.sender, quantity, totalValue, requestId);
    }

    //Regra de negócio 8: Rejeitar uma solicitação de compra de hidrogênio feita por um comprador específico
    function rejectHydrogenPurchase(address buyer, uint256 requestId) public onlyOwner {
        require(memberProducer[msg.sender] == "produtor", "Apenas produtores podem rejeitar compras");
        require(buyerRequestStatus[buyer][msg.sender] == false, "Compra já aprovada ou rejeitada");
        require(pendingBuyerRequests[buyer][msg.sender] == requestId, "Solicitação de compra inválida");

        uint256 quantity = pendingBuyerRequests[buyer][msg.sender];
        uint256 totalValue = calculateTotalValue(quantity);

        delete pendingBuyerRequests[buyer][msg.sender];
        buyerRequestStatus[buyer][msg.sender] = true;

        emit HydrogenPurchaseRejected(buyer, msg.sender, quantity, totalValue, requestId);
    }

    //Regra de negócio 9: Concluir a compra do Hidrogênio, através do pagamento
    function completeHydrogenPurchase(uint256 requestId) public payable {
        require(memberBuyer[msg.sender] == "comprador", "Apenas compradores podem finalizar uma compra");
        require(msg.value > 0, "Nenhum pagamento enviado");

        address buyer;
        address producer;

        for (uint256 i = 0; i < memberProducerCount; i++) {
            address currentProducer = memberProducer[i];
            if (buyerRequestStatus[msg.sender][currentProducer] == true && pendingBuyerRequests[msg.sender][currentProducer] == requestId) {
                buyer = msg.sender;
                producer = currentProducer;
                break;
            }
        }

        require(buyer != address(0) && producer != address(0), "Solicitação de compra inválida");

        uint256 quantity = pendingBuyerRequests[buyer][producer];
        uint256 totalValue = calculateTotalValue(quantity);

        require(msg.value == totalValue, "Valor de pagamento incorreto");

        uint256 producerAmount = totalValue.mul(100 - adminTax).div(100);
        uint256 adminAmount = totalValue.sub(producerAmount);

        memberProducerFunds[producer] = memberProducerFunds[producer].add(producerAmount);
        memberBuyerFunds[buyer] = memberBuyerFunds[buyer].add(adminAmount);

        delete pendingBuyerRequests[buyer][producer];
    }
    
    //Regra de negócio 10: Calcula o valor total da compra com base na quantidade de hidrogênio e na taxa administrativa
    function calculateTotalValue(uint256 quantity) internal view returns (uint256) {
        return quantity.mul(100).div(100 - adminTax);
    }
}