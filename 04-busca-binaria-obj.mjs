let comps = 0

function buscaBinaria(vetor, fnComp){
    let ini = 0
    let fim = vetor.length - 1

    while(fim >= ini){
        comps++
        let meio = Math.floor((ini + fim)/2)

        switch(fnComp(vetor[meio])){
            case 0:
                comps+= 2
                return meio
            case 1:
                comps+= 2
                ini = meio + 1
                break
            default:
                comps+= 2
                fim = meio -1
        }
    }
    return -1
}

function comparar(valorMeio){
    if('LUCAS' === valorMeio.first_name) return 0 
    else if('LUCAS' > valorMeio.first_name) return 1
    else return -1
}

import { objNomes } from './data/vetor-obj-nomes.mjs'

console.log('Posição do objeto em first_name === LUCAS ', buscaBinaria(objNomes, comparar), "comparações ", comps)

// teste