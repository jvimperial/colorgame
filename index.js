let x;
let y;
let z;

let choice;
let bet;
let match;
let payout;

document.getElementById("redButton").onclick = function(){
    choice = 1
    document.getElementById("showUserChoice").innerHTML = "You chose Red!";
}
document.getElementById("blueButton").onclick = function(){
    choice = 2
    document.getElementById("showUserChoice").innerHTML = "You chose Blue!";
}
document.getElementById("greenButton").onclick = function(){
    choice = 3
    document.getElementById("showUserChoice").innerHTML = "You chose Green!";
}
document.getElementById("yellowButton").onclick = function(){
    choice = 4
    document.getElementById("showUserChoice").innerHTML = "You chose Yellow!";
}
document.getElementById("whiteButton").onclick = function(){
    choice = 5
    document.getElementById("showUserChoice").innerHTML = "You chose White!";
}
document.getElementById("pinkButton").onclick = function(){
    choice = 6
    document.getElementById("showUserChoice").innerHTML = "You chose Pink!";
}

document.getElementById("userSubmitBet").onclick = function(){

    bet = document.getElementById("userBet").value;

    if(bet<=0){
        document.getElementById("showUserBet").innerHTML = "Please enter a bet greater than 0!"
    }
    else{
        document.getElementById("showUserBet").innerHTML = "You bet $"+bet;
    }
}
document.getElementById("rollButton").onclick = function(){

    x = Math.floor(Math.random() * 6) + 1;
    y = Math.floor(Math.random() * 6) + 1;
    z = Math.floor(Math.random() * 6) + 1;
    
    switch(x){
        case 1:
            document.getElementById("c1label").innerHTML = "Red";
        break;
        case 2:
            document.getElementById("c1label").innerHTML = "Blue";
        break;
        case 3:
            document.getElementById("c1label").innerHTML = "Green";
        break;
        case 4:
            document.getElementById("c1label").innerHTML = "Yellow";
        break;
        case 5:
            document.getElementById("c1label").innerHTML = "White";
        break;
        case 6:
            document.getElementById("c1label").innerHTML = "Pink";
        break;
    }
    
    switch(y){
        case 1:
            document.getElementById("c2label").innerHTML = "Red";
        break;
        case 2:
            document.getElementById("c2label").innerHTML = "Blue";
        break;
        case 3:
            document.getElementById("c2label").innerHTML = "Green";
        break;
        case 4:
            document.getElementById("c2label").innerHTML = "Yellow";
        break;
        case 5:
            document.getElementById("c2label").innerHTML = "White";
        break;
        case 6:
            document.getElementById("c2label").innerHTML = "Pink";
        break;
    }

    switch(z){
        case 1:
            document.getElementById("c3label").innerHTML = "Red";
        break;
        case 2:
            document.getElementById("c3label").innerHTML = "Blue";
        break;
        case 3:
            document.getElementById("c3label").innerHTML = "Green";
        break;
        case 4:
            document.getElementById("c3label").innerHTML = "Yellow";
        break;
        case 5:
            document.getElementById("c3label").innerHTML = "White";
        break;
        case 6:
            document.getElementById("c3label").innerHTML = "Pink";
        break;
    }
    
    match = 1;
    if(choice==x){
        match = match + 1;
    }
    if(choice==y){
        match = match + 1;
    }
    if(choice==z){
        match = match + 1;
    }
    if(match==1){
        match = 0;
    }

    payout = bet * match;
    if(payout>0){
        document.getElementById("outcomeLabel").innerHTML = "Congratulations! you won $"+payout;
    }
    else{
        document.getElementById("outcomeLabel").innerHTML = "Better luck next time!"
    }
    
}