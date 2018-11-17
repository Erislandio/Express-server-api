const port = 3000;
const express = require('express');
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))

const db = require('../BD')

app.get('/produtos', (req, res, next) => {
    res.send(db.getProds());
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(db.getProd(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = db.save({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})

app.delete('/produtos/:id', (req, res, next) => {
    const produto = db.deleteProd(req.param.id)
    res.send(produto)
})

app.listen(port, () => {
    console.log(`Server porte: ${port}...`)
})