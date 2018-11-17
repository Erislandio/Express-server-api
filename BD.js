const sequence = {
    _id: 1,
    get id() {
        return this._id++
    }
}

const produtos = {

}

function save(produto) {
    if(!produto.id) produto.id = sequence.id
    produtos[produto.id] = produto
    return produto
}

function getProd(id){
    return produtos[id] || {}
}

function getProds() {
    return Object.values(produtos)
}

module.exports = {
    save, 
    getProd,
    getProds
}