let randomNumber1= Math.floor(Math.random() * (6 - 1 + 1)) + 1;

let randomImages="images/dice"+randomNumber1+".png";

let image1=document.querySelectorAll('img')[0];

let image2=document.querySelectorAll('img')[1];

image1.setAttribute('src', randomImages)
let randomNumber2= Math.floor(Math.random() * (6 - 1 + 1)) + 1;

let randomImages2='images/dice'+randomNumber2+'.png';

image2.setAttribute('src',randomImages2)

if(randomNumber1>randomNumber2){
  document.querySelector('h1').innerText='player 1 Won'
}

else if(randomNumber1<randomNumber2){
  document.querySelector('h1').innerText='player 2 Won'
}
else if(randomNumber1==randomNumber2){
  document.querySelector('h1').innerText='Draw'
}
else{
  document.querySelector('h1').innerText='Error Has occured'

}
