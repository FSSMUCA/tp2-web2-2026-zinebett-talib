let nom = "   Fatima   "
let age = "23"
let email = "fatima@example"
let scoreJeu = "150pts"
let estAdmin = "false"
let derniereConnexion = null
let nombreConnexions = "0"
console.log("===== RAPPORT UTILISATEUR =====")
// nom
let nomCorrige = nom.trim()
if (nomCorrige === "") {
    nomCorrige = "Inconnu"
}
console.log('nom              : "' + nomCorrige + '" (corrigé : espaces supprimés)')

// age
let ageNombre = parseInt(age)
if (Number.isNaN(ageNombre) || ageNombre <= 0) {
    console.log("age              : valeur invalide")
} else {
    console.log("age              : " + ageNombre + " (valide)")
}

// email
let posAt = email.indexOf("@")
let posPoint = email.indexOf(".", posAt)

if (posAt !== -1 && posPoint !== -1) {
    console.log('email            : "' + email + '" (valide)')
} else {
    console.log('email            : "' + email + '" (invalide : pas de point après @)')
}

// scoreJeu
let score = parseInt(scoreJeu)
if (Number.isNaN(score)) {
    score = 0
}
console.log('scoreJeu         : ' + score + ' (extrait depuis "' + scoreJeu + '")')

// estAdmin
let adminBool
if (estAdmin === "true") {
    adminBool = true
} else {
    adminBool = false
}

console.log('estAdmin         : ' + adminBool + ' (attention : Boolean("false") = true, conversion manuelle requise)')

// derniereConnexion
let connexion = derniereConnexion ?? "Jamais connecté"
console.log('derniereConnexion: "' + connexion + '" (valeur par défaut via ??)')

let nb = Number(nombreConnexions)
if (nb === 0) {
    console.log('nombreConnexions : "Aucune connexion" (0 après conversion)')
} else {
    console.log("nombreConnexions : " + nb)
}
