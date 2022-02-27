export function message(data, event) {
    const msg = {
        data: data,
        event: event,
    }
    return JSON.stringify(msg)
}