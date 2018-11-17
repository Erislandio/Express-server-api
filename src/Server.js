const port = 3000;
const express = require('express');
const app = express();

const db = require('../BD')

app.get('/produtos', (req, res, next) => {
    res.send(db.getProds());
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(db.getProd(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = db.save({
        nome: req.body.name,
        preco: req.body.preco
    })
    res.send(produto)
})

app.listen(port, () => {
    console.log(`Server porte: ${port}...`)
})