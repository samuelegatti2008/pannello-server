import SchedaServer from './SchedaServer';

export default function GrigliaServer({ servers }) {
  return (
    <section>
      <h2 className="sezione-titolo">Server ({servers.length})</h2>
      <div className="griglia-server">
        {servers.map((server) => (
          <SchedaServer key={server.nome} server={server} />
        ))}
      </div>
    </section>
  );
}