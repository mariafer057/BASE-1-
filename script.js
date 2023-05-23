//empresaProduto
class Produto{
    constructor (Nome, DataCadastro, Descricao, Preco){
    this.Nome = Nome;
    this.DataCadastro = DataCadastro;
    this.Descricao = Descricao;
    this.Preco = Preco;
}
Mostra_produtos(){
    return this.Nome + this.DataCadastro + this.Descricao + this.Preco
    }
}
class ProdutoDestaque extends Produto{
constructor (Nome, DataCadastro, Descricao, Preco, img){
super(Nome, DataCadastro, Descricao, Preco)
this.img = img ;
}

mostrar_produtos_destaque(){ 
    return `<div class = "produto-card">
    <center>
            <img  class = "img" src= "${this.img}"></img>
            <div class = "descricao">${this.Nome}</div>
            <div class = "descricao">${this.DataCadastro}</div>
            <div class = "descricao">${this.Descricao}</div>
            <div class = "descricao">${this.Preco}</div>
            </center>
        </div>`
    }
}

let produto = new Produto("Tenis", 999)
console.log(produto.Mostra_produtos())

let produtodestaque = new ProdutoDestaque("Celular", "lindo", "Funcionavel" , 3299.5, "https://m.media-amazon.com/images/I/71kZfQA-Y7L._AC_SX679_.jpg")
console.log(produtodestaque.mostrar_produtos_destaque())
const div = document.getElementById("produto-destaque");
div.insertAdjacentHTML('afterbegin', produtodestaque.mostrar_produtos_destaque())

let produtodestaque1 = new ProdutoDestaque("Celular", "lindo", "Funcionavel" , 7899.5, "https://m.media-amazon.com/images/I/71ZDY57yTQL._AC_SX522_.jpg")
console.log(produtodestaque1.mostrar_produtos_destaque())
const div1 = document.getElementById("produto-destaque");
div1.insertAdjacentHTML('afterbegin', produtodestaque1.mostrar_produtos_destaque())

let produtodestaque2 = new ProdutoDestaque("Celular", "lindo", "Funcionavel" , 6299.5, "https://m.media-amazon.com/images/I/51yacbtHFuL._AC_SX679_.jpg")
console.log(produtodestaque2.mostrar_produtos_destaque())
const div2 = document.getElementById("produto-destaque");
div2.insertAdjacentHTML('afterbegin', produtodestaque2.mostrar_produtos_destaque())

let produtodestaque3 = new ProdutoDestaque("Celular", "lindo", "Funcionavel" , 1299.5, "https://m.media-amazon.com/images/I/51uD1lmrV8L._AC_SX679_.jpg")
console.log(produtodestaque3.mostrar_produtos_destaque())
const div3 = document.getElementById("produto-destaque");
div3.insertAdjacentHTML('afterbegin', produtodestaque3.mostrar_produtos_destaque())

let produtodestaque4 = new ProdutoDestaque("Celular", "lindo", "Funcionavel" , 4299.5, "https://m.media-amazon.com/images/I/61BGE6iu4AL._AC_SX679_.jpg")
console.log(produtodestaque4.mostrar_produtos_destaque())
const div4 = document.getElementById("produto-destaque");
div4.insertAdjacentHTML('afterbegin', produtodestaque4.mostrar_produtos_destaque())

let produtodestaque5 = new ProdutoDestaque("Celular", "lindo", "Funcionavel" , 8299.5, "https://m.media-amazon.com/images/I/715HCLsOHbL._AC_SX679_.jpg ")
console.log(produtodestaque5.mostrar_produtos_destaque())
const div5 = document.getElementById("produto-destaque");
div5.insertAdjacentHTML('afterbegin', produtodestaque5.mostrar_produtos_destaque())

