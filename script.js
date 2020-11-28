function namesubmit()
{
    var name=document.getElementById("name").value;
    localStorage.setItem("username",name);
    console.log(name);
}

function getName()
{
    document.getElementById("names").innerHTML=localStorage.getItem("username");
}
var firstDivContent;
var secondDivContent
function copyPara(i) {
    if(i<=11){
    firstDivContent = document.getElementById("dv"+i);
    secondDivContent = document.getElementById('div2');
    secondDivContent.innerHTML = firstDivContent.innerHTML;
    document.getElementById("btn1").style.display="block";
    document.getElementById("ans").style.display="none";
    document.getElementById("qu").style.display='block';
    firstDivContent.style.display='none';
    }
    else{
        
       document.getElementById("thankk").style.display="block";
       document.getElementById("try").style.display="block";
       document.getElementById("hid").style.display="none";

    }
}


var arr=['It is certain','It is decidedly so','Reply hazy try again','Cannot predict now','Do not count on it','My sources say no'
,'Very doubtful','Signs point to yes','Yes – definitely','My reply is no','Most likely','As I see it, yes',
,'Ask again later'];

function getAns()
{
    document.getElementById('ans').innerHTML=arr[Math.floor(Math.random() * arr.length)];
    document.getElementById("btn1").style.display="none";
    document.getElementById("ans").style.display="block";
}

function quit(){
    localStorage.clear();
    window.location.href = "futureprediction/index.html";
}
