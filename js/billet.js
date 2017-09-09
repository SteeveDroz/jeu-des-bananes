const nombreBillets = 10
$(function() {
    $('#generer-billets').click(genererBillets)
})
const genererBillets = function() {
    if ($('#valeur-billets').val() > 0) {
        const valeur = $('#valeur-billets').val().replace(/\B(?=(\d{3})+(?!\d))/g, "'")
        const modele = $('#modele-billet')
        const parent = modele.parent()
        $('.billet').not('#modele-billet').remove()
        for (let i = 0; i < nombreBillets; i++) {
            const billet = $('#modele-billet').clone(true)
            billet.css('display', 'inline-block')
            billet.removeAttr('id')
            billet.html(billet.html().replace('%valeur%', valeur))
            if (valeur == 1) {
                billet.html(billet.html().replace('Sous', 'Sou'))
            }
            $('#modele-billet').after(billet)
        }
        $('footer').addClass('no-print')
    }
}
