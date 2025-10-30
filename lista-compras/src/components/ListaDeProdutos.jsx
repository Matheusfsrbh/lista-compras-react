import Produto from "./Produto";

function ListaDeProdutos({ produtos, aoAlternar, aoRemover }) {
  // Ordena por nome antes de exibir (toque pessoal)
  const ordenados = [...produtos].sort((a, b) =>
    a.nome.localeCompare(b.nome)
  );

  return (
    <ul className="lista">
      {ordenados.map((produto) => (
        <Produto
          key={produto.id}
          produto={produto}
          aoAlternar={aoAlternar}
          aoRemover={aoRemover}
        />
      ))}
    </ul>
  );
}

export default ListaDeProdutos;
