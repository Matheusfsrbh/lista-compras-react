import { useState } from "react";

function AdicionarProduto({ aoAdicionar }) {
  const [texto, setTexto] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!texto.trim()) {
      alert("Campo vazio! Digite algo 😅");
      return;
    }

    aoAdicionar(texto);
    setTexto("");
  };

  return (
    <form onSubmit={handleSubmit} className="add-form">
      <input
        type="text"
        placeholder="Ex: Arroz, Sabonete..."
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}

export default AdicionarProduto;
