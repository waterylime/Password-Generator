//genarate random password

function genarate(){
// set pasword length/complexity
let complexity = document.getElementById("slider").value;
console.log(complexity)

//all password values
let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*?=+_()";

let password= "";

let randomValue = Math.floor(Math.random()* values.length)

//creat for loop for password
for(var i = 0; i <= complexity; i++){
    password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length)));

}
//add pasword to text box
document.getElementById("display").value = password;

//add pasword to list
document.getElementById("lastPassword").innerHTML += password + "<br />";


} 
document.getElementById("generate").onclick = function(){
    genarate()
}


//copy password to clipboard
function copyPassword(){
    document.getElementById("display").select();

  
    alert(document.getElementById("display").value)
}

document.getElementById("copy").onclick = function(){
    copyPassword()
}

