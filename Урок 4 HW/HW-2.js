let square = document.querySelectorAll('div')
console.log(square)

square.mouseover = handler


function handler(event) {
   
  
    if (event.type == 'mouseover') {
      event.target.style.background = 'pink'
    }
    
    
  }
  

