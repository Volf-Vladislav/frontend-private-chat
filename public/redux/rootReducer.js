export const initialState = {
    page: 1,
    userGender: 'any',
    penPalgender: 'any',
    status: false,
    penPalStatus: 'disconnected',
    messages: [{}],
    message: '',
    userID: Math.random()
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
    else if (action.type == 'CHANGESTATUS') {
        return { ...state, status: action.payload }
    }
    else if (action.type == 'CHANGEPENPALSTATUS') {
        return { ...state, penPalStatus: action.payload }
    }
    else if (action.type == 'CHANGEMESSAGES') {
        return { ...state, messages: [...state.messages, action.payload] }
    }
    else if (action.type == 'REMOVEMESSAGES') {
        return { ...state, messages: [{}] }
    }
    else if (action.type == 'CHANGEMESSAGE') {
        return { ...state, message: action.payload }
    }

    else return state
}