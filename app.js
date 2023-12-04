const boxes=document.querySelectorAll(".box")
console.log(boxes)
let ans="X"
let c=0
function main() {
    for (let i = 0; i < boxes.length; i++) {
       
        boxes[i].addEventListener("click",()=>{
            c++
            boxes[i].disabled = true;
            boxes[i].style.color="#FAB201"
            if (ans=="X"){
                ans="O"
    
            }
            else{
                ans="X"
            }
            boxes[i].textContent=ans
            check()
        })
        
    }
   
    
    
}
main()
function check() {
    if ((boxes[0].textContent==boxes[1].textContent && boxes[2].textContent==boxes[1].textContent && boxes[0].innerHTML!="")||boxes[3].textContent==boxes[4].textContent && boxes[5].textContent==boxes[4].textContent && boxes[3].innerHTML!=""||boxes[6].textContent==boxes[7].textContent && boxes[8].textContent==boxes[7].textContent && boxes[6].innerHTML!=""){
        document.getElementById("result").style.visibility="visible"
        document.getElementById("message").textContent=`${ans} has won the game`
        document.getElementById("button").onclick=()=>{
            document.getElementById("result").style.visibility="hidden" 
            location.reload("./app.js")
        }
    }
    else if(boxes[0].textContent==boxes[3].textContent&&boxes[6].textContent==boxes[3].textContent && boxes[3].innerHTML!="" || boxes[1].textContent==boxes[4].textContent && boxes[7].textContent==boxes[1].textContent && boxes[1].innerHTML!=""||boxes[2].textContent==boxes[5].textContent && boxes[8].textContent==boxes[2].textContent && boxes[8].innerHTML!=""){
        document.getElementById("result").style.visibility="visible"
        document.getElementById("message").textContent=`${ans} has won the game`
        document.getElementById("button").onclick=()=>{
            document.getElementById("result").style.visibility="hidden" 
            location.reload("./app.js")
        }
    }
    else if(boxes[0].textContent==boxes[4].textContent && boxes[8].textContent==boxes[4].textContent && boxes[4].innerHTML!=""|| boxes[6].textContent==boxes[4].textContent&& boxes[2].textContent==boxes[6].textContent  && boxes[6].innerHTML!=""){
        document.getElementById("result").style.visibility="visible"
        document.getElementById("message").textContent=`${ans} has won the game`
        document.getElementById("button").onclick=()=>{
            document.getElementById("result").style.visibility="hidden" 
            location.reload("./app.js")
        }
    }

    if (c==9){
        document.getElementById("result").style.visibility="visible"
        document.getElementById("message").textContent=`the Game Was Draw`
        document.getElementById("button").onclick=()=>{
            document.getElementById("result").style.visibility="hidden" 
            location.reload("./app.js")
        }
    }
}
