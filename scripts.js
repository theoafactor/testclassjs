//1. literal method
const users = ["James", "Jade", "Mike", "Tayo"];

let username = prompt("Enter username: ")

if(username.trim().length == 0){
    alert("Please enter your name");
}else{

    if(users.includes(username)){
        alert(`Welcome ${username}`)
    }else{
        alert("You are not registered in the array");
    }

}

