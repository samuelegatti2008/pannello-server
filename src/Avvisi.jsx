export default function Avvisi({ avvisi }) {
  return (
    <section className="riquadro">
      <h2>Avvisi ({avvisi.length})</h2>
      {avvisi.length > 0 ? (
        <ul className="avvisi-lista">
          {avvisi.map((testo, indice) => (
            <li key={indice} className="avviso">
              {testo}
            </li>
          ))}
        </ul>
      ) : (
        <p className="vuoto">Nessun avviso.</p>
      )}
    </section>
  );
}