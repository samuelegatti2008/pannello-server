import BadgeStato from './BadgeStato';
import { statoServer } from './calcoli';

export default function ServerInEvidenza({ cercato, server }) {
  return (
    <section className="riquadro">
      <h2>Server in evidenza</h2>
      {server ? (
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span className="evidenza-nome">{server.nome}</span>
            <BadgeStato stato={statoServer(server)} />
          </div>
          <p className="evidenza-dato">
            {server.ruolo} — {server.sede} ({server.ip})
          </p>
          <p className="evidenza-dato">
            {server.online
              ? `CPU ${server.cpu}% · Latenza ${server.latenza} ms`
              : 'Offline'}
          </p>
        </div>
      ) : (
        <p className="vuoto">Nessun server trovato per «{cercato}».</p>
      )}
    </section>
  );
}