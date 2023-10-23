


let me;
let cpu;

document.getElementById("rollButton").onclick = function(){
     me = Math.floor((Math.random() * 6) + 1);
     cpu = Math.floor((Math.random() * 6) + 1);

     document.getElementById("meLabel").innerHTML = me;
     document.getElementById("cpuLabel").innerHTML = cpu;



    

     if (cpu > me){
        result ="cpu won";
        }else if (me > cpu){
            result= "you win"
        }else result ="it is a draw";
        console.log(result)

       
}





