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
    return `<div><center><img  class = "img" src= "${this.img}"></img><center></div>
            <div class = "descricao">${this.Nome}</div>
            <div class = "descricao">${this.DataCadastro}</div>
            <div class = "descricao">${this.Descricao}</div>
            <div class = "descricao">${this.Preco}</div>`
            
    }
}
let produto = new Produto("Celular", "lindo", "Funcionavel" , 999)
console.log(produto.Mostra_produtos())

let produtodestaque = new ProdutoDestaque("Celular", "lindo", "Funcionavel" , 3299.5, "https://promart.vteximg.com.br/arquivos/ids/6595611-1000-1000/image-53627b1653414a18aea7bdb523da276e.jpg?v=638036474695230000")
console.log(produtodestaque.mostrar_produtos_destaque())

const div = document.getElementById("produto-destaque");
div.insertAdjacentHTML('afterbegin', produtodestaque.mostrar_produtos_destaque())