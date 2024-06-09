const colors = document.querySelectorAll('div');
colors.forEach(div => {
    div.addEventListener('click', () => {
        document.body.style.backgroundColor = div.id;
    })
});