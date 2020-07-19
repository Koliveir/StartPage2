function main() {
    var dados = new Date().toLocaleDateString()
    //var hora = dados.getHours()
    //var minuto = dados.getMinutes()
    //var segundos = dados.getSeconds()
    var horario = window.document.getElementById('hora')
    //for (var i = 1; i < 2; i--) {
        horario.innerHTML = `${dados}`//`${hora}:${minuto}:${segundos}`
    }
}