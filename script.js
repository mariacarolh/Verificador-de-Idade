function Consultar(){

    var data = new Date()
    var ano = data.getFullYear() // full year pegará com 4 dígitos (2024)

    var fano = document.getElementById("ano").value // essa variável está segurando os dados do ano inserido no formulario 'Ano Nasc'
    var res = document.getElementById("res")

    // Essa validaçao verifica se o campo foi deixado em branco e se a data inserida ultrapassa o ano atual
    if (fano == 0 || fano > ano) {
        alert("Dados inválidos, favor verificar!!")
    }
    else {

        var sexo = document.getElementsByName("radsex")// Está pegando as duas bolotas (botòes) de f e m do formulario. [0,1] array
        var idade = ano - fano
        res.innerHTML = `A idade calculada é de ${idade}`

        var genero = ''
        if (sexo[1].checked) {
            genero = 'Homem'  // Se o fsex[0] estiver marcado, ele é homem.
        }
        else if (sexo[0].checked) {
            genero = 'Mulher'  // Se o fsex[1] estiver marcado, ela é mulher.
        }
        res.innerHTML = `Detectamos ${genero} de ${idade} anos`
    }
}
