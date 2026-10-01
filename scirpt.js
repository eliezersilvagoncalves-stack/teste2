// Armazenamento local dos itens adicionados
let carrinho = [];
let total = 0;

// Abre e fecha a aba do carrinho
function toggleCarrinho() {
    const carrinhoAba = document.getElementById('carrinho-aba');
    carrinhoAba.classList.toggle('ativo');
}

// Adiciona um item ao carrinho
function adicionarAoCarrinho(nome, preco) {
    carrinho.push({ nome, preco });
    total += preco;
    atualizarInterfaceCarrinho();
}

// Atualiza o contador de itens e a lista visual do carrinho
function atualizarInterfaceCarrinho() {
    // Atualiza contador do ícone
    document.getElementById('contador-carrinho').innerText = carrinho.length;
    
    // Atualiza a lista interna
    const containerItens = document.getElementById('itens-carrinho');
    containerItens.innerHTML = ''; // Limpa o estado anterior
    
    if (carrinho.length === 0) {
        containerItens.innerHTML = '<p style="text-align: center; color: #777;">Seu carrinho está vazio.</p>';
    } else {
        carrinho.forEach(item => {
            const div = document.createElement('div');
            div.className = 'item-linha';
            div.innerHTML = `
                <span>${item.nome}</span>
                <span>R$ ${item.preco.toFixed(2).replace('.', ',')}</span>
            `;
            containerItens.appendChild(div);
        });
    }
    
    // Atualiza o valor total
    document.getElementById('valor-total').innerText = `R$ ${total.toFixed(2).replace('.', ',')}`;
}
