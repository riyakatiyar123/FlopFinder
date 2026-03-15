function predict(){

let budget = document.getElementById("budget").value;
let marketing = document.getElementById("marketing").value;
let cast = document.getElementById("cast").value;
let rating = document.getElementById("rating").value;

let score = (budget*0.2 + marketing*0.2 + cast*5 + rating*10);

let risk;

if(score < 100){
risk = "High Risk of Flop";
}
else if(score < 200){
risk = "Moderate Risk";
}
else{
risk = "Low Risk";
}

document.getElementById("result").innerText = risk;

}