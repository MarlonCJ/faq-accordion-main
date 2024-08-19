
document.addEventListener('DOMContentLoaded', function() {
    let botones = document.querySelectorAll('.faq-question');

    botones.forEach(function(boton) {
        boton.addEventListener('click', function() {
            let content = this.nextElementSibling;
            let icon = this.querySelector('.icon img'); 

            content.classList.toggle('active');

            
            if (content.classList.contains('active')) {
                icon.src = 'assets/images/icon-minus.svg';
                content.style.display = 'block';  
            } else {
                icon.src = 'assets/images/icon-plus.svg';
                content.style.display = 'none';  
            }
        });
    });
});

