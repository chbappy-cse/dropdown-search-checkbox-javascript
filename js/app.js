const dropdownToggle = document.querySelector(".selectDropdownToggle");
const dropdownMenu = document.querySelector(".selectDropdownMenu");
const dropdownIcon = document.getElementById("dropdownIcon");
const searchBox = document.getElementById("searchBox");
const dropdownItems = document.querySelectorAll(".selectDropdownItem");

// Toggle dropdown menu and rotate icon
dropdownToggle.addEventListener("click", () => {
    const isOpen = dropdownMenu.style.display === "block";
    dropdownMenu.style.display = isOpen ? "none" : "block";
    dropdownIcon.classList.toggle("rotate", !isOpen);
});

// Toggle checkbox when clicking dropdown item
dropdownItems.forEach(item => {
    item.addEventListener("click", () => {
        const checkbox = item.querySelector("input[type='checkbox']");
        checkbox.checked = !checkbox.checked;
    });
});

// Search functionality: Show/Hide items based on input
searchBox.addEventListener("keyup", () => {
    const searchValue = searchBox.value.toLowerCase();
    dropdownItems.forEach(item => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(searchValue) ? "flex" : "none";
    });
});

// Close dropdown when clicking outside
document.addEventListener("click", (e) => {
    if (!dropdownToggle.contains(e.target) && !dropdownMenu.contains(e.target)) {
        dropdownMenu.style.display = "none";
        dropdownIcon.classList.remove("rotate");
    }
});