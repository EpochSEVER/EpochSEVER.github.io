document.addEventListener('mousemove', function(e) {
    var circle = document.getElementById('circle');
    circle.style.left = (e.pageX - 50) + 'px';
    circle.style.top = (e.pageY - 50) + 'px';
});
