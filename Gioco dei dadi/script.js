


let me;
let cpu;

document.getElementById("rollButton").onclick = function(){
     me = Math.floor((Math.random() * 6) + 1);
     cpu = Math.floor((Math.random() * 6) + 1);

     document.getElementById("meLabel").innerHTML = me;
     document.getElementById("cpuLabel").innerHTML = cpu;



    

     if (cpu > me){
       document.querySelector(".resultado").innerHTML="cpu won";
        }else if (me > cpu){
            document.querySelector(".resultado").innerHTML= "you win"
        }else document.querySelector(".resultado").innerHTML ="it is a draw";
       

       
}





