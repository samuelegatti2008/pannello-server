export const SOGLIE = {
  cpuAttenzione: 75,
  cpuCritico: 90,
};

export function statoServer(server) {
  if (!server.online || server.cpu === null || server.cpu === undefined) {
    return 'offline';
  }
  if (server.cpu >= SOGLIE.cpuCritico) {
    return 'critico';
  }
  if (server.cpu >= SOGLIE.cpuAttenzione) {
    return 'attenzione';
  }
  return 'ok';
}

export function contaPerStato(listaServers) {
  const conteggio = {
    ok: 0,
    attenzione: 0,
    critico: 0,
    offline: 0,
  };

  for (const s of listaServers) {
    const stato = statoServer(s);
    conteggio[stato] += 1;
  }

  return conteggio;
}

export function cpuMedia(listaServers) {
  const attivi = listaServers.filter(
    (s) => s.online && typeof s.cpu === 'number'
  );
  if (attivi.length === 0) {
    return null;
  }

  const somma = attivi.reduce((acc, s) => acc + s.cpu, 0);
  return Math.round(somma / attivi.length);
}

export function piuLento(listaServers) {
  const attivi = listaServers.filter(
    (s) => s.online && typeof s.latenza === 'number'
  );
  if (attivi.length === 0) {
    return null;
  }

  return attivi.reduce((lento, corrente) =>
    corrente.latenza > lento.latenza ? corrente : lento
  );
}

export function trovaServer(listaServers, nomeCercato) {
  if (!nomeCercato || nomeCercato.trim() === '') {
    return null;
  }

  const target = nomeCercato.trim().toLowerCase();
  return listaServers.find((s) => s.nome.toLowerCase() === target) ?? null;
}