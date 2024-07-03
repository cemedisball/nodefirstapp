const express = require("express");
const users = require('./db.json');
const app = express();
const port = process.env.PORT || 3200;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/api/users', (req, res) => {
    res.json(users);
});

app.get('/api/users/:id', (req, res) => {

    res.json(users.find(user => user.id === Number(req.params.id)));

});

app.get("/satang", (req, res) => { res.send("Hello! My name is Ball"); });

app.post('/api/users', (req, res) => {
    users.push(req.body);
    let json = req.body;
    console.log(json);
    res.send("Username: " + json.username + " inserted.");

});

app.delete('/users/:id', (req, res) => {

    const deletedIndex = users.findIndex(user => user.id === Number(req.params.id)) 
 
    res.send(`Delete user '${users[deletedIndex].username}' completed.`)
 
 })

app.listen(port, () => {
    console.log("Starting node.js at http://127.0.0.1:" + port);
    console.log("Starting node.js at http://127.0.0.1:" + port + "/api/users");
});
