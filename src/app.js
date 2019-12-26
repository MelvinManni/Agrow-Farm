let navItem = document.getElementsByClassName('nav-link'),
    btnUp = document.getElementById('arrow-up');
for (let i = 0; i < navItem.length; i++){
    navItem[i].style.color = '#DC5B21';
    navItem[i].style.fontFamily = 'AlgeSc';
}

//button-up script
window.addEventListener('scroll', () => {
    let scrolled = scrollY;

    if (window.matchMedia("(max-width:721px)").matches && scrolled > 300) {
        btnUp.style.display = 'block';
    }
    else{
        btnUp.style.display = 'none';
    }
})


btnUp.addEventListener('click', (e) => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    e.preventDefault
})
