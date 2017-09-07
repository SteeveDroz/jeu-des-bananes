$(() => {
    const header = $('<header>')
    header.load('fragment/header.html')
    $('body').prepend(header)

    const footer = $('<footer>')
    footer.load('fragment/footer.html')
    $('body').append(footer)
})
