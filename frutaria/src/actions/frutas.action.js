import { actionsTypes } from "../constants/fruta"

const actions = {
    adicionar: fruta => ({
        type: actionsTypes.ADICIONAR_FRUTA,
        payload: fruta
    }),
    remover: fruta => ({
        type: actionsTypes.REMOVE_FRUTA,
        payload: fruta
    })
}

export { actions }