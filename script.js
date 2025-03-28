document.getElementById('classbtn').addEventListener('click', function() {
    const div = document.querySelector('.classes');
    if (div.style.display === 'none') {
        div.style.display = 'block';
    } else {
        div.style.display = 'none';
    }
})
document.getElementById('aibutton').addEventListener('click', function() {
    const div = document.querySelector('.ais');
    if (div.style.display === 'none') {
        div.style.display = 'block';
    } else {
        div.style.display = 'none';
    }
})