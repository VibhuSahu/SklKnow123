// All the courses with linked pages
const skillsData = [
    { name: "Web Development", link: "courses/WebDevelopment/index.html" },
    { name: "Graphic Design", link: "courses/GraphicDesign/index.html" },
    { name: "Data Analysis", link: "courses/DataAnalysis/index.html" },
    { name: "Photography", link: "courses/Photography/index.html" },
    // Add more skills here with name and link
];


// Function to populate the skills list with link
function populateSkillsList() {
    const skillsList = document.getElementById("skills-list").querySelector("ul");
    skillsList.innerHTML = "";

    skillsData.forEach(skill => {
        const listItem = document.createElement("li");
        const anchor = document.createElement("a");
        anchor.textContent = skill.name;
        anchor.href = skill.link;
        anchor.target = "_blank"; // Open the link in a new tab
        listItem.appendChild(anchor);
        skillsList.appendChild(listItem);
    });
}





// Handle form submission (you can modify this to search skills)
document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    const searchInput = document.getElementById("search-input").value;
    console.log("Search for:", searchInput);
});

// Initial population of skills list
populateSkillsList();
