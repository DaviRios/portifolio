document.addEventListener('DOMContentLoaded', () => {
    const interBubble = document.querySelector('.interactive');
    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    const move = () => {
        curX += (tgX - curX) / 20;
        curY += (tgY - curY) / 20;
        interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
        requestAnimationFrame(move);
    };

    window.addEventListener('mousemove', (event) => {
        tgX = event.clientX;
        tgY = event.clientY;
    });

    move();
});

window.addEventListener('scroll', () => {
    const contactSection = document.getElementById('contact');
    const scrollPosition = window.scrollY;
    
    if (scrollPosition > 600) { // Adjust this value to trigger the slide-in at a specific scroll position
        contactSection.style.top = "0";
        contactSection.style.opacity = "1";
    } else {
        contactSection.style.top = "-200px";
        contactSection.style.opacity = "0";
    }
});

document.getElementById('menuToggle').addEventListener('click', function() {
    document.getElementById('sideMenu').classList.toggle('open');
    document.body.classList.toggle('menu-open');
});

document.getElementById('closeMenu').addEventListener('click', function() {
    document.getElementById('sideMenu').classList.remove('open');
    document.body.classList.remove('menu-open');
});
