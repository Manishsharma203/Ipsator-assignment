// action types
export const ADD_A_LIST='ADD_A_LIST'
export const ADD_CARD='ADD_CARD'
export const EDIT_CARD='EDIT_CARD'
export const DELETE_CARD='DELETE_CARD'
export const DELETE_LIST='DELETE_LIST'

// actions

export const addList=payload=>({
    type:ADD_A_LIST,
    payload
})

export const addCard=payload=>({
    type:ADD_CARD,
    payload
})

export const editCard=payload=>({
    type:EDIT_CARD,
    payload
})

export const deleteCard=payload=>({
    type:DELETE_CARD,
    payload
})

export const deleteList=payload=>({
    type:DELETE_LIST,
    payload
})