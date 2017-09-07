$(function() {
    const annees = [1, 2, 3, 4, 5, 6]
    $('.comptes').each(function(index) {
        const comptes = $(this)
        const modele = $(this).find('tbody')
        annees.forEach(function(annee) {
            const compteAnnee = modele.clone(true)
            compteAnnee.html(compteAnnee.html().replace('%annee', annee))
            comptes.append(compteAnnee)
        })
        modele.remove()
    })
})
