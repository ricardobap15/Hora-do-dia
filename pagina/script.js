function carregar() {
    var msg = document.querySelector('#msg')
    var img = document.querySelector('#imagem')
    var data = new Date()
    var hora = data.getHours()
     msg2.innerHTML = `Agora são <strong>${hora}:00</strong> horas. `
    if (hora >= 4 && hora < 12) {
        document.body.style.background = '#bed1b5'
        img.src = 'fotomanha.jpg'
        msg.innerHTML = 'Bom Dia!'
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'fototarde.jpg'
        document.body.style.background = '#c78f76'
        msg.innerHTML = 'Boa Tarde!'
    } else {
        img.src = 'fotonoite.jpg'
        document.body.style.background = '#2b2b23'
        msg.innerHTML = 'Boa Noite!'
    }
}
