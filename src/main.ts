// 🏆Snack 1:
let valore: unknown;

if (valore === null) {
  console.log("Il dato è vuoto");
} else if (Array.isArray(valore)) {
  console.log("È un array di lunghezza:", valore.length);
} else if (valore instanceof Promise) {
  valore.then((resolvedValue) => {
    console.log("La Promise è stata risolta con valore:", resolvedValue);
  }).catch((error) => {
    console.log("La Promise è stata rifiutata con errore:", error);
  });
} else if (typeof valore === "string") {
  console.log("Stampo la stringa in maiuscolo:", valore.toUpperCase())
} else if (typeof valore === "number") {
  console.log("Stampo il numero moltiplicato per 2:", valore * 2)
} else if (typeof valore === "boolean") {
  console.log(valore ? "È true, quindi stampo: Si" : "È false, quindi stampo: No")
} else {
  console.log("Tipo non supportato")
}

// 🏆Snack 2:
type Dipendente = {
  nome: string,
  cognome: string,
  annoNascita: number,
  sesso: "m" | "f",
  anniDiServizio: number[]
  readonly emailAziendale: string,
  contratto: "indeterminato" | "determinato" | "freelance"
}

// 🏆Snack 3:
type Developer = Dipendente & {
  livelloEsperienza: "Junior" | "Mid" | "Senior",
  linguaggi?: string[],
  certificazioni: string[]
}
type ProjectManager = Dipendente & {
  teamSize: null | number,
  budgetGestito?: number,
  stakeholderPrincipali: string[]
}

type Team = {
  nome: string,
  progettoAttuale: null | string,
  budget: number,
  membri: [ProjectManager, Developer, ...Developer[]]
}