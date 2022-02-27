import React from 'react'
import * as Network from 'expo-network'

import { View, Text } from 'react-native'
import { styles } from './style/ban'
import { serverURL } from './../../api/serverURL'

function Ban() {
    const [reason, setReason] = React.useState('')
    const [date, setDate] = React.useState('')

    React.useEffect(() => {
        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            weekday: 'long',
            timezone: 'UTC',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        }

        async function getRequiest() {
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

                setReason(msg.reason)
                const date = new Date(msg.time * 1000)

                setDate(date.toLocaleString("ru", options))
            }
            catch (err) {
                console.log(err)
            }
        }

        getRequiest()
        return () => {

        }
    })

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Вы были</Text>
            <Text style={styles.title2}>заблокированы</Text>
            <View style={styles.separator}>
                <Text style={styles.text}>Причина ~ {reason}</Text>
            </View>
            <View style={styles.separator}>
                <Text style={styles.text}>Время снятия блокировки</Text>
                <Text style={styles.text}>{date}</Text>
            </View>
        </View>
    )
}



export default Ban
