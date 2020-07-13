var number=6;
var colors=generateRandomColors(number);

var squares=document.querySelectorAll(".squares");
var colorDisplay=document.querySelector("#colorDisplay");
var h1=document.querySelector("h1");
var message=document.querySelector("#message");
var resetButton=document.querySelector("#reset");
var easyBtn=document.querySelector("#easyBtn");
var hardBtn=document.querySelector("#hardBtn");

resetButton.addEventListener("click" , function(){
  colors=generateRandomColors(number);
  pickedColor=pickColor();
  colorDisplay.textContent = pickedColor;
  for(var i=0; i<squares.length ; i++)
    {
	squares[i].style.background=colors[i];
    }
    resetButton.textContent="New Colors";
    message.textContent="";
    h1.style.background="blue";
});

easyBtn.addEventListener("click" ,function(){
	number=3;
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	colors=generateRandomColors(number);
	pickedColor=pickColor();
	colorDisplay.textContent = pickedColor;
    for(var i=0; i<squares.length ; i++){
     if(colors[i]){
	squares[i].style.background=colors[i];
      }
      else{
      	squares[i].style.display="none";
      }
    }

});

hardBtn.addEventListener("click" ,function(){
	number=6;
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	colors=generateRandomColors(number);
	pickedColor=pickColor();
	colorDisplay.textContent = pickedColor;
    for(var i=0; i<squares.length ; i++){
    squares[i].style.background=colors[i];
    squares[i].style.display="block";
    }

});

var pickedColor=pickColor();

colorDisplay.textContent = pickedColor;
for(var i=0; i<squares.length ; i++)
{
	squares[i].style.background=colors[i];
	
	squares[i].addEventListener("click" , function(){
		var clickedColor = this.style.background; 
		if(clickedColor === pickedColor){
		   for(var j=0; j<squares.length ; j++){
		   	squares[j].style.background=pickedColor;
		   }
		   h1.style.background=pickedColor;
		   message.textContent="Correct!!";
		   resetButton.textContent="Play Again?";
			
		}
		else{
			this.style.background="black";
			message.textContent="Try Again!";
			
		}
	});
} 

function pickColor(){
	var random=(Math.floor(Math.random() * colors.length));
	return colors[random];
}  

function generateRandomColors(num){
	var arr=[];
	for(var i=0; i<num; i++){
		arr.push(randomColor());
	}
	return arr;
}  

function randomColor(){
	var r=Math.floor(Math.random() *256);
	var g=Math.floor(Math.random() *256);
	var b=Math.floor(Math.random() *256);

	return "rgb(" +r +", " +g +", " +b + ")" ;
}        

