let text = prompt('введите какуе то фразу на русском языке') 
 
let list = text.split(" ")
let findA = text.split("a")
let newUl = document.body.insertAdjacentHTML('afterbegin', '<ul></ul>')
let myUl = document.querySelector('ul')
let elementDecor
myUl.style.listStyle = 'none'

// alert(findA.length - 1)



for(i = 0; i < list.length; i++){
    myUl.insertAdjacentHTML('beforeend', `<li>${list[i]}</li>`)
      
}

function upperCase() {
    document.querySelector('li').classList.add('first')
    let selectedOne = document.querySelector('.first') 
    elementDecor = selectedOne.innerHTML.toUpperCase()
    selectedOne.innerHTML = elementDecor    
}

upperCase()

function lowerCase() {
    //Определяем элементы
    myUl.lastElementChild.classList.add('last')
    let selectedOne = document.querySelector('.last')
    
    // делаем нижний регистр
    elementDecor = selectedOne.innerHTML.toLowerCase()
    selectedOne.innerHTML = elementDecor 
    if(list.length > 2){
        selectedOne.previousElementSibling.classList.add('pre-last')
    let selecedTwo = document.querySelector('.pre-last')
        elementDecor = selecedTwo.innerHTML.toLowerCase()
        selecedTwo.innerHTML = elementDecor 
    }
 
}
lowerCase()

function findElment() {
    let patt = new RegExp('а', 'g') 
    
    
    let result = text.toLowerCase().match(patt)

    alert(result.length + '- вот сколько мы нашли букв "a"')
}

findElment()



// document.querySelector('li').classList.add('first')
// let firstEl = document.querySelector('.first') 
// firstNew = firstEl.innerHTML.toUpperCase()
// firstEl.innerHTML = firstNew
// console.log(firstEl)

// firstLi.innerHTML = firstLi.toUpperCase()

// function liUpper(){
    //     for(i = 0; i < list.length; i++){
//         myUl.insertAdjacentHTML('beforeend', `<li>${list[i]}</li>`)
        
//     }

//     firstLi = myUl.firstElementChild.innerHTML
//     firstLi = 
    
//     // firstLi = myUl.firstElementChild.innerHTML
//     // myUl[0].innerHTML = firstLi
//     // console.log(firstLi)
    
    
//     // console.log(firstLi)
// }
// liUpper()

