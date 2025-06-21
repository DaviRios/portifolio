fetch('stacks.json')
    .then(res => res.json())
    .then(stacks => {
        const container = document.getElementById('stack-container');

        stacks.forEach(stack => {
            const div = document.createElement('div');
            div.classList.add('stack');
            div.innerHTML = `
        <img src="${stack.icon}" alt="${stack.name}">
        <span>${stack.name}</span>
      `;
            container.appendChild(div);
        });
    });

function rollDown(pixels = 800, behavior = 'smooth') {
    window.scrollBy({
        top: pixels,
        left: 0,
        behavior: behavior
    });
}
