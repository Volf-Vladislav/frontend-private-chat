export const initialState = {
    page: 1,
    userGender: 'none',
    penPalgender: 'none'
}

export function rootReduсer(state = initialState, action) {
    if (action.type == 'NEXTPAGE') {
        return { ...state, page: state.page + 1 }
    }
    else if (action.type == 'PREVIOUSPAGE') {
        return { ...state, page: state.page - 1 }
    }
    else if (action.type == 'SELECTPAGE') {
        return { ...state, page: action.payload }
    }
    else if (action.type == 'CHANGEUSERGENDER') {
        return { ...state, userGender: action.payload }
    }
    else if (action.type == 'CHANGEPENPALGENDER') {
        return { ...state, penPalgender: action.payload }
    }
    else return state
}