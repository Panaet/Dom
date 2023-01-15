document.getElementById("int").addEventListener('keydown', function(event) {
    if (['0','1','2','3','4','5','6','7','8','9'].includes(event.key)) {
        event.preventDefault();
    }
});