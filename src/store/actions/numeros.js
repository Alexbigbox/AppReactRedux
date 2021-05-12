import {
    NUM_MAX_ALTERADO,
    NUM_MIM_ALTERADO
} from './actionTypes'

// Action Creator
export function alterarNumeroMinimo(novoNumero) {
    return {
        type: NUM_MIM_ALTERADO,
        payload: novoNumero
    }
}

// Action Creator
export function alterarNumeroMaximo(novoNumero) {
    return {
        type: NUM_MAX_ALTERADO,
        payload: novoNumero
    }
}