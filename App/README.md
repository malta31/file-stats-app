File Stats Application

Questo progetto è un'applicazione Node.js basata su NestJS che fornisce funzionalità per analizzare le statistiche di un file, sia da un percorso locale che da un URL remoto.
L'applicazione calcola il numero totale di parole, lettere, spazi nel file e individua le parole che si ripetono più di 10 volte.

# Requisiti

Node.js (versione 12 o superiore)
Docker (versione 18 o superiore)
npm (o yarn)

# Struttura del Progetto

- src/: Contiene il codice sorgente dell'applicazione NestJS.
  - file-analyzer/: Servizio e logica per analizzare il file.
  - file-stats/: Controller per gestire le richieste HTTP e utilizzare il servizio di analisi file.

# Avvio dell'applicazione

È possibile eseguire l'applicazione in un container Docker. Assicurati di avere Docker installato sul tuo sistema e esegui i seguenti comandi:

- docker-compose up --build

L'applicazione sarà quindi accessibile all'indirizzo http://localhost:3000.

# Esecuzione

Per ottenere le statistiche di un file, fai una richiesta GET all'endpoint /file-stats?url={path} dove {path} è il percorso del file (locale o URL remoto):

# Esempi di richiesta:

- curl http://localhost:3000/file-stats?url=testfile.txt
  Esempio di risposta:
  {
  "totalWords": 122,
  "totalLetters": 769,
  "totalSpaces": 111,
  "repeatedWords": [
  {
  "profumando": 11
  },
  {
  "l'aria": 11
  },
  {
  "estiva.": 11
  }
  ]
  }

- curl http://localhost:3000/file-stats?url=https://storage.googleapis.com/maltagaetano/Informativa%20sulla%20Privacy%20-%20maltagaetano.docx
  Esempio di risposta:
  {
  "totalWords": 355,
  "totalLetters": 16143,
  "totalSpaces": 55,
  "repeatedWords": []
  }

# Test

È incluso un set di test Jest per verificare il funzionamento del servizio di analisi file. Per eseguire i test, esegui:

- npm test
