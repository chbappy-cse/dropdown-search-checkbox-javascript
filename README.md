# Dropdown with Search and Checkboxes

A simple and customizable dropdown menu with a built-in search bar and checkboxes for multiple selections.

## Features

- 🔍 **Searchable**: Quickly filter items by typing in the search box.
- ✅ **Multi-Select**: Select multiple items using checkboxes.
- 📌 **Click Anywhere**: Click on the item text or checkbox to toggle selection.
- 🎨 **Customizable**: Easy to modify styles and functionality.

## Demo

\
*Example of the dropdown in action.*

## Installation

1. **Clone the repository**
   ```sh
   git clone https://github.com/your-username/dropdown-search-checkbox.git
   cd dropdown-search-checkbox
   ```
2. **Open **``** in a browser**
   ```sh
   open index.html
   ```

## Usage

Include the following HTML structure in your project:

```html
<div class="selectDropdown">
    <div class="selectDropdownToggle">
        <div class="dropdown-toggle__title">
            <span>Select Continent/Region</span>
            <img src="./chevron-up.svg">
        </div>
    </div>
    <div class="selectDropdownMenu">
        <div style="padding: 1rem;">
            <input type="text" id="searchBox" placeholder="Search...">
            <div id="selectDropdownItems">
                <div class="selectDropdownItem"><span>Apple</span> <input type="checkbox" value="Apple"></div>
                <div class="selectDropdownItem"><span>Banana</span> <input type="checkbox" value="Banana"></div>
                <div class="selectDropdownItem"><span>Cherry</span> <input type="checkbox" value="Cherry"></div>
            </div>
        </div>
    </div>
</div>
```

## Customization

### Change Dropdown Width

Modify the `.selectDropdown` CSS class:

```css
.selectDropdown {
    width: 300px; /* Change to desired width */
}
```

### Update Colors

Change border and hover colors in `.selectDropdownItem:hover`:

```css
.selectDropdownItem:hover {
    background: rgba(47, 139, 138, 0.1);
    color: #2F8B8A;
}
```

## JavaScript Functionality

- **Toggle Dropdown**: Opens/closes dropdown on click.
- **Search Filter**: Filters items based on search input.
- **Checkbox Toggle**: Click anywhere on the item to toggle selection.
- **Close on Outside Click**: Automatically closes the dropdown when clicking outside.

## Contributing

1. Fork the repository.
2. Create a new branch (`feature-new-feature`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-new-feature`).
5. Open a Pull Request.

## License

This project is licensed under the MIT License.

---

Made with ❤️ by [Ch Bappy](https://github.com/chbappy-cse)

