function carregar() {
    const mensagem = document.querySelector('#msg')
    const imagem = document.querySelector('#imagem')
    const data = new Date()
    const hora = data.getHours()
    mensagem.innerHTML = `• Agora são <strong>${hora} Hrs.</strong>`

    if (hora >= 0 && hora < 12) {
        imagem.src = `Manha.png`
        document.body.style.background = '#e2cd9f'
    }else if (hora > 12 && hora <=18) {
        imagem.src = `Tarde.png`
        document.body.style.background = '#b9846f'
    }else {
        imagem.src = `Noite.png`
        document.body.style.background = `#515154`
    }

}
carregar()

