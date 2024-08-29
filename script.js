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
            "Front-end Coding",
            "Algorithms",
            "Front-End Design",
            "Responsive Web Design",
            "Logic Programming",
            "Back-end Coding",
            "Back-end strategies"
        ]
    },
    {
        category: "Programming Languages",
        items: [
            "Python",
            "JavaScript",
            "Java",
            "C++",
            "C",
            "C#",
            "NoSQL"
        ]
    },
    {
        category: "Frameworks and Libraries",
        items: [
            "React.js",
            "Git",
            "GitHub",
            "Power BI: Basic"
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
        category: "Development Tools",
        items: [
            "Git",
            "GitHub",
            "Microsoft SQL Server",
            "Power BI"
        ]
    },
    {
        category: "Data Analysis and Data Science",
        items: [
            "Data Science: Basic",
            "Fund. of Statistics",
            "Fund. of Data Science",
            "Fund. of Data Mining",
            "Fund. of Big Data",
            "Microsoft Excel"
        ]
    },
    {
        category: "Cloud Platforms and Services",
        items: [
            "Amazon Web Services"
        ]
    },
    {
        category: "Software Design and Architecture",
        items: [
            "Object-Oriented Prog",
            "Object-Oriented Design",
            "Design Patterns",
            "Software Design Patterns"
        ]
    },
    {
        category: "Spreadsheets and Data Visualization",
        items: [
            "Microsoft Excel",
            "Excel 2019",
            "Power BI"
        ]
    }
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
