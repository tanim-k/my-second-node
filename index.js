const express = require('express');
const app = express();
const port = process.env.PORT || 4000

app.get('/', (req, res) => {
    res.send('oma eta ami kita korilailam vala lager ba')
})

app.listen(port, () => {
    console.log('listening to port', port)
})