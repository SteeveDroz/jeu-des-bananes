$(function() {
    const header = $('<header>')
    header.load('fragment/header.html', selectCurrentPage)
    $('body').prepend(header)
    const footer = $('<footer>')
    footer.load('fragment/footer.html')
    $('body').append(footer)
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
