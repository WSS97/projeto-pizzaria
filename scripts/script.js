const btns = document.querySelectorAll('.btn');

anchors.forEach(anchor => {
    anchor.addEventListener('click', () => {
        // Remove o ID "selected" de todas as âncoras
        anchors.forEach(a => a.removeAttribute('id'));

        // Adiciona o ID "selected" apenas à âncora clicada
        anchor.id = 'selected';
    });
});