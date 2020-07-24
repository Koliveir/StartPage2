window.onload = displayClock();
function displayClock() {
    let time = new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})
    let diaToday = new Date().toLocaleDateString([], {weekday: 'short', month: 'long', day: 'numeric'}).replace('.', '')
    document.getElementById("hora").innerText = time
    document.getElementById('dia').innerHTML = diaToday
    setTimeout(displayClock, 1000)
}
function themeColors() {
    var color1 = window.document.getElementById('color_1')
    var color2 = window.document.getElementById('color_2')
    var color3 = window.document.getElementById('color_3')
    var user_color1 = window.document.getElementById('user_color1').value
    var user_color2 = window.document.getElementById('user_color2').value

    if (color1.checked) {
        document.documentElement.style.setProperty('--color-primary', '#495057');
        document.documentElement.style.setProperty('--color-secundary', '#ADB5BD');        
    } else if (color2.checked) {
        document.documentElement.style.setProperty('--color-primary', user_color1);
        document.documentElement.style.setProperty('--color-secundary', user_color2);
        //document.documentElement.style.setProperty('--color-primary', '#A53860');
        //document.documentElement.style.setProperty('--color-secundary', '#ffa5ab');
    } else if (color3.checked) {
        document.documentElement.style.setProperty('--color-primary', '#91a8a4');
        document.documentElement.style.setProperty('--color-secundary', '#afdedc');
    } /*else if (user_color1.checked) {
        window.alert(user_color1)
        document.documentElement.style.setProperty('--color-primary', usuario);
        document.documentElement.style.setProperty('--color-secundary', usuario);
    }*/
}

function search() {
    var pesquisa = document.getElementById("search").value;
    location.replace("https://www.google.com/search" + pesquisa + "");
    }