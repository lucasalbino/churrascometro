// carne - 400g por pessoa | + de 6 horas - 650g
// cerveja - 1200ml por pessoa | + de 6 horas - 2000 ml
// refrigerante - 1000ml por pessoa | + 6 horas 1500ml

// crianças valem por 0,5 

let inputAdultos = document.getElementById("adultos")
let inputCriancas = document.getElementById("criancas")
let inputDuracao = document.getElementById("duracao")

let resultado = document.getElementById("resultado")

function calcular() {

    let adultos = inputAdultos.value
    let criancas = inputCriancas.value
    let duracao = inputDuracao.value

    let totalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas)
    let totalCerveja = carnePP(duracao) * adultos
    let totalRefrigerante = refrigerantePP(duracao) * adultos + (refrigerantePP(duracao) / 2 * criancas)

    resultado.innerHTML = `<p>${totalCarne / 1000} Kg de Carne</p>`
    resultado.innerHTML += `<p>${Math.ceil((totalCerveja / 355))} Latas de Cerveja</p>`
    resultado.innerHTML += `<p>${totalRefrigerante / 1000} L de Refrigerante</p>`

    console.log(totalCarne)
    console.log(totalCerveja)
    console.log(totalRefrigerante)

}

function carnePP(duracao) {
    if (duracao >= 6) {
        return 650
    } else {
        return 400;
    }
}

function cervejaPP(duracao) {
    if (duracao >= 6) {
        return 2000
    } else {
        return 1200;
    }
}

function refrigerantePP(duracao) {
    if (duracao >= 6) {
        return 1500
    } else {
        return 1000;
    }
}

