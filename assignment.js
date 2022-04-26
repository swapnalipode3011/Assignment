let cardDetail = [
    {id:"1",color:"#6F98A8"},{id:"2",color:"#2B8EAD"},{id:"3",color:"#333333"},{id:"5",color:"#2F454E"},{id:"4",color:"#2B8EAD"},{id:"6",color:"#BFBFBF"},{id:"7",color:"#BFBFBF"},{id:"8",color:"#72C3DC"},{id:"9",color:"#2F454E"},
]

//Sort Function
const sort= () => {
const newArr = cardDetail.sort((a, b) => {return a.id - b.id}).map(generateCard).join('');
document.getElementById("cards").innerHTML = newArr;
}

//Card generate function
const generateCard= (num) => {
  return `<div id="cardEleWrapper" style="background-color:`+num.color+`"><div class="cardElement" >`+num.id+`</div></div>`;
}

//Shuffle function
const shuffle= () => {
let shuffled = cardDetail.sort((a, b) => {return Math.random() - 0.5;}).map(generateCard).join(''); 
document.getElementById("cards").innerHTML = shuffled;
}