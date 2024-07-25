// create a new list item just like the initial list items

function createNewItem(item){
  const li = document.createElement('li')
  li.appendChild(document.createTextNode(item))

const button = createButton('remove-item btn-link text-red')

return button

}

function createButton(classes){
    const button = document.createElement('button')
    button.className = classes

    const icon = createIcon('fa-solid fa-xmark')
    button.appendChild(icon)

    return button
}

function createIcon(classes){
    const icon = document.createElement('i')
    icon.className = classes

    return icon 
}

