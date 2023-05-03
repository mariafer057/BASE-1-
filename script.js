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
constructor (Nome, DataCadastro, Descricao, Preco, imagemDestaque){
super(Nome, DataCadastro, Descricao, Preco)
this.imagemDestaque = imagemDestaque;
}

Mostra_produtosDestaque(){
    return <div class = "Celular">${this.Nome}</div>;
            <div>${this.DataCadastro}</div>
    //return this.Nome + this.DataCadastro + this.Descricao + this.Preco + this.imagemDestaque
    }
}
let produto = new Produto("Celular", "lindo", "Funcionavel" , 999)
console.log(produto.Mostra_produtos())

let produtodestaque = new ProdutoDestaque("Celular", "lindo", "Funcionavel" , 999, "www.imagemdecelular.com")
console.log(produtodestaque.Mostra_produtosDestaque())

const div = document.getElementById('produto-destaque');
div.insertAdjacentHTML('afterbegin', produto.Mostra_produtosDestaque())