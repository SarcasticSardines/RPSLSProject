let myTurn = document.getElementById("myTurn");
let gameRules = document.getElementById("gameRules");
let boxRules = document.getElementById("boxRules");
let SDmode = document.getElementById("SDmode");
let TOOFmode = document.getElementById("TOOFmode");
let FOOSmode = document.getElementById("FOOSmode");

let playMode = document.getElementById("playMode");
let oneVone = document.getElementById("oneVone");
let oneVcpu = document.getElementById("oneVcpu");

let p1Div = document.getElementById("p1Div");
let p1Name = document.getElementById("p1Name");
let p1Sub = document.getElementById("p1Sub");
let p2Div = document.getElementById("p2Div");
let p2Name = document.getElementById("p2Name");
let p2Sub = document.getElementById("p2Sub");

let rock = document.getElementById("rockP1");
let paper = document.getElementById("paperP1");
let siscor = document.getElementById("siscorP1");
let lizard = document.getElementById("lizardP1");
let spock = document.getElementById("spockP1");

let oneBox = document.getElementById("oneBox");
let twoBox = document.getElementById("twoBox");

let daResult = document.getElementById("daResult");
let winning = document.getElementById("winning");

let Sc = "scissor";
let Ro = "rock";
let Pa = "paper";
let Li = "lizard";
let Sp = "spock";
let winCount = 0;
let nameO;
let nameT;
let twoP = false;
let Oturn = true;
let p1Ch = "";
let p2Ch = "";

//name.style.display = "block" or "none"

gameRules.addEventListener("click", function(e){
    if(boxRules.style.display === "block") {
        boxRules.style.display = "none";
    }else {
        boxRules.style.display =  "block";
    }
});



// CPU choice function
function CPUIChooseU() {
    let CPUchoice = "";
    let choice = Math.random(0.01, 1.01);
    if(choice < 0.2){
        CPUchoice = Ro;
    }else if(choice > 0.2 && choice < 0.4){
        CPUchoice = Pa;
    }else if(choice > 0.4 && choice < 0.6){
        CPUchoice = Sc;
    }else if(choice > 0.6 && choice < 0.8){
        CPUchoice = Li;
    }else{
        CPUchoice = Sp;
    }
};

//CPU choice- each 20% (5*20=100) Math.random(0, 1.01)?
//if(CPUchoice < 0.2){
//CPUchoice = "rock"
//} etc for the rest

//let compare = function(P1choice, P2choice){
//if(P1choice === "rock"){
//if(P2choice === "scissor"){
//return "rock wins"
//}else{ return "paper wins"} } etc...
//}

SDmode.addEventListener("click", function(e){
    winCount = 1;
    playMode.style.display = "block";
});

TOOFmode.addEventListener("click", function(e){
    winCount = 3;
    playMode.style.display = "block";
});

FOOSmode.addEventListener("click", function(e){
    winCount = 4;
    playMode.style.display = "block";
});

oneVone.addEventListener("click", function(){
    // p1 name function, p2 name function
    p1Div.style.display = "block";
    p2Div.style.display = "block";
    twoP = true;
    StartGame();
});

oneVcpu.addEventListener("click", function(){
    p1Div.style.display = "block";
    twoP = false;
    StartGame();
});

// p1Sub.addEventListener("click", function(e){
//         if(p1Name === ""){
//             nameO = "Player 1";
//         }else{
//             nameO = p1Name.value;
//         }

//         if(twoP === false){
//             StartGame();
//         }else{
//             console.log("wait period");
//         }
// });

// p2Sub.addEventListener("click", function(e){
//     if(p2Name === ""){
//         nameT = "Player 2";
//     }else{
//         nameT = p2Name.value;
//     }

//     StartGame();
// })


function StartGame(){
SDmode.style.display = "none";
TOOFmode.style.display = "none";
FOOSmode.style.display = "none";
playMode.style.display = "none";
p1Div.style.display = "none";
p2Div.style.display = "none";
daResult.style.display = "none";
Oturn = true;

if(twoP === true){
    oneBox.style.display = "block";
    twoBox.style.display = "block";
}else{
    oneBox.style.display = "block";
}



};

rock.addEventListener("click", function(e){
    if(twoP === true){
    if(Oturn === true){
        p1Ch = Ro;

    }else{
        p2Ch = Ro;
    }
}
});
// 
