document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('myModal');
    const buttons = document.querySelectorAll('.btn-primary'); 
    const span = document.getElementsByClassName('close')[0];

    buttons.forEach(button => {
        button.onclick = function() {
            modal.style.display = 'block';
        };
    });

    span.onclick = function() {
        modal.style.display = 'none';
    };

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };
});
