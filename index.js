const express = require('express');
const cors = require('cors')
const app = express();
const port = process.env.PORT || 4000

app.use(cors());
// middleware 🔽
app.use(express.json())


app.get('/', (req, res) => {
    res.send('I am trying to send some texts')
});
const users = [
    {id:1, name: 'savana', email: 'sabana@gmial.com', phone: '01788888888'},
    {id:2, name: 'sabnur', email: 'sabnur@gmial.com', phone: '01788888888'},
    {id:3, name: 'motic', email: 'motic@gmial.com', phone: '01788888888'},
    {id:4, name: 'dilara', email: 'dilaraa@gmial.com', phone: '01788888888'},
    {id:5, name: 'moumita', email: 'moumita@gmial.com', phone: '01788888888'},
    {id:6, name: 'upola', email: 'upol@gmial.com', phone: '01788888888'},
    {id:7, name: 'juila', email: 'juilaa@gmial.com', phone: '01788888888'},
    {id:8, name: 'nagini', email: 'naginia@gmial.com', phone: '01788888888'},
    {id:9, name: 'ulfat', email: 'ulfat@gmial.com', phone: '01788888888'},
]

// making another api 
app.get('/users', (req, res) => {
    // filter by search query parameter
    if(req.query.name){
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(matched);
    }
    else{
        res.send(users)
    }
})

app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    res.send(user);
});

// post route creation 
app.post('/user', (req, res)=> {
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})

app.get('/fruits', (req, res) => {
    res.send(['mango','apple', 'oranges', 'water-melon'])
})

app.get('/fruits/mango/fazle', (req, res) => {
    res.send('arekta api building process')
})

app.listen(port, () => {
    console.log('listening to port', port)
})