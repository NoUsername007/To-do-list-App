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
            list.innerHTML += `<div class="use_flex"><div class="list_text"><input type="checkbox" class="item" id="${id}">
            <label for="${id}" class="label">${to_add}</label></div><i class="ri-delete-bin-line"></i></div>`
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
    else if (event.target.tagName === "DIV" && event.target.classList.contains("list_text")) {
        let toCheck = event.target.parentNode.childNodes[0].childNodes[0]
        console.log(toCheck)
        // if (toCheck.checked == true) {
        //     toCheck.setAttribute('unchecked', true)
        //     toCheck.click()
        //     event.target.classList.toggle("cut")
        // } else if (toCheck.checked == false) {
        //     event.target.classList.toggle("cut")
        //     toCheck.setAttribute('checked', true)
        //     toCheck.click()
        // }
        event.target.classList.toggle("cut")
    }
})