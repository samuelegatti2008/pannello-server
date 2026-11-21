import BadgeStato from './BadgeStato';
import { SOGLIE, statoServer } from './calcoli';

function classeBarra(cpu) {
  if (cpu >= SOGLIE.cpuCritico) return 'barra-riempimento barra-riempimento--critico';
  if (cpu >= SOGLIE.cpuAttenzione) return 'barra-riempimento barra-riempimento--alto';
  return 'barra-riempimento';
}

export default function SchedaServer({ server }) {
  const stato = statoServer(server);

  return (
    <article className={`scheda scheda--${stato}`}>
      <div className="scheda-testa">
        <div>
          <h3 className="scheda-nome">{server.nome}</h3>
          <p className="scheda-ruolo">
            {server.ruolo} · {server.sede}
          </p>
        </div>
        <BadgeStato stato={stato} />
      </div>

      {server.online ? (
        <>
          <div>
            <div className="metrica-riga">
              <span>CPU</span>
              <strong>{server.cpu}%</strong>
            </div>
            <div className="barra">
              <div
                className={classeBarra(server.cpu)}
                style={{ width: `${server.cpu}%` }}
              />
            </div>
          </div>

          <div className="servizi">
            {server.servizi.length > 0 ? (
              server.servizi.map((srv) => (
                <span key={srv} className="servizio-tag">
                  {srv}
                </span>
              ))
            ) : (
              <span className="vuoto">Nessun servizio attivo</span>
            )}
          </div>

          <div className="scheda-piede">
            <span>IP: {server.ip}</span>
            <span>Latenza: {server.latenza} ms</span>
          </div>
        </>
      ) : (
        <>
          <p className="messaggio-offline">Server offline — metriche non disponibili.</p>
          <div className="scheda-piede">
            <span>IP: {server.ip}</span>
            <span>CPU: —</span>
          </div>
        </>
      )}

      {server.manutenzione && (
        <div className="manutenzione">
          Manutenzione ({server.manutenzione.data}): {server.manutenzione.motivo}
        </div>
      )}
    </article>
  );
}