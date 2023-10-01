var a=[];
var b=[];
var c=[];
var final;
var final1;
var ans;
var full;
var empt;
var empty="";
var l;
var k; 
var e;
var d;
var z;
let rex=5-5;
var real=document.getElementById('give');

let result=document.getElementById('hello')
result.innerHTML=0;
let counter="a";




for(let i=1;i<=20;i++){
    a[i]=document.getElementById(`red${i}`);
    

    b[i]= a[i].value;
    
    

};

for(let i=1;i<=20;i++){
    function show(){
       
        
      
      
     if (result.innerHTML !=="0") {
       console.log('hellow');

     }
   
    else {
        console.log('pro');
    final =  real.textContent +=b[i];
   k=real.textContent;
    console.log(k);
       

    }
}
function sum(){
    a[14].setsetAttribute('value','*');
}
    function replace(){
empt=real.textContent.replace(b[i],"");
real.innerHTML=empt;
    }
    function tbh(){
       real.textContent="";
        
    }
    function resul(){
        
     
      
        
       
   
        
   
  l=result.textContent =eval(k);
  console.log(l);
counter="hello";

    }
    
    
    function clear(){
        real.innerHTML="";
        result.innerHTML="0";
        
    }
    function ture(){
        
        if(a[i].style.backgroundColor=="seagreen"){
            a[i].style.backgroundColor="rgb(155, 89, 182)";
        }
       else if(a[i].style.backgroundColor=="brown"){
            a[i].style.backgroundColor="rgb(155, 89, 182)";
        }
       else if(a[i].style.backgroundColor=="red"){
            a[i].style.backgroundColor="rgb(155, 89, 182)";
        }
       else if(a[i].style.backgroundColor=="yellow"){
            a[i].style.backgroundColor="rgb(155, 89, 182)";
        }
        else{
        a[i].style.background=" linear-gradient(to top, #3498db, #2c3e50)";
    }
    }
     
        function fuse(){

        
         {a[i].style.background="#2980b9"}
        a[4].addEventListener('mouseout',function(){
            a[4].style.backgroundColor="seagreen";
        })
        a[5].addEventListener('mouseout',function(){
            a[5].style.backgroundColor="red";
        })
        a[19].addEventListener('mouseout',function(){
            a[19].style.backgroundColor="yellow";
        })
        a[20].addEventListener('mouseout',function(){
            a[20].style.backgroundColor="brown";
        })
    }
    
a[i].addEventListener('click',show);
a[i].addEventListener('mouseover',ture);
a[i].addEventListener('mouseout',fuse);
a[20].addEventListener('click',resul);

a[5].addEventListener('click',clear);
a[4].addEventListener('click',replace);
a[14].addEventListener('click',sum);
a[18].addEventListener('click',tbh);
}

