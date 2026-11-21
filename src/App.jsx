import './App.css';
import { sistema, servers, avvisi } from './dati';
import { contaPerStato, cpuMedia, piuLento, trovaServer } from './calcoli';
import Intestazione from './Intestazione';
import Riepilogo from './Riepilogo';
import GrigliaServer from './GrigliaServer';
import ServerInEvidenza from './ServerInEvidenza';
import Avvisi from './Avvisi';

const CERCA_NOME = 'db-01';

export default function App() {
  const conteggio = contaPerStato(servers);
  const mediaCpu = cpuMedia(servers);
  const serverLento = piuLento(servers);
  const serverEvidenza = trovaServer(servers, CERCA_NOME);

  return (
    <div className="pagina">
      <Intestazione nome={sistema.nome} aggiornato={sistema.aggiornato} />

      <Riepilogo
        totale={servers.length}
        conteggio={conteggio}
        mediaCpu={mediaCpu}
        serverLento={serverLento}
      />

      <main className="contenuto">
        <GrigliaServer servers={servers} />

        <aside className="colonna-laterale">
          <ServerInEvidenza cercato={CERCA_NOME} server={serverEvidenza} />
          <Avvisi avvisi={avvisi} />
        </aside>
      </main>
    </div>
  );
}