import { serverURL } from './serverURL'

export async function postReport() {
    const url = serverURL + '/api/report/postreport'

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify()
        })

        const msg = await response.json()
        return(msg.message)
    }
    catch (err) {
        console.log(err)
    }
}