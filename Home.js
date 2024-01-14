
        window.addEventListener("load",slide); //call fun slide when the page is load 
        function delay(ms){  // delay function
            return new Promise(resolve =>{
                setTimeout(()=>{resolve('')},ms);
            }
        )}
        async function slide(){   //synchronous fun imports the root element that contains img to make an array and create a loop in the array with await for each thread//    
            let i ;
            var r = document.querySelector(':root');
            var root =window.getComputedStyle(r);
            var a = root.getPropertyValue('--img');
            var b = root.getPropertyValue('--img1');
            var c = root.getPropertyValue('--img2');
            var d = root.getPropertyValue('--img3');
            var e = root.getPropertyValue('--img4');
            let image=[a,b,c,d,e];
            for ( i = -1; i < image.length;  ){
             console.log(image[i]);
             s=image[i];
             if (i==3 || i==4 ){    // when the become in dark image change the color of head area
                document.getElementById('head').style.color="white";
                let q=document.getElementsByTagName('a');
                for (x=0 ;x <q.length ; x++){
                   q[x].style.color="white";
                }
             }else{
                document.getElementById('head').style.color="black";
                let q=document.getElementsByTagName('a');
                for (x=0 ;x <q.length ; x++){
                   q[x].style.color="black";
                }
             }
             document.getElementById("container").style.opacity="1";
             document.getElementById("container").style.transitionDuration = "2s";
             document.getElementById("container").style.backgroundImage=s;
             if(i==4){
                i=-1
             }
              i++;
              await delay(3000);
             } 
        }

        // when clicking the button first toggle from button to change to give it new css style and the class name from hyf-container to bottomcontent based on the name change the purpose of element
        function myFunction(x){
        x.classList.toggle("change"); 
        var element =document.getElementById('hyf-container');
        element.classList.toggle('buttoncontent');
       if (element.classList.contains("buttoncontent")){

           document.getElementById('link').outerHTML='<p id="link" style="cursor: pointer">Man</p>';
           document.getElementById('link1').outerHTML='<p id="link1" style="cursor: pointer">Woman</p>';
           document.getElementById('link2').outerHTML='<p id="link2" style="cursor: pointer">Kids</p>';
  
        }else if(element.classList.contains("hyf-container")){

            document.getElementById('link').outerHTML='<a id="link" href="Man.html">Man</a>';
            document.getElementById('link1').outerHTML='<a id="link1" href="Man.html">Woman</a>';
            document.getElementById('link2').outerHTML='<a id="link2" href="Man.html">Kids</a>';
        }
        }
        // add event click on class to execute diffrent fun for each one
        let c=document.getElementsByClassName('womanmenu');
        c[0].addEventListener("click",functionmenuWOMAN);
        let a=document.getElementsByClassName('manmenu');
        a[0].addEventListener("click",functionmenuMAN);                            
        let d=document.getElementsByClassName('kidsmenu');
        d[0].addEventListener("click",functionmenukids);
        // execute fun based on class
        function functionmenuWOMAN(){
        var z= document.getElementById('hyf-container');
        if (z.classList.contains('buttoncontent')){       
        document.getElementById('cell').innerHTML = '';
        document.getElementById('cell1').innerHTML = '';
        document.getElementById('cell2').innerHTML = '';
        document.getElementById('cell3').innerHTML = '';
        document.getElementById('cell4').innerHTML = '';
        document.getElementById('cell5').innerHTML = '';
        document.getElementById('cell').innerHTML += '<a href="Man.html#JACKET">JACKET</a>';
        document.getElementById('cell1').innerHTML += '<a href="Man.html#COAT">COAT</a>';
        document.getElementById('cell2').innerHTML += '<a href="Man.html#COAT">BOOTS</a>';
        document.getElementById('cell3').innerHTML += '<a href="Man.html#COAT">POLO SHIRT</a>';
        document.getElementById('cell4').innerHTML += '<a href="Man.html#COAT">JEANS </a>';
        document.getElementById('cell5').innerHTML += '<a href="Man.html#COAT">SHOES</a>';
        }else{
            return
        } 
    }
    function functionmenuMAN(){
        var z= document.getElementById('hyf-container');
        if (z.classList.contains('buttoncontent')){
        document.getElementById('cell').innerHTML = '';
        document.getElementById('cell1').innerHTML = '';
        document.getElementById('cell2').innerHTML = '';
        document.getElementById('cell3').innerHTML = '';
        document.getElementById('cell4').innerHTML = '';
        document.getElementById('cell5').innerHTML = '';
        document.getElementById('cell').innerHTML += '<a href="Man.html#JACKET">JACKET</a>';
        document.getElementById('cell1').innerHTML += '<a href="Man.html#COAT">COAT</a>';
        document.getElementById('cell2').innerHTML += '<a href="Man.html#COAT">SHIRTS</a>';
        document.getElementById('cell3').innerHTML += '<a href="Man.html#COAT">SUITS</a>';
        document.getElementById('cell4').innerHTML += '<a href="Man.html#COAT">PERFUME </a>';
        document.getElementById('cell5').innerHTML += '<a href="Man.html#COAT">SHOES</a>';
        }else{
            return
        }
    }
    function functionmenukids(){
        var z= document.getElementById('hyf-container');
        if (z.classList.contains('buttoncontent')){
        document.getElementById('cell').innerHTML = '';
        document.getElementById('cell1').innerHTML = '';
        document.getElementById('cell2').innerHTML = '';
        document.getElementById('cell3').innerHTML = '';
        document.getElementById('cell4').innerHTML = '';
        document.getElementById('cell5').innerHTML = '';
        document.getElementById('cell').innerHTML += '<a href="Man.html#JACKET">JJACKET</a>';
        document.getElementById('cell1').innerHTML += '<a href="Man.html#COAT">COAT</a>';
        document.getElementById('cell2').innerHTML += '<a href="Man.html#COAT">SHIRTS</a>';
        document.getElementById('cell3').innerHTML += '<a href="Man.html#COAT">POLO SHIRT</a>';
        document.getElementById('cell4').innerHTML += '<a href="Man.html#COAT">PERFUME </a>';
        document.getElementById('cell5').innerHTML += '<a href="Man.html#COAT">SHOES</a>';
        }else{
            return
        }
    }
  