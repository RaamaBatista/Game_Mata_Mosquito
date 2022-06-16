var altura = 0
var largura = 0
var vidas = 1
var tempo=50

var nivelTemp=1500



//Função que determina a largura e altura a partir do tamanho da tela do browser
function tamanho() {
    altura = window.innerHeight
    largura = window.innerWidth

    console.log(largura, altura)
}

tamanho()

var cronometro=setInterval(function(){
    tempo-=1

if(tempo<0){
    window.location.href="Vitoria.html"
} else{
    document.getElementById('tempoRestante').innerHTML=tempo

   }    // a cada 1000 milisegundos, ou seja, 1 segundo diminui 1 segundo do tempo total
},1000)


function gerador() {

    if (document.getElementById('bichinho')) {
        document.getElementById('bichinho').remove()


        if (vidas > 3) {
    window.location.href= "fim_de_jogo.html"

} else {
            document.getElementById('cheio' + vidas).src = "coracao_vazio.png"

            vidas++
        }
    }

    //Para colocar a imagem mosquito  de uma forma aleatória iremos utilizar math.random
    var posicao1 = Math.floor(Math.random() * largura) - 90//math.floor: serve para arredondar,ou seja, eliminar casas decimais
    var posicao2 = Math.floor(Math.random() * altura) - 90

    if (posicao1 < 0) {
        posicao1 = 0
    }
    else {
        posicao1 = posicao1
    }
    console.log(posicao1, posicao2)

    //Outra forma de fazer if e else:
    //posicao1=posicao1 < 0 ? 0 : posicao1
    //posicao2=posicao2 < 0 ? 0 : posicao2



    //adicionando uma imagem pelo js

    /*var bichinho= document.createElement('img')
    bichinho.src='mosca.png'
    document.body.appendChild(bichinho)
    apendChild- adicionar elementos
    
    bichinho.className="mosquito"
    ClassName= acessando a classe da imagem que eu adicionei no html
    */

    var bichinho = document.createElement('img')
    bichinho.src = 'mosca.png'
    bichinho.className = tamanhoBicho() + ' ' + olhoLado()//criamos classes no html e no css de acordo com os returns da função
    bichinho.style.left = posicao1 + 'px'
    bichinho.style.top = posicao2 + 'px'
    bichinho.style.position = 'absolute'
    bichinho.id = 'bichinho'
    bichinho.onclick = function () {
        this.remove(bichinho)
    }

    //função que define 3 tamanhos dos mosquitos
    function tamanhoBicho() {
        var tamanho = Math.floor(Math.random() * 3)

        if (tamanho == 0) {
            return 'mosquito1'
        } else if (tamanho == 1) {
            return 'mosquito2'
        } else if (tamanho == 3) {
            return 'mosquito3'
        } else {
            return 'mosquito4'
        }

    }
    console.log(tamanhoBicho())
    document.body.appendChild(bichinho)
    console.log(olhoLado())
}

//Função da direção do olho

function olhoLado() {
    var lado = Math.floor(Math.random() * 2)

    if (lado == 0) {
        return 'ladoA'
    } else if (lado == 1) {
        return 'ladoB'
    }
}



