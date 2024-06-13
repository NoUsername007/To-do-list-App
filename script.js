const list_input = document.getElementById("list_input")
const submit_button = document.getElementById("submit")
const list = document.querySelector(".list-container")
const clear_button = document.getElementById("Clear")
let items = document.querySelectorAll(".item")
let labels = document.querySelectorAll(".label")
let id = 0;

submit_button.addEventListener("click", (e) => {
    let to_add = list_input.value
    if (to_add != "") {
        if (to_add.trim().length) {
            list.innerHTML += `<input type="checkbox" class="item" id="${id}">
            <label for="${id}" class="label">${to_add}</label><br>`
        }
    }
    localStorage.setItem("content", `${list.innerHTML}`);
    id++
    list_input.value = ""
    let items = document.querySelectorAll(".item")
    let labels = document.querySelectorAll(".label")
    console.log(items)
    console.log(labels)
    console.log(id)
})

window.addEventListener("load", () => {
    list.innerHTML = localStorage.getItem("content")
})

clear_button.addEventListener("click", (e) => {
    localStorage.setItem("content", "")
    list.innerHTML = ""
})