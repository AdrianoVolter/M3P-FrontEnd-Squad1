export const adicionarProdutoAoCarrinho = (produto, quantidade, quantidades) => {
    const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    const quantidadeDoProduto = quantidades[produto.id] || 1;
  
    if (quantidadeDoProduto <= produto.total_stock) {
      const produtoNoCarrinhoIndex = carrinho.findIndex(
        (item) => item.id === produto.id
      );
  
      if (produtoNoCarrinhoIndex !== -1) {
        carrinho[produtoNoCarrinhoIndex].amount_buy += quantidadeDoProduto;
      } else {
        carrinho.push({
          ...produto,
          amount_buy: quantidadeDoProduto,
        });
      }
      localStorage.setItem("carrinho", JSON.stringify(carrinho));
      return { success: true, message: "Produto adicionado ao carrinho" };
    } else {
      return { success: false, message: "Quantidade indisponível" };
    }
  };
  
  export const incrementarQuantidade = (produtoId, quantidades, setQuantidades) => {
    const quantidadeAtual = quantidades[produtoId] || 0;
    const novaQuantidade = quantidadeAtual + 1;
    setQuantidades({ ...quantidades, [produtoId]: novaQuantidade });
  };
  
  export const decrementarQuantidade = (produtoId, quantidades, setQuantidades) => {
    const quantidadeAtual = quantidades[produtoId] || 0;
    if (quantidadeAtual > 0) {
      const novaQuantidade = quantidadeAtual - 1;
      setQuantidades({ ...quantidades, [produtoId]: novaQuantidade });
    }
  };
  