
$('body').css('background', '#3C89CE');
$(function (){
    cambiarFondo();
    colorAleatorio();
});

function cambiarFondo(){
    $('body').css('background', '#18344E');
    $('body').css('transition', '1s');
}

function dobleFondo(){
    $('body').css('background', randomColorAl);
    $('body').css('transition', '2s');
}

function colorRandom(){
    $('body').css('background', randomColorAl);
    $('body').css('transition', '2s');

}


// Generador número
function random(number) {
	return Math.floor(Math.random() * (number + 1));
}

// Generador color rgb
function randomColor() {
	return 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
}

// Random color
function randomColorAl(){
    return '#' + Math.random().toString(16).slice(2,8);
}

// Loop
function colorAleatorio(){
    let i = 0;

    let body = $('body');
    let colors = ['red', 'yellow', 'green' , 'aqua' ,'blue', 'fuchsia'];

    body.css('backgroundColor', colors[0]);

    window.setInterval(function(){
        i = i == colors.length ? 0 : i;
        body.animate({backgroundColor: colors[i]}, 3000);
        i++;
    }, 30);
}
