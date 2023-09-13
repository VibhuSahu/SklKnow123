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
