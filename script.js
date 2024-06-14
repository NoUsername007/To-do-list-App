const list_input = document.getElementById("list_input")
const submit_button = document.getElementById("submit")
const list = document.querySelector(".list-container")
const clear_button = document.getElementById("Clear")
let id = 0;

submit_button.addEventListener("click", (e) => {
    e.preventDefault()
    let to_add = list_input.value
    if (to_add != "") {
        if (to_add.trim().length) {
            list.innerHTML += `<div class= "use_flex"><p class="_items_">${to_add}</p> <i class="ri-delete-bin-line"></i></div>`
        }
    }
    localStorage.setItem("content", `${list.innerHTML}`);
    id++
    list_input.value = ""
})

window.addEventListener("load", () => {
    list.innerHTML = localStorage.getItem("content")
})

clear_button.addEventListener("click", (e) => {
    localStorage.setItem("content", "")
    list.innerHTML = ""
})

list.addEventListener("click", (event) => {
    if (event.target.tagName === "I") {
        event.target.parentElement.remove()
    }
    else if (event.target.tagName === "P" && event.target.classList.contains("_items_")) {
        event.target.classList.toggle("checked")
    }
    localStorage.setItem("content", `${list.innerHTML}`);
})

window.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        submit_button.click()
    }
});
