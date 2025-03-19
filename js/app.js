// Select necessary DOM elements
const dropdownToggle = document.querySelector(".selectDropdownToggle"); // Dropdown button
const dropdownMenu = document.querySelector(".selectDropdownMenu"); // Dropdown menu
const dropdownIcon = document.getElementById("dropdownIcon"); // Icon to rotate when opened
const searchBox = document.getElementById("searchBox"); // Input field for search
const dropdownItems = document.querySelectorAll(".selectDropdownItem:not(.selectAll)"); // All selectable items except "Select All"
const selectAllCheckbox = document.getElementById("selectAll"); // "Select All" checkbox

// Toggle dropdown menu visibility and rotate the dropdown icon
dropdownToggle.addEventListener("click", () => {
    const isOpen = dropdownMenu.style.display === "block"; // Check if menu is already open
    dropdownMenu.style.display = isOpen ? "none" : "block"; // Toggle dropdown visibility
    dropdownIcon.classList.toggle("rotate", !isOpen); // Rotate icon when opened
});

// Handle individual item selection and checkbox toggle
dropdownItems.forEach(item => {
    item.addEventListener("click", () => {
        const checkbox = item.querySelector("input[type='checkbox']"); // Get checkbox inside the clicked item
        checkbox.checked = !checkbox.checked; // Toggle checkbox state
        updateSelectAllState(); // Check if "Select All" should be updated
    });
});

// Select/Deselect all items when "Select All" checkbox is clicked
document.querySelector(".selectAll").addEventListener("click", () => {
    const allChecked = selectAllCheckbox.checked; // Check if "Select All" is currently checked
    dropdownItems.forEach(item => {
        item.querySelector("input[type='checkbox']").checked = !allChecked; // Set all items to match "Select All" state
    });
    selectAllCheckbox.checked = !allChecked; // Toggle "Select All" state
});

// Function to update "Select All" checkbox based on individual item selection
function updateSelectAllState() {
    const allChecked = [...dropdownItems].every(item => item.querySelector("input[type='checkbox']").checked); // Check if all items are selected
    selectAllCheckbox.checked = allChecked; // Update "Select All" checkbox state
}

// Search functionality: Show/hide items based on search input
searchBox.addEventListener("keyup", () => {
    const searchValue = searchBox.value.toLowerCase(); // Get lowercase search value
    dropdownItems.forEach(item => {
        const text = item.textContent.toLowerCase(); // Get lowercase item text
        item.style.display = text.includes(searchValue) ? "flex" : "none"; // Show item if it matches search, hide otherwise
    });
});

// Close dropdown when clicking outside of it
document.addEventListener("click", (e) => {
    if (!dropdownToggle.contains(e.target) && !dropdownMenu.contains(e.target)) { // Check if clicked outside dropdown
        dropdownMenu.style.display = "none"; // Hide dropdown
        dropdownIcon.classList.remove("rotate"); // Reset icon rotation
    }
});
