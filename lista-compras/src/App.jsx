import { useState, useEffect } from "react";
import AdicionarProduto from "./components/AdicionarProduto";
import ListaDeProdutos from "./components/ListaDeProdutos";
import "./index.css";

function App() {
  const [produtos, setProdutos] = useState(() => {
    // Tenta recuperar do localStorage
    const salvo = localStorage.getItem("listaDeCompras");
    return salvo ? JSON.parse(salvo) : [];
  });

  // Atualiza o armazenamento sempre que algo mudar
  useEffect(() => {
    localStorage.setItem("listaDeCompras", JSON.stringify(produtos));
  }, [produtos]);

  const adicionarProduto = (nome) => {
    if (!nome.trim()) {
      alert("Digite um produto antes de adicionar!");
      return;
    }

    const novo = {
      id: Date.now(),
      nome,
      comprado: false,
    };

    setProdutos((antigos) => [...antigos, novo]);
  };

  const alternarStatus = (id) => {
    setProdutos((antigos) =>
      antigos.map((p) =>
        p.id === id ? { ...p, comprado: !p.comprado } : p
      )
    );
  };

  const removerProduto = (id) => {
    const confirmar = confirm("Tem certeza que deseja remover este item?");
    if (confirmar) {
      setProdutos((antigos) => antigos.filter((p) => p.id !== id));
    }
  };

  return (
    <div className="app">
      <h1>🛒 Lista de Compras do Dia</h1>
      <AdicionarProduto aoAdicionar={adicionarProduto} />

      {produtos.length ? (
        <ListaDeProdutos
          produtos={produtos}
          aoAlternar={alternarStatus}
          aoRemover={removerProduto}
        />
      ) : (
        <p className="empty">Nenhum item ainda 😅</p>
      )}
    </div>
  );
}

export default App;
