import * as Network from 'expo-network'
import { serverURL } from './serverURL'

export async function checkBan() {
    const url = serverURL + '/api/report/isbanned'

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ userIP: await Network.getIpAddressAsync() })
        })

        const msg = await response.json()

        return (msg.message)
    }
    catch (err) {
        console.log(err)
    }
}