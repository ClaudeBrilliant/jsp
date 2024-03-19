const form = document.createElement('form')
document.body.appendChild(form)
const input = document.createElement('input')
input.placeholder = 'TO DO'
form.appendChild(input)
const button = document.createElement("button")
button.innerText = 'ADD'
button.role = 'ADD'
form.appendChild(button)


const ul = document.createElement('ul')
document.body.appendChild(ul)

const removeElement = el => {
    el.remove()
}

form.onsubmit = (event) => {
    event.preventDefault()
   const li = document.createElement('li') 
   ul.appendChild(li)
   li.innerText = input.value

   li.onclick = removeElement.bind(null ,li)
}

document.body.style.padding = '16px'
input.style.marginRight  = '8px'
button.style.backgroundColor= 'blue'


document.body.setAttribute('class','blue')