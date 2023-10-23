
const 


let me = Math.floor((Math.random() * 6) + 1);
let cpu = Math.floor((Math.random() * 6) + 1);
console.log(me);
console.log(cpu);

if (cpu > me){
console.log("cpu won")
}else if (me > cpu){
    console.log("you win")
}else console.log("it is a draw");
