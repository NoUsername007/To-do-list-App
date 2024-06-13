const list_input = document.getElementById("list_input")
const submit_button = document.getElementById("submit")
const list = document.querySelector(".list-container")
const clear_button = document.getElementById("Clear")

submit_button.addEventListener("click", (e) => {
    let to_add = list_input.value
    let id = 0;
    if (to_add != "") {
        if (to_add.trim().length) {
            list.innerHTML += `<input type="checkbox" id="${id}">
            <label for="${id}">${to_add}</label><br>`
        }
    }
    localStorage.setItem("content", `${list.innerHTML}`);
    console.log(localStorage.getItem("content"))
    id++
})

window.addEventListener("load", () => {
    console.log(localStorage.getItem("content"))
    list.innerHTML = localStorage.getItem("content")
})

clear_button.addEventListener("click", (e) => {
    localStorage.setItem("content", "")
    list.innerHTML = ""
})

