const express = require('express');
const app = express();
const port = process.env.PORT || 4000

app.get('/', (req, res) => {
    res.send('oma eta ami kita korilailam vala lager ba. ki ekta obstha.. kicchu bujhtesi na.. but node moja lagtese. change koreo dekhi ki hoy     valani ba:. kita re ba.')
})

app.listen(port, () => {
    console.log('listening to port', port)
})