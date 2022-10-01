const displayEl = document.getElementById("display");
const buttonsEl = document.querySelectorAll(".button");
// let counter = 0;

buttonsEl.forEach((button) => {
    button.addEventListener("click", (e) => {
        // console.log("clicked" + counter++)
        // console.log(e.target.innerText)
        if(displayEl.innerText.length > 15){
            
            displayEl.innerText ="Can't store > 20"
        }
        switch(e.target.innerText){
            
                
            case 'C':
                displayEl.innerText = '';
                break;
            case '←':
                if(displayEl.innerText){
                    displayEl.innerText = displayEl.innerText.slice(0, -1)
                }
                break;
            case '=':
                try{
                    displayEl.innerText = eval(displayEl.innerText);
                }
                catch{
                    displayEl.innerText = "Error!";
                }
               
                break;
                
            
            default: 
            displayEl.innerText += e.target.innerText;
        }
    })
})