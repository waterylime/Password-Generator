//genarate random password

function genarate(){
// set pasword length/complexity
let complexity = document.getElementById("slider").value;


//all password values
let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*?=+_()";

let password= "";

//creat for loop for password
for(var i = 0; i <= complexity; i++){
    password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.lenght)));

}
//add pasword to text box
document.getElementById("display").value = password;

//add pasword to list
document.getElementById("lastPassword").innerHTML += password + "<br />";


}


