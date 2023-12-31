// All the courses with linked pages
const skillsData = [
    { name: "Web Development", link: "pages/courses/WebDevelopment/index.html" },
    { name: "Graphic Design", link: "pages/courses/GraphicDesign/index.html" },
    { name: "Data Analysis", link: "pages/courses/DataAnalysis/index.html" },
    { name: "Photography", link: "pages/courses/Photography/index.html" },
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



// Sample data for auto-suggest with links
const suggestions = [
    { name: "Web Development", link: "https://www.example.com/web-development" },
    { name: "Graphic Design", link: "https://www.example.com/graphic-design" },
    { name: "Data Analysis", link: "https://www.example.com/data-analysis" },
    // Add more suggestions with names and links
];

const searchInput = document.getElementById("search-input");
const suggestionsList = document.getElementById("suggestions");

// Function to update the suggestions list
function updateSuggestions() {
    const query = searchInput.value.toLowerCase();
    suggestionsList.innerHTML = '';

    suggestions.forEach(suggestion => {
        if (suggestion.name.toLowerCase().includes(query)) {
            const listItem = document.createElement("li");
            const link = document.createElement("a");
            link.href = suggestion.link;
            link.textContent = suggestion.name;
            listItem.appendChild(link);
            suggestionsList.appendChild(listItem);
        }
    });

    if (suggestionsList.children.length > 0) {
        suggestionsList.style.display = 'block';
    } else {
        suggestionsList.style.display = 'none';
    }
}

// Event listener for input changes
searchInput.addEventListener("input", updateSuggestions);

// Event listener to close the suggestions list when clicking outside the search container
document.addEventListener("click", (event) => {
    if (event.target !== searchInput) {
        suggestionsList.style.display = 'none';
    }
});
