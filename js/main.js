$(function() {
    const header = $('<header>')
    header.load('fragment/header.html', selectCurrentPage)
    $('body').prepend(header)
    const footer = $('<footer>')
    footer.load('fragment/footer.html')
    $('body').append(footer)
    $('body').append($('<a>', {
        id: 'ribbon',
        href: 'https://github.com/SteeveDroz/jeu-des-bananes',
        target: '_blank',
        text: 'Fork me on GitHub',
        css: {
            position: 'absolute',
            top: 0,
            right: 0,
            transform: 'translateY(107px) rotate(45deg)',
            transformOrigin: '100% 100%',
            background: '#ffe135',
            color: 'darkslategray',
            padding: '10px 50px',
            width: 250,
            textAlign: 'center',
            textDecoration: 'none'
        }
    }))
})
const selectCurrentPage = function() {
    let selected = false
    $('menu a').each(function() {
        if ($(this).attr('href').endsWith(location.href.split('/').pop())) {
            $(this).addClass('selected')
            selected = true
        }
    })
    if (!selected) {
        $('menu a').eq(0).addClass('selected')
    }
}
