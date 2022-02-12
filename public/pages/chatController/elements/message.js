export function message(data, userID, event) {
    const msg = {
        data: data,
        id: userID,
        event: event,
    }
    return msg
}