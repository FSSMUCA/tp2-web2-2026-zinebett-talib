let nomProduit = "Clavier mécanique"
let prix = 89.99
let quantite = 3
let codePromo = null
let reductionPourcentage = 10
let estMembre = true
let soldeCompte = 250

//Sous-total
let sousTotal = prix * quantite
console.log("Sous-total :", sousTotal)

//Réduction
let reduction = 0
if ((codePromo ?? null) !== null && estMembre) {
    reduction = sousTotal * reductionPourcentage / 100
}
console.log("Réduction :", reduction)

//Total final
let totalFinal = sousTotal - reduction
console.log("Total final :", totalFinal)

// Vérification du solde
let statut
if (soldeCompte >= totalFinal) {
    statut = "Paiement accepté"
} else {
    statut = "Solde insuffisant"
}
console.log(statut)

//Nouveau solde
let nouveauSolde = soldeCompte
if (statut === "Paiement accepté") {
    nouveauSolde = soldeCompte - totalFinal
    console.log("Nouveau solde :", nouveauSolde)
}

//Récapitulatif
console.log("===== RÉCAPITULATIF =====")
console.log("Produit   :", nomProduit)
console.log("Quantité  :", quantite)
console.log("Prix unit.:", prix, "MAD")
console.log("Sous-total:", sousTotal, "MAD")
console.log("Réduction :", reduction, "MAD")
console.log("Total     :", totalFinal, "MAD")
console.log("Statut    :", statut)
console.log("Solde     :", nouveauSolde, "MAD")
console.log("=========================")