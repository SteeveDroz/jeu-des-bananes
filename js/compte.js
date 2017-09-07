$(function() {
    const annees = [1, 2, 3, 4, 5, 6]
    $('.comptes').each(function(index) {
        const comptes = $(this)
        annees.forEach(function(annee) {
            const compteAnnee = comptes.clone(true)
            compteAnnee.html(compteAnnee.html().replace('%annee', annee))
            comptes.before(compteAnnee)
        })
        comptes.remove()
    })
})
