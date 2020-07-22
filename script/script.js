
    //window.onload = displayClock();
function displayClock() {
    let time = new Date().toLocaleTimeString();
    document.getElementById("hora").innerText = time;
    setTimeout(displayClock, 1000); /* setting timer */
}
function themeColors() {
    var color1 = window.document.getElementById('color_1')
    var color2 = window.document.getElementById('color_2')
    var color3 = window.document.getElementById('color_3')
    var user_color1 = window.document.getElementById('user_color1')
    var usuario = user_color1.value
    var user_color2 = window.document.getElementById('user_color2')
    var usuario2 = user_color2.value

    if (color1.checked) {
        document.documentElement.style.setProperty('--color-primary', '#495057');
        document.documentElement.style.setProperty('--color-secundary', '#ADB5BD');        
    } else if (color2.checked) {
        document.documentElement.style.setProperty('--color-primary', usuario);
        document.documentElement.style.setProperty('--color-secundary', usuario2);
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