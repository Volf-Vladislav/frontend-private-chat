export const initialState = {
    page: 1,
    userGender: 'any',
    penPalgender: 'any',
    penPalStatus: 'online',
    messages: [{}],
    userID: 'ip',
    penPalID: '',
    isBan: 'false',
}

export function rootReduсer(state = initialState, action) {
    if (action.type == 'SELECTPAGE') {
        return { ...state, page: action.payload }
    }
    else if (action.type == 'CHANGEUSERGENDER') {
        return { ...state, userGender: action.payload }
    }
    else if (action.type == 'CHANGEPENPALGENDER') {
        return { ...state, penPalgender: action.payload }
    }
    else if (action.type == 'CHANGEMESSAGES') {
        return { ...state, messages: [...state.messages, action.payload] }
    }
    else if (action.type == 'REMOVEMESSAGES') {
        return { ...state, messages: [{}] }
    }
    else if (action.type == 'CHANGEPENPALSTATUS') {
        return { ...state, penPalStatus: action.payload }
    }
    else if (action.type == 'SETID') {
        return { ...state, penPalID: action.payload }
    }
    else if (action.type == 'SETUSERID') {
        return { ...state, userID: action.payload }
    }
    else if (action.type == 'SETBAN') {
        return { ...state, isBan: action.payload }
    }

    else return state
}