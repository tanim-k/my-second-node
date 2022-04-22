const express = require('express');
const app = express();
const port = process.env.PORT || 4000

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
    res.send(users)
})

app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id == id);
    res.send(user);
})

app.listen(port, () => {
    console.log('listening to port', port)
})