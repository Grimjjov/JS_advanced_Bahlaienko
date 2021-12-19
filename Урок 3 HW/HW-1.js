let screen = document.querySelector(".screen");
let inputsBtn = document.querySelectorAll("input");
let indexTimer = 1;
let indexTimerRevers = 30;
let myTimer
let contin = inputsBtn[2]
console.log(contin)





      for(let i = 0; i < inputsBtn.length; i++){
          inputsBtn[i].onclick = inputsBtnOn
      }
      
     
      function inputsBtnOn(){      
          
        if(this.value === 'start'){ 
            contin.setAttribute('disabled','disabled') 
            contin.setAttribute('value', 'continue')
            indexTimer = '0'        
            clearInterval(myTimer)
            clearInterval(myIntervalRevers)
            myInterval()
            
        }
        //PAUSE 
        else if (this.value === 'pause'){    
            contin.removeAttribute('disabled')     
            clearInterval(myTimer)
            clearInterval(myIntervalRevers)
            // this.setAttribute('disabled','disabled')
           
        }
        //CLEN  
        else if (this.value === 'clean'){ 
            indexTimer = ''        
            clearInterval(myTimer)
            clearInterval(myIntervalRevers)
            screen.innerHTML = '---'
            
        }
        //REVERS
        else if (this.value === 'revers'){   
            contin.setAttribute('disabled','disabled')       
            contin.setAttribute('value', 'continue_revers')
            indexTimerRevers = 30        
            clearInterval(myTimer)
            clearInterval(myIntervalRevers)
            // inputsBtn[0].style.cssText = 'border: 2px solid white'
            myIntervalRevers()
        } 
        //CONTINUE
        else if (this.value === 'continue') {
            contin.setAttribute('disabled','disabled')     
            myInterval()
       }
       //  CONTINUE_REVERS
       else if (this.value === 'continue_revers') {
        contin.setAttribute('disabled','disabled')     
        myIntervalRevers()
   } 
     }
      
      function myInterval() {
          myTimer = setInterval(function(){
              if(indexTimer <= 30){
                  screen.innerHTML = Number(indexTimer++);
              }
          }, 500)
      }
      function myIntervalRevers() {        
        myTimer = setInterval(function(){
            if(indexTimerRevers >= 0){
                screen.innerHTML = Number(indexTimerRevers--);
            }
        }, 500)
    }





    //   function inputsBtnOn(){
    //     let myTimer = setTimeout(function timer(){
    //         if (indexTimer < 30){
    //             myTimer = setTimeout(timer, 100)             
    //         }
    //         screen.innerHTML = Number(indexTimer++);  
    //     })
    //     if(this.value === 'start'){            
    //         setInterval(myTimer)
    //     } else if (this.value === 'pause'){                   
    //         clearInterval(myTimer)
    //      } 
         
          
    //   }
      

    // function myTimer(){
//     if (indexTimer <= 30){
//         screen.innerHTML = Number(indexTimer++);  
//         setTimeout(myTimer, 100)             
//     }
// }

    //   function timer() {
         
    //     if (indexTimer <= 30){
    //     screen.innerHTML = Number(indexTimer++);
    //     setTimeout(timer, 100);
        
    //    }
    //   }
    //   function stopTimer() {
    //     clearTimeout(timer, 0)
    //   }

    // function timer() {
        
    //     if (indexTimer <= 30){
    //         screen.innerHTML = indexTimer++;
    //         setTimeout(timer, 1000);
    //    }
    //   }