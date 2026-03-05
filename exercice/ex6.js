let nom = null 
let age = 0
let ville = ""
let score = undefined
let actif = false
let variables = [["nom", nom],["age", age],["ville", ville],["score", score],["actif", actif]];
// Partie A
for (let i = 0; i < variables.length; i++) {
    let nomVar = variables[i][0]
    let valeur = variables[i][1]
    let res = valeur ?? "valeur par défaut"
    console.log(nomVar + " ?? \"valeur par défaut\" -> " + String(res));
}
console.log("---");
// Partie B
for (let i = 0; i < variables.length; i++) {
    let nomVar = variables[i][0]
    let valeur = variables[i][1]
    let res = valeur || "valeur par défaut"
    console.log(nomVar + " || \"valeur par défaut\" -> " + String(res));
}
console.log("---");
// Partie C
for (let i = 0; i < variables.length; i++) {
    let nomVar = variables[i][0]
    let valeur = variables[i][1]
    let res1 = valeur ?? "valeur par défaut"
    let res2 = valeur || "valeur par défaut"
    if (res1 === res2) {
        console.log(nomVar + " : ?? et || -> même résultat")
    } else {
        console.log(nomVar + " : ?? et || -> résultat différent")
    }
}