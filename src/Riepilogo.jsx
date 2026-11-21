export default function Riepilogo({ totale, conteggio, mediaCpu, serverLento }) {
  const inAllerta = conteggio.attenzione + conteggio.critico;

  return (
    <section className="riepilogo" aria-label="Riepilogo generale">
      <div className="riepilogo-voce">
        <div className="etichetta">Server operativi</div>
        <div className="valore">
          {conteggio.ok} / {totale}
        </div>
        <div className="dettaglio">Offline: {conteggio.offline}</div>
      </div>

      <div className="riepilogo-voce">
        <div className="etichetta">In allerta</div>
        <div className="valore">{inAllerta}</div>
        <div className="dettaglio">
          {conteggio.critico} critici, {conteggio.attenzione} attenzione
        </div>
      </div>

      <div className="riepilogo-voce">
        <div className="etichetta">CPU media</div>
        <div className="valore">{mediaCpu !== null ? `${mediaCpu}%` : '—'}</div>
        <div className="dettaglio">Server online</div>
      </div>

      <div className="riepilogo-voce">
        <div className="etichetta">Più lento</div>
        <div className="valore">{serverLento ? serverLento.nome : '—'}</div>
        <div className="dettaglio">
          {serverLento ? `${serverLento.latenza} ms` : 'Nessun dato'}
        </div>
      </div>
    </section>
  );
}