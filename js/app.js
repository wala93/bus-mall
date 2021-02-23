'use strict' ;

let maxClick=25;
let attempts=0;

let firstImageElement = document.getElementById('first');
let secondImageElement = document.getElementById('second');
let thirdImageElement = document.getElementById('third');
let container =document.getElementById('container');
let button= document.getElementById('button');

let unorderdList = document.getElementById('result');
let li;


// console.log(timesOfShow.length);
let arrOfObject =[];
let arrNames=[];
let arrOfClicks=[];
let arrOfShows=[];
function BusMall (name,source){
  this.name = name;
  this.source = source;
  this.click = 0;
  this.timesOfShow =0;
  arrNames.push(this.name);
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
let arr=[] ;

function generateRandomIndex(){

  let randomIndex = Math.floor(Math.random() * arrOfObject.length);
  return randomIndex;
}

function renderThreeRandomImages(){

  firstImageIndex= generateRandomIndex();
  secondImageIndex=generateRandomIndex();
  thirdImageIndex=generateRandomIndex();

  // arr=[firstImageIndex,secondImageIndex,thirdImageIndex] ;

  while(((firstImageIndex===secondImageIndex)||(firstImageIndex===thirdImageIndex))||(secondImageIndex===thirdImageIndex) ||(((arr.includes(firstImageIndex)===true)|| (arr.includes(secondImageIndex)===true) ) || (arr.includes(thirdImageIndex)===true)))

  {
    firstImageIndex= generateRandomIndex();
    secondImageIndex=generateRandomIndex();
    thirdImageIndex=generateRandomIndex();

  }

  arr=[firstImageIndex,secondImageIndex,thirdImageIndex] ;
  firstImageElement.setAttribute('src', arrOfObject[firstImageIndex].source);
  arrOfObject[firstImageIndex].timesOfShow++;
  secondImageElement.setAttribute('src', arrOfObject[secondImageIndex].source);
  arrOfObject[secondImageIndex].timesOfShow++;
  thirdImageElement.setAttribute('src', arrOfObject[thirdImageIndex].source);
  arrOfObject[thirdImageIndex].timesOfShow++;


  // console.log(firstImageIndex,secondImageIndex, thirdImageIndex );


}

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

  }

  else {

    for(let j = 0 ; j <arrOfObject.length; j++){
      arrOfClicks.push(arrOfObject[j].click);
      arrOfShows.push(arrOfObject[j].timesOfShow);

    }
    // resultButton();

  }
  // console.log(arr.includes);
}


container.addEventListener('click',clicking);


function resultButton(event){
  // console.log(arrOfObject);


  for(let i = 0 ; i < arrOfObject.length; i++){
    li = document.createElement('li');
    unorderdList.appendChild(li);

    li.textContent = `${arrOfObject[i].name} it has ${arrOfObject[i].click} Votes and ${arrOfObject[i].timesOfShow}  shows`;
  }
  chartRender();

}

button.addEventListener('click',resultButton);


function chartRender(){
  var ctx = document.getElementById('myChart').getContext('2d');
  var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
      labels: arrNames,
      datasets: [{
        label: 'Images votes',
        backgroundColor: '#e36bae',
        borderColor: 'rgb(255, 99, 132)',
        data: arrOfClicks,
      },{
        label: 'times of shows',
        backgroundColor: '#f1d1d0',
        borderColor:'rgb(155,100,30)',
        data:arrOfShows,

      }]
    },

    // Configuration options go here
    options: {}
  });


}

