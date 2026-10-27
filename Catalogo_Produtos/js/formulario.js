document.addEventListener('DOMContentLoaded', () => {
    const carrinhoSalvo = localStorage.getItem('carrinhoCompras');
    const totalSalvo = localStorage.getItem('valorTotalCompra');

    if (!carrinhoSalvo || !totalSalvo || carrinhoSalvo === '[]') {
        alert("O seu carrinho está vazio!");
        window.location.href = 'index.html'; 
        return;
    }

    const carrinho = JSON.parse(carrinhoSalvo);
    const listaProdutos = document.getElementById('lista-produtos-checkout');
    const elementoTotal = document.getElementById('total-checkout');
    const inputPedido = document.getElementById('resumo-pedido');
    
    let textoPedido = "Itens do Pedido:\n\n";

    carrinho.forEach(produto => {
        // Renderiza no ecrã
        const divItem = document.createElement('div');
        divItem.className = 'item-resumo';
        divItem.innerHTML = `<p><b>${produto.quantidade}x</b> ${produto.nome} - R$ ${produto.preco}</p>`;
        listaProdutos.appendChild(divItem);

        // Adiciona a informação ao texto oculto do e-mail
        textoPedido += `- ${produto.quantidade}x ${produto.nome} (R$ ${produto.preco})\n`;
    });

    // Atualiza o total no ecrã
    elementoTotal.innerText = `Total: R$ ${totalSalvo}`;
    
    // Adiciona o total ao texto do e-mail e injeta no formulário
    textoPedido += `\nVALOR TOTAL: R$ ${totalSalvo}`;
    inputPedido.value = textoPedido;

    // Limpa o carrinho do navegador no momento em que o formulário é submetido
    document.getElementById('form-compra').addEventListener('submit', function() {
        localStorage.removeItem('carrinhoCompras');
        localStorage.removeItem('valorTotalCompra');
        // Não é utilizado event.preventDefault() aqui para permitir que a ação do FormSubmit ocorra normalmente
    });
});