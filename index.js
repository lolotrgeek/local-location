
const WebSocket = require('ws')

const ip_address = "192.168.1.237"
const port = "6415"
const host = `ws://${ip_address}:${port}`
const request = {
    "event": "subscribeEvents",
    "data": {
        "type": "entityUpdates"
    }
}

const ws = new WebSocket(host);

ws.on('open', function open() {
    ws.send(JSON.stringify(request))
})

ws.on('message', function incoming(data) {
    console.log(data)
})