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
  valore === true ? console.log("È true, quindi stampo: Si") : console.log("È false, quindi stampo: No")
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
  readonly emailAziendale: "azienda@gmail.com",
  contratto: "indeterminato" | "determinato" | "freelance"
}
const dipendente1: Dipendente = {
  nome: "Mario",
  cognome: "Rossi",
  annoNascita: 2000,
  sesso: "m",
  anniDiServizio: [2023, 2024, 2025],
  emailAziendale: "azienda@gmail.com",
  contratto: "indeterminato"
}
// 🏆Snack 3: