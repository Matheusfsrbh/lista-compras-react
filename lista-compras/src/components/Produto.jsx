function Produto({ produto, aoAlternar, aoRemover }) {
  return (
    <li className={`item ${produto.comprado ? "feito" : ""}`}>
      <span
        onClick={() => aoAlternar(produto.id)}
        title="Clique para marcar como comprado"
      >
        {produto.nome}
      </span>

      <button
        onClick={() => aoRemover(produto.id)}
        className="delete-btn"
        title="Remover item"
      >
        🗑️
      </button>
    </li>
  );
}

export default Produto;
