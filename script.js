let inp = document.getElementById('inp')
let btn = document.getElementById("btn")
let ul = document.querySelector(".result")


btn.addEventListener('click', (e) => {
    e.preventDefault()
    let li = document.createElement('li')
    li.innerText = inp.value
    let x = document.createElement('span')
    x.style.backgroundColor = 'rgb(255, 119, 119)'
    x.innerText = 'X'
    addElement(li, x)
    inp.value = ''
})

function addElement(li, x) {
    if (li.innerText == "") {
        return false
    }
    li.appendChild(x)
    ul.appendChild(li)
    deleteTask(x, li)
}

function deleteTask(x, li) {
    x.addEventListener('click', () => {
        li.remove()
    })
}