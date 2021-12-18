var boxCount = 6;
var numBox = document.querySelectorAll('.box');
var colors = generateRandomcolor(6);
var pickedColor = colors[Math.floor(Math.random() *6)];
console.log(pickedColor);
document.getElementById("rgbSpan").innerHTML = pickedColor;
if(boxCount === 6)
{
    hardbtn.style.textTransform = "uppercase";
    hardbtn.style.fontSize = "30px";
    easybtn.style.fontSize = "inherit";
    easybtn.style.textTransform = "capitalize";
}
else if(boxCount=== 3)
{
    easybtn.style.textTransform = "uppercase";
    easybtn.style.fontSize = "30px";
    hardbtn.style.fontSize = "inherit";
    hardbtn.style.textTransform = "capitalize";
    }
function easyChange(){
    document.querySelector('h1').style.background = "#E9617D";
    document.getElementById('caption').innerHTML ="Let's Play !";
    boxCount=3;
    easybtn.style.textTransform = "uppercase";
    easybtn.style.fontSize = "30px";
    hardbtn.style.fontSize = "inherit";
    hardbtn.style.textTransform = "capitalize";
    colors = generateRandomcolor(boxCount)
    for(var i=0; i<numBox.length; i++)
    {
        if(colors[i])
        numBox[i].style.background = colors[i];
        else
        numBox[i].style.display = "none"; 
    }
    pickedColor = colors[Math.floor(Math.random()*3)];
    document.getElementById("rgbSpan").innerHTML = pickedColor;
};
function hardChange(){
    document.querySelector('h1').style.background = "#E9617D";
    document.getElementById('caption').innerHTML ="Let's Play !";
    boxCount=6;
    hardbtn.style.textTransform= "uppercase";
    hardbtn.style.fontSize = "30px";
    easybtn.style.fontSize = "inherit";
    easybtn.style.textTransform = "capitalize";
    colors = generateRandomcolor(boxCount);
    for(var i=0; i<numBox.length; i++)
    {
        if(colors[i])
        numBox[i].style.background = colors[i];
        numBox[i].style.display = "block";
    }
    pickedColor = colors[Math.floor(Math.random()*6)];
    document.getElementById("rgbSpan").innerHTML = pickedColor;

};
function newColor()
{
    document.getElementById('caption').innerHTML ="Let's Play!";
    colors = generateRandomcolor(boxCount);
    for(var i=0; i<numBox.length; i++)
    {
        if(colors[i])
        numBox[i].style.background = colors[i];
    }
    pickedColor = colors[Math.floor(Math.random() *boxCount)];
    document.getElementById("rgbSpan").innerHTML = pickedColor;

}
function generateRandomcolor(boxCount)
{
    caption.style.fontSize ="inherit";
    var arr = [];
    for(var i =0; i<boxCount; i++)
    {
        arr.push(randomColor());
    }
    return arr;
}
function randomColor(){
    var r = Math.floor(Math.random()* 256);
    var g = Math.floor(Math.random()* 256);
    var b = Math.floor(Math.random()* 256);
    return'rgb('+ r +', '+ g+', '+ b+')';
}
for(var i =0; i<colors.length; i++)
{
    
    numBox[i].style.background= colors[i];
    numBox[i].addEventListener('click', function(){
        var selectedColor = this.style.background;
        console.log(selectedColor);
        console.log(pickedColor);
        if(selectedColor == pickedColor)
        {
            win();
        }
        else{
              loose(this);
        }
    });
}
function win()
{
document.getElementById('caption').innerHTML ="You won!!";
   caption.style.fontSize ="30px";
    for(var i=0; i<colors.length; i++)
    {
        numBox[i].style.background = pickedColor;
    }
}
function loose(a)
{
    a.style.background = 'aquamarine';
    document.getElementById('caption').innerHTML ="Try again";
}