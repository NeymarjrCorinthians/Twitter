function Entrar(){
    var  CaixaDeTexto = document.getElementById("CaixaDeTexto").value;
    localStorage.setItem("Nome",CaixaDeTexto)
    window.location="salas.html"
}