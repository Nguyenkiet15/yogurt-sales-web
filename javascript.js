// Reference to DOM
const btnSearch = document.querySelector('#search');
const searchBox = document.querySelector('#searchBox');
const form = document.querySelector('#searchForm');

// Function
const FormValidate = () => {
    if (searchBox.value.trim() === "") { // Use trim() to remove leading and trailing spaces
        form.reset();
        searchBox.focus();
        return false;
    }
    return true;
};

// Event Listeners
searchBox.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        btnSearch.click()
    }
});

btnSearch.addEventListener('click', (event) => {
    if (!FormValidate()) {
        event.preventDefault(); 
    } else {
        form.submit();
    }
});
