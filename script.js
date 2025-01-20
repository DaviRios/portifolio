document.getElementById('menuToggle').addEventListener('click', function(event) {
    event.preventDefault(); // Impede o comportamento padrão
    document.getElementById('sideMenu').classList.toggle('open');
    document.body.classList.toggle('menu-open');
});

document.getElementById('closeMenu').addEventListener('click', function(event) {
    event.preventDefault(); // Impede o comportamento padrão
    document.getElementById('sideMenu').classList.remove('open');
    document.body.classList.remove('menu-open');
});

const skills = [
    {
        category: "Programming and Development",
        items: [
            "Front/Back-end",
            "Algorithms",
            "Responsive Web Design",
            "Logic Programming",
        ]
    },
    {
        category: "Programming Languages",
        items: [
            "Python",
            "JavaScript",
            "Java",
            "C",
        ]
    },
    {
        category: "Frameworks and Libraries",
        items: [
            "React",
            "Git",
            "GitHub",
            "Node"
        ]
    },
    {
        category: "Databases",
        items: [
            "MySQL",
            "PostgreSQL",
            "Microsoft SQL Server",
            "SQL Server",
            "NoSQL"
        ]
    },
    {
        category: "Cloud Platforms and Services",
        items: [
            "Amazon Web Services"
        ]
    },
];

function generateSkillsHTML() {
    const container = document.getElementById('skills-container'); 
    container.innerHTML = '';
    skills.forEach(skill => {
        const skillDiv = document.createElement('div');
        skillDiv.classList.add('skill');

        const categoryHeading = document.createElement('h3');
        categoryHeading.textContent = skill.category;
        skillDiv.appendChild(categoryHeading);

        const itemsList = document.createElement('ul');
        itemsList.classList.add('dropdown');

        skill.items.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = item;
            itemsList.appendChild(listItem);
        });

        skillDiv.appendChild(itemsList);
        container.appendChild(skillDiv); 
    });
}
window.onload = generateSkillsHTML;
