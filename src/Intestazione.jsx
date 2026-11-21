export default function Intestazione({ nome, aggiornato }) {
  return (
    <header className="intestazione">
      <div>
        <h1>{nome}</h1>
        <p className="sottotitolo">Stato infrastruttura e server</p>
      </div>
      <div className="meta">
        Ultimo aggiornamento: <strong>{aggiornato}</strong>
      </div>
    </header>
  );
}