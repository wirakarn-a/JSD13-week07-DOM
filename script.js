// Write your demo code here, section by section.
// The HTML file has matching ids/classes for each topic:
//
// 1. Selecting Elements   -> #main-title, .submit-btn, .task
console.log(document.getElementById("main-title"));
console.log(document.getElementsByClassName("submit-btn"))
// 2. Modifying Content    -> .label, #msg, #card
// 3. classList            -> #themeBtn, .card
// 4. Create & Remove      -> #addTaskBtn, #resetTasksBtn, #tasks
// 5. Events               -> #click-me, #list, #signupForm, #email, .error
// 6. Pokémon Card Fetcher -> #fetchBtn, #resetBtn, #gallery
console.log(document.getElementById("modify-name").textContent);
const h2Name = document.getElementById("modify-name");
h2Name.textContent = "Feel Good"
console.log(h2Name);
h2Name.style.backgroundColor = '#5372d9';
const carding = document.getElementById("card");
cardImg.innerHTML = `<img src= >`