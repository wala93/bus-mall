'use strict' ;

let maxClick=25;
let attempts=0;

let firstImageElement = document.getElementById('first');
// firstImageElement.setAttribute('src', '../images/bag.jpg');
let secondImageElement = document.getElementById('second');
let thirdImageElement = document.getElementById('third');
let container =document.getElementById('container');
// let showResultButton= document.getElementById('button');

let unorderdList = document.getElementById('result');
let li;


// console.log(timesOfShow.length);
let arrOfObject =[];
function BusMall (name,source){
  this.name = name;
  this.source = source;
  this.click = 0;
  this.timesOfShow =0;

  arrOfObject.push (this);
  // console.log(this.source);

}
new BusMall ('bag' ,'../images/bag.jpg');
new BusMall ('banana' ,'../images/banana.jpg');
new BusMall ('bathroom' ,'../images/bathroom.jpg');
new BusMall ('boots' ,'../images/boots.jpg');
new BusMall ('breakfast' ,'../images/breakfast.jpg');
new BusMall ('bubblegum' ,'../images/bubblegum.jpg');
new BusMall ('chair' ,'../images/chair.jpg');
new BusMall ('cthulhu' ,'../images/cthulhu.jpg');
new BusMall ('dog-duck' ,'../images/dog-duck.jpg');
new BusMall ('dragon' ,'../images/dragon.jpg');
new BusMall ('pen' ,'../images/pen.jpg');
new BusMall ('pet-sweep' ,'../images/pet-sweep.jpg');
new BusMall ('scissors' ,'../images/scissors.jpg');
new BusMall ('shark' ,'../images/shark.jpg');
new BusMall ('sweep' ,'../images/sweep.png');
new BusMall ('tauntaun' ,'../images/tauntaun.jpg');
new BusMall ('wine-glass' ,'../images/wine-glass.jpg');
new BusMall ('water-can' ,'../images/water-can.jpg');
new BusMall ('unicorn' ,'../images/unicorn.jpg');
new BusMall ('usb' ,'../images/usb.gif');




let firstImageIndex;
let secondImageIndex;
let thirdImageIndex;

function generateRandomIndex(){

  let randomIndex = Math.floor(Math.random() * arrOfObject.length);
  return randomIndex;
}

function renderThreeRandomImages(){

  firstImageIndex= generateRandomIndex();

  secondImageIndex=generateRandomIndex();

  thirdImageIndex=generateRandomIndex();

  // console.log('arr', arrOfObject);


  while (((firstImageIndex===secondImageIndex)||(firstImageIndex===thirdImageIndex))||(secondImageIndex===thirdImageIndex)){
    firstImageIndex= generateRandomIndex();
    arrOfObject[firstImageIndex].timesOfShow++;
    secondImageIndex=generateRandomIndex();
    arrOfObject[secondImageIndex].timesOfShow++;
    // thirdImageIndex=generateRandomIndex();
    // // arrOfObject[thirdImageIndex].timesOfShow++;
  }
  firstImageElement.setAttribute('src', arrOfObject[firstImageIndex].source);
  arrOfObject[firstImageIndex].timesOfShow++;
  secondImageElement.setAttribute('src', arrOfObject[secondImageIndex].source);
  arrOfObject[secondImageIndex].timesOfShow++;
  thirdImageElement.setAttribute('src', arrOfObject[thirdImageIndex].source);
  arrOfObject[thirdImageIndex].timesOfShow++;
}
// timesOfShow[thirdImageIndex]++;
// timesOfShow[secondImageIndex]++;
// timesOfShow[firstImageIndex]++;
renderThreeRandomImages();

function clicking (event){
  attempts++;
  if (attempts <= maxClick ){

    if(event.target.id === 'first'){
      arrOfObject[firstImageIndex].click++;
      // console.log(arrOfObject[firstImageIndex].click);
    } else if (event.target.id === 'second'){
      arrOfObject[secondImageIndex].click++;
      // console.log(arrOfObject[secondImageIndex].click);
    }
    else if(event.target.id==='third') { arrOfObject[thirdImageIndex].click++;}

    renderThreeRandomImages();

    // resultButton();

  }




}




container.addEventListener('click',clicking);


function resultButton(event){



  for(let i = 0 ; i < arrOfObject.length; i++){
    li = document.createElement('li');
    unorderdList.appendChild(li);

    li.textContent = `${arrOfObject[i].name} it has ${arrOfObject[i].click} Votes and ${arrOfObject[i].timesOfShow}  shows`;
  }


}
// li.addEventListener('click',resultButton);
li.addEventListener('click',resultButton);


// var ctx = document.getElementById('myChart').getContext('2d');
// var chart = new Chart(ctx, {
//   // The type of chart we want to create
//   type: 'line',

//   // The data for our dataset
//   data: {
//     labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//     datasets: [{
//       label: 'My First dataset',
//       backgroundColor: 'rgb(255, 99, 132)',
//       borderColor: 'rgb(255, 99, 132)',
//       data: [0, 10, 5, 2, 20, 30, 45]
//     }]
//   },

//   // Configuration options go here
//   options: {}
// });






