/*document.getElementById("int").addEventListener('keydown', function(event) {
    if (['0','1','2','3','4','5','6','7','8','9'].includes(event.key)) {
        event.preventDefault();
    }
});*/

//Второе задание

/*var mod = document.getElementById("Mymodal"); 
var btnOp = document.getElementById("openModal");
var close = document.getElementById("clos");

btnOp.onclick = function() {
    modall.style.display = "block";
}

close.onclick = function() {
    modall.style.display = "none";
}*/

/* Третье задание */

/*pole.onclick = function(event) {
    let poleCoords = this.getBoundingClientRect();

let bolCoords = {
    top: event.clientY - poleCoords.top - pole.clientTop - bol.clientHeight / 2,
    left: event.clientX - poleCoords.left - pole.clientLeft - bol.clientWidth / 2
    };

    if (bolCoords.top < 0) bolCoords.top = 0;

    if (bolCoords.left < 0) bolCoords.left = 0;

    if (bolCoords.top + bol.clientWidth > pole.clientWidth) {
        bolCoords.left = pole.clientWidth - bol.clientWidth;
    }

    if (bolCoords.top + bol.clientHeight > pole.clientHeight) {
        bolCoords.top + bol.clientHeight > pole.clientHeight
    }

    bol.style.left = bolCoords.left + 'px';
    bol.style.top = bolCoords.top + 'px';

}*/
