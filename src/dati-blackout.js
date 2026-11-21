export const sistema = {
  nome: "Piattaforma Ordini",
  aggiornato: "11/11/2026 alle 10:20"
}

export const servers = [
  {
    nome: "web-01",
    ruolo: "Server web",
    sede: "Milano",
    ip: "10.0.1.11",
    online: false,
    cpu: null,
    latenza: null,
    servizi: ["nginx", "api-ordini"]
  },
  {
    nome: "db-01",
    ruolo: "Database",
    sede: "Milano",
    ip: "10.0.2.21",
    online: false,
    cpu: null,
    latenza: null,
    servizi: ["postgresql"]
  }
]

export const avvisi = []