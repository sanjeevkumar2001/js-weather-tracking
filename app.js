// JS project
let name1 = document.querySelector("input")


let button = document.querySelector(".button")
let div= document.querySelector(".dropdown-content")
// let div2 = document.querySelector(".container")
let div0 = document.querySelector("container0")
let button1 = document.querySelector(".clear");
var div1 = document.querySelector(".container1");
var div2 = document.querySelector(".container2");
var div3 = document.querySelector(".container3");
var div4 = document.querySelector(".container4");
var div5 = document.querySelector(".container5");
var div6 = document.querySelector(".container6");
var div7 = document.querySelector(".container7");

 alert("If you search for 2nd time with different city, pls enter clear button and then search button");

button.addEventListener("click",function(){
    alert("pls enter clear button before entering search button or else you will not get data, when  u are searching for 2or more times");
    if(name1.value == ''){
        alert("PLEASE ENTER THE LOCATION");
        return
       
    }
    
    let p = document.createElement("button");

     p.innerHTML = name1.value;
     div.appendChild(p)
     localStorage.setItem("city",name1.value);
     
     
     console.log(name1.value)
   
  
    async function Step1(){
       
        try{
            let data = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${name1.value}?unitGroup=metric&key=Y5XGUNGLKRLGY4RP3H77GCETH&contentType=json`);
            let resp = await  data.json();
            console.log(resp);
        
                var p1 = document.createElement("p");
                var p30 = document.createElement("p");
                var p2 = document.createElement("p");
                var p3 = document.createElement("p");
                var p4 = document.createElement("p");
                
                
                p1.innerHTML =` ${name1.value} (${resp.days[0].datetime})`;
                p2.innerHTML = `Temp: ${resp.days[0].temp}°C `;
                if (resp.days[0].icon == 'rain'){
                    p30.innerHTML =` <i class="fa-solid fa-cloud-showers-heavy"></i>${resp.days[0].icon}`;
                }
                 else if (resp.days[0].icon == 'clear-day'){
                     p30.innerHTML =`<i class="fa-solid fa-sun"></i>${resp.days[0].icon}`;
                 }
                 else{
                     p30.innerHTML =`<i class="fa-solid fa-cloud-moon"></i>${resp.days[0].icon}`;
                 }
                 
        
                p3.innerHTML = `Humidity: ${resp.days[0].humidity}%`;
                p4.innerHTML = `WindSpeed: ${resp.days[0].windspeed}m/s`;

                // div1.append(p30);
                
                    div1.appendChild(p1);
                
                // div1.appendChild(p1);
                div1.appendChild(p2);
                div1.appendChild(p30);
                div1.appendChild(p3);
                div1.appendChild(p4);
                
                var p5 = document.createElement("p");
                var p31 = document.createElement("p");
                var p6 = document.createElement("p");
                var p7 = document.createElement("p");
                var p8= document.createElement("p");
                p5.innerHTML = `(${resp.days[1].datetime})`
                p6.innerHTML = `Temp: ${resp.days[1].temp}°C `;
                if (resp.days[1].icon == 'rain'){
                    p31.innerHTML =` <i class="fa-solid fa-cloud-showers-heavy"></i>${resp.days[1].icon}`;
                }
                 else if (resp.days[1].icon == 'clear-day'){
                     p31.innerHTML =`<i class="fa-solid fa-sun"></i>${resp.days[1].icon}`;
                 }
                 else{
                     p31.innerHTML =`<i class="fa-solid fa-cloud-moon"></i>${resp.days[1].icon}`;
                 }
                p7.innerHTML = `Humidity: ${resp.days[1].humidity}%`;
                p8.innerHTML = `WindSpeed: ${resp.days[1].windspeed}m/s`;
                div2.appendChild(p5);
                div2.appendChild(p6);
                div2.appendChild(p31);
                div2.appendChild(p7);
                div2.appendChild(p8);
                
                        
                var p32 = document.createElement("p");
                var p9 = document.createElement("p");
                var p10 = document.createElement("p");
                var p11 = document.createElement("p");
                var p12 = document.createElement("p");
                p9.innerHTML = `(${resp.days[2].datetime})`
                p10.innerHTML = `Temp: ${resp.days[2].temp}°C `;
                if (resp.days[2].icon == 'rain'){
                    p32.innerHTML =` <i class="fa-solid fa-cloud-showers-heavy"></i>${resp.days[2].icon}`;
                }
                 else if (resp.days[2].icon == 'clear-day'){
                     p32.innerHTML =`<i class="fa-solid fa-sun"></i>${resp.days[2].icon}`;
                 }
                 else{
                     p32.innerHTML =`<i class="fa-solid fa-cloud-moon"></i>${resp.days[2].icon}`;
                 }
                p11.innerHTML = `Humidity: ${resp.days[2].humidity}%`;
                p12.innerHTML = `WindSpeed: ${resp.days[2].windspeed}m/s`;
                div3.appendChild(p9);
                div3.appendChild(p10);
                div3.appendChild(p32);
                div3.appendChild(p11);
                div3.appendChild(p12);

                     
                var p33 = document.createElement("p");
                var p13 = document.createElement("p");
                var p14 = document.createElement("p");
                var p15 = document.createElement("p");
                var p16 = document.createElement("p");
                p13.innerHTML = `(${resp.days[3].datetime})`
                p14.innerHTML =   `Temp: ${resp.days[3].temp}°C `;
                
                if (resp.days[3].icon == 'rain'){
                    p33.innerHTML =` <i class="fa-solid fa-cloud-showers-heavy"></i>${resp.days[3].icon}`;
                }
                 else if (resp.days[3].icon == 'clear-day'){
                     p33.innerHTML =`<i class="fa-solid fa-sun"></i>${resp.days[3].icon}`;
                 }
                 else{
                     p33.innerHTML =`<i class="fa-solid fa-cloud-moon"></i>${resp.days[3].icon}`;
                 }
                p15.innerHTML = `Humidity: ${resp.days[3].humidity}%`;
                p16.innerHTML = `WindSpeed: ${resp.days[3].windspeed}m/s`;
                div4.appendChild(p13);
                div4.appendChild(p14);
                div4.appendChild(p33);
                div4.appendChild(p15);
                div4.appendChild(p16);

                var p34 = document.createElement("p");
                var p17 = document.createElement("p");
                var p18 = document.createElement("p");
                var p19 = document.createElement("p");
                var p20 = document.createElement("p");
                p17.innerHTML = `(${resp.days[4].datetime})`
                p18.innerHTML = `Temp: ${resp.days[4].temp}°C `;
                if (resp.days[4].icon == 'rain'){
                    p34.innerHTML =` <i class="fa-solid fa-cloud-showers-heavy"></i>${resp.days[4].icon}`;
                }
                 else if (resp.days[4].icon == 'clear-day'){
                     p34.innerHTML =`<i class="fa-solid fa-sun"></i>${resp.days[4].icon}`;
                 }
                 else{
                     p34.innerHTML =`<i class="fa-solid fa-cloud-moon"></i>${resp.days[4].icon}`;
                 }
                p19.innerHTML = `Humidity: ${resp.days[4].humidity}%`;
                p20.innerHTML = `WindSpeed: ${resp.days[4].windspeed}m/s`;
                div5.appendChild(p17);
                div5.appendChild(p18);
                div5.appendChild(p34);
                div5.appendChild(p19);
                div5.appendChild(p20);


                var p35 = document.createElement("p");
                var p21 = document.createElement("p");
                var p22 = document.createElement("p");
                var p23 = document.createElement("p");
                var p24 = document.createElement("p");
                p21.innerHTML =`(${resp.days[5].datetime})`;
                p22.innerHTML = `Temp: ${resp.days[5].temp}°C `;
                if (resp.days[5].icon == 'rain'){
                    p35.innerHTML =` <i class="fa-solid fa-cloud-showers-heavy"></i>${resp.days[5].icon}`;
                }
                 else if (resp.days[5].icon == 'clear-day'){
                     p35.innerHTML =`<i class="fa-solid fa-sun"></i>${resp.days[5].icon}`;
                 }
                 else{
                     p35.innerHTML =`<i class="fa-solid fa-cloud-moon"></i>${resp.days[5].icon}`;
                 }
                p23.innerHTML =`Humidity: ${resp.days[5].humidity}%`;
                p24.innerHTML = `WindSpeed: ${resp.days[5].windspeed}m/s`;
                div6.appendChild(p21);
                div6.appendChild(p22);
                div6.appendChild(p35);
                div6.appendChild(p23);
                div6.appendChild(p24);
                var a1 = document.createElement("p");
                a1.innerHTML = `No Error !!! <i class="fa-solid fa-face-smile"></i> <i class="fa-solid fa-face-smile"></i>("Data is Availabale")`;
                div7.appendChild(a1);


             
               
        button1.addEventListener("click",remove)
        function remove(){
            p1.remove();
            p2.remove();
            p3.remove(); 
            p4.remove();
            p30.remove();
            p6.remove();
            p7.remove();
            p8.remove();
            p9.remove();
            p10.remove();
            p5.remove();
            p11.remove();
            p12.remove();
            p13.remove();
            p14.remove();
            p15.remove();
            p16.remove();
            p17.remove();
            p18.remove();
            p19.remove();
            p20.remove();
            p21.remove();
            p22.remove();
            p23.remove();
            p24.remove();
            p31.remove();
            p32.remove();
            p33.remove();
            p34.remove();
            p35.remove();
            a1.remove();
            
        }  
             
              
                
              

            
               
            }
              
            
        
        catch(err){
            
            alert("Please Enter Valid Location or Switch on the Internet");
              
               console.log(err);
                 var a1 = document.createElement("p");
                 var a2 = document.createElement("p");
                 a1.innerHTML ="Operation Timed Out or Pls switch on the Internet"
                 a2.innerHTML = err;
                 div7.appendChild(a1);
                div7.appendChild(a2);

              
                button1.addEventListener("click",function(){
                    a1.remove();
                    a2.remove();
                 })
            
        }
                
        
       
    
       
     p.addEventListener("click",function(){
            //  remove();
            alert("pls enter clear button,before clicking this button to disappear any data available");
            async function Step3(){
                try{
                    let data = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${p.innerText}?unitGroup=metric&key=Y5XGUNGLKRLGY4RP3H77GCETH&contentType=json`);
                    let resp = await  data.json();
                    console.log(resp);
                    
                    var c1 = document.createElement("p");
                    var c2 = document.createElement("p");
                    var c3 = document.createElement("p");
                    var c4 = document.createElement("p");
                    var c5 = document.createElement("p");
                    var  c6 = document.createElement("p");
                    var c7 = document.createElement("p");
                    var c8 = document.createElement("p");
                    var c9 = document.createElement("p");
                    var c10 = document.createElement("p");
                    var c11 = document.createElement("p");
                    var c12 = document.createElement("p");
                    var c13 = document.createElement("p");
                    var c14 = document.createElement("p");
                    var c15 = document.createElement("p");
                    var c16 = document.createElement("p");
                    var c17 = document.createElement("p");
                    var c18 = document.createElement("p");
                    var c19 = document.createElement("p");
                    var c20 = document.createElement("p");
                    var c21 = document.createElement("p");
                    var c22 = document.createElement("p");
                    var c23 = document.createElement("p");
                    var c24 = document.createElement("p");
                    var c25 = document.createElement("p");
                    var c26 = document.createElement("p");
                    var c27 = document.createElement("p");
                    var c28 = document.createElement("p");
                    var c29 = document.createElement("p");
                    var c30 = document.createElement("p");
                    
                   c1.innerHTML = `${p.innerText}(${resp.days[0].datetime})`
                   c6.innerHTML =  `(${resp.days[1].datetime})`
                   c11.innerHTML = `(${resp.days[2].datetime})`
                   c16.innerHTML = `(${resp.days[3].datetime})`
                   c21.innerHTML =`(${resp.days[4].datetime})`
                   c26.innerHTML = `(${resp.days[5].datetime})`
                   c2.innerHTML =  `Temp: ${resp.days[0].temp}°C `;
                   c7.innerHTML =  `Temp: ${resp.days[1].temp}°C `;
                   c12.innerHTML =  `Temp: ${resp.days[2].temp}°C `;
                   c17.innerHTML =  `Temp: ${resp.days[3].temp}°C `;
                   c22.innerHTML =  `Temp: ${resp.days[4].temp}°C `;
                   c27.innerHTML =  `Temp: ${resp.days[5].temp}°C `;
                   if (resp.days[0].icon == 'rain'){
                    c3.innerHTML =` <i class="fa-solid fa-cloud-showers-heavy"></i>${resp.days[0].icon}`;
                }
                 else if (resp.days[0].icon == 'clear-day'){
                     c3.innerHTML =`<i class="fa-solid fa-sun"></i>${resp.days[0].icon}`;
                 }
                 else{
                     c3.innerHTML =`<i class="fa-solid fa-cloud-moon"></i>${resp.days[0].icon}`;
                 }
                    
                 if (resp.days[1].icon == 'rain'){
                    c8.innerHTML =` <i class="fa-solid fa-cloud-showers-heavy"></i>${resp.days[1].icon}`;
                }
                 else if (resp.days[1].icon == 'clear-day'){
                     c8.innerHTML =`<i class="fa-solid fa-sun"></i>${resp.days[1].icon}`;
                 }
                 else{
                     c8.innerHTML =`<i class="fa-solid fa-cloud-moon"></i>${resp.days[1].icon}`;
                 }
                 if (resp.days[2].icon == 'rain'){
                    c13.innerHTML =` <i class="fa-solid fa-cloud-showers-heavy"></i>${resp.days[2].icon}`;
                }
                 else if (resp.days[2].icon == 'clear-day'){
                     c13.innerHTML =`<i class="fa-solid fa-sun"></i>${resp.days[2].icon}`;
                 }
                 else{
                     c13.innerHTML =`<i class="fa-solid fa-cloud-moon"></i>${resp.days[2].icon}`;
                 }
                 if (resp.days[3].icon == 'rain'){
                    c18.innerHTML =` <i class="fa-solid fa-cloud-showers-heavy"></i>${resp.days[3].icon}`;
                }
                 else if (resp.days[3].icon == 'clear-day'){
                     c18.innerHTML =`<i class="fa-solid fa-sun"></i>${resp.days[3].icon}`;
                 }
                 else{
                     c18.innerHTML =`<i class="fa-solid fa-cloud-moon"></i>${resp.days[3].icon}`;
                 }
                 if (resp.days[4].icon == 'rain'){
                    c23.innerHTML =` <i class="fa-solid fa-cloud-showers-heavy"></i>${resp.days[4].icon}`;
                }
                 else if (resp.days[4].icon == 'clear-day'){
                     c23.innerHTML =`<i class="fa-solid fa-sun"></i>${resp.days[4].icon}`;
                 }
                 else{
                     c23.innerHTML =`<i class="fa-solid fa-cloud-moon"></i>${resp.days[4].icon}`;
                 }
                 if (resp.days[5].icon == 'rain'){
                    c28.innerHTML =` <i class="fa-solid fa-cloud-showers-heavy"></i>${resp.days[5].icon}`;
                }
                 else if (resp.days[5].icon == 'clear-day'){
                     c28.innerHTML =`<i class="fa-solid fa-sun"></i>${resp.days[5].icon}`;
                 }
                 else{
                     c28.innerHTML =`<i class="fa-solid fa-cloud-moon"></i>${resp.days[5].icon}`;
                 }
                c4.innerHTML = `Humidity: ${resp.days[0].humidity}%`;
                c9.innerHTML = `Humidity: ${resp.days[1].humidity}%`;
                c14.innerHTML = `Humidity: ${resp.days[2].humidity}%`;
                c19.innerHTML = `Humidity: ${resp.days[3].humidity}%`;
                c24.innerHTML = `Humidity: ${resp.days[4].humidity}%`;
                c29.innerHTML = `Humidity: ${resp.days[5].humidity}%`;

                c5.innerHTML = `WindSpeed: ${resp.days[0].windspeed}m/s`;
                c10.innerHTML = `WindSpeed: ${resp.days[1].windspeed}m/s`;
                c15.innerHTML = `WindSpeed: ${resp.days[2].windspeed}m/s`;
                c20.innerHTML = `WindSpeed: ${resp.days[3].windspeed}m/s`;
                c25.innerHTML = `WindSpeed: ${resp.days[4].windspeed}m/s`;
                c30.innerHTML =  `WindSpeed: ${resp.days[5].windspeed}m/s`;

                
                div1.append(c1);
                
                div1.append(c2);
                div1.append(c3);
                div1.append(c4);
                div1.append(c5);
                div2.append(c6);
                div2.append(c7);
                div2.append(c8);
                div2.append(c9);
                div2.append(c10);
                div3.append(c11);
                div3.append(c12);
                div3.append(c13);
                div3.append(c14);
                div3.append(c15);
                div4.append(c16);
                div4.append(c17);
                div4.append(c18);
                div4.append(c19);
                div4.append(c20);
                div5.append(c21);
                div5.append(c22);
                div5.append(c23);
                div5.append(c24);
                div5.append(c25);
                div6.append(c26);
                div6.append(c27);
                div6.append(c28);
                div6.append(c29);
                div6.append(c30);

                var a1= document.createElement("p");
                a1.innerHTML =  `No Error !!! <i class="fa-solid fa-face-smile"></i> <i class="fa-solid fa-face-smile"></i>("Data is Availabale")`;
                div7.appendChild(a1);

                button1.addEventListener("click",function(){
                    c1.remove();
                    c2.remove();
                    c3.remove();
                    c4.remove();
                    c5.remove();
                    c6.remove();
                    c7.remove();
                    c8.remove();
                    c9.remove();
                    c10.remove();
                    c11.remove();
                    c12.remove();
                    c13.remove();
                    c14.remove();
                    c15.remove();
                    c16.remove();
                    c17.remove();
                    c18.remove();
                    c19.remove();
                    c20.remove();
                    c21.remove();
                    c22.remove();
                    c23.remove();
                    c24.remove();
                    c25.remove();
                    c26.remove();
                    c27.remove();
                    c28.remove();
                    c29.remove();
                    c30.remove();
                    a1.remove();
                    
                })

               

            }
            catch(err){
                  alert("Please Enter Valid Location or Switch on the Internet");
                  
                  
                    var a1 = document.createElement("p");
                    var a2 = document.createElement("p");
                    a1.innerHTML ="Operation Timed Out or Switch on the Internet"
                    a2.innerHTML = err;
                    div7.appendChild(a1);
                    div7.appendChild(a2);
    
                  
                 
                 button1.addEventListener("click",function(){
                    a1.remove();
                    a2.remove();
                 })
            }
                
        }
      Step3(); 

})

    
    
    name1.value = '';
    
    
    
    
   
}
Step1();

})

                    
                    
              

let but = document.querySelector(".location")
but.addEventListener("click",getCoordintes)
function getCoordintes() { 
    alert("pls enter clear button to disappear the data available,before clicking this button.");
    var options = { 
        enableHighAccuracy: true, 
        timeout: 5000, 
        maximumAge: 0 
    }; 
  
    async function success(pos) { 
        var crd = pos.coords; 
        var lat = crd.latitude.toString(); 
        var lng = crd.longitude.toString(); 
        console.log(`Latitude: ${lat}, Longitude: ${lng}`);
        try{
            let data = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${lat},${lng}?unitGroup=us&key=Y5XGUNGLKRLGY4RP3H77GCETH&contentType=json`); 
            let resp = await data.json();
            console.log(resp);
            // for(let i=0; i<=4; i++){
            //     console.log(resp1.days[i].datetime);
            //     console.log(resp1.days[i].icon);
            //     console.log(((resp1.days[i].temp - 32 )* 5/9).toFixed(2));
            //     console.log(resp1.days[i].humidity,"%");
            //     console.log(resp1.days[i].windspeed,"m/s");
                
            // }

            var c1 = document.createElement("p");
            var c2 = document.createElement("p");
            var c3 = document.createElement("p");
            var c4 = document.createElement("p");
            var c5 = document.createElement("p");
            var  c6 = document.createElement("p");
            var c7 = document.createElement("p");
            var c8 = document.createElement("p");
            var c9 = document.createElement("p");
            var c10 = document.createElement("p");
            var c11 = document.createElement("p");
            var c12 = document.createElement("p");
            var c13 = document.createElement("p");
            var c14 = document.createElement("p");
            var c15 = document.createElement("p");
            var c16 = document.createElement("p");
            var c17 = document.createElement("p");
            var c18 = document.createElement("p");
            var c19 = document.createElement("p");
            var c20 = document.createElement("p");
            var c21 = document.createElement("p");
            var c22 = document.createElement("p");
            var c23 = document.createElement("p");
            var c24 = document.createElement("p");
            var c25 = document.createElement("p");
            var c26 = document.createElement("p");
            var c27 = document.createElement("p");
            var c28 = document.createElement("p");
            var c29 = document.createElement("p");
            var c30 = document.createElement("p");
            var c31 = document.createElement("p");
            
           c1.innerHTML = `Lat:${(lat)},Long:${(lng)}(${resp.days[0].datetime})`
           c6.innerHTML =  `(${resp.days[1].datetime})`
           c11.innerHTML = `(${resp.days[2].datetime})`
           c16.innerHTML = `(${resp.days[3].datetime})`
           c21.innerHTML =  `(${resp.days[4].datetime})`
           c26.innerHTML = `${resp.days[5].datetime})`
           c2.innerHTML =  `Temp: ${(((resp.days[0].temp - 32 )* 5/9).toFixed(2))}°C `;
           c7.innerHTML =  `Temp: ${(((resp.days[1].temp - 32 )* 5/9).toFixed(2))}°C `;
           c12.innerHTML = `Temp: ${(((resp.days[2].temp - 32 )* 5/9).toFixed(2))}°C `;
           c17.innerHTML = `Temp: ${(((resp.days[3].temp - 32 )* 5/9).toFixed(2))}°C `;
           c22.innerHTML =  `Temp: ${(((resp.days[4].temp - 32 )* 5/9).toFixed(2))}°C `;
           c27.innerHTML =  `Temp: ${(((resp.days[5].temp - 32 )* 5/9).toFixed(2))}°C `;
           if (resp.days[0].icon == 'rain'){
            c3.innerHTML =` <i class="fa-solid fa-cloud-showers-heavy"></i>${resp.days[0].icon}`;
        }
         else if (resp.days[0].icon == 'clear-day'){
             c3.innerHTML =`<i class="fa-solid fa-sun"></i>${resp.days[0].icon}`;
   
         }
         else{
             c3.innerHTML =`<i class="fa-solid fa-cloud-moon"></i>${resp.days[0].icon}`;
         }
            
         if (resp.days[1].icon == 'rain'){
            c8.innerHTML =` <i class="fa-solid fa-cloud-showers-heavy"></i>${resp.days[1].icon}`;
        }
         else if (resp.days[1].icon == 'clear-day'){
             c8.innerHTML =`<i class="fa-solid fa-sun"></i>${resp.days[1].icon}`;
         }
         else{
             c8.innerHTML =`<i class="fa-solid fa-cloud-moon"></i>${resp.days[1].icon}`;
         }
         if (resp.days[2].icon == 'rain'){
            c13.innerHTML =` <i class="fa-solid fa-cloud-showers-heavy"></i>${resp.days[2].icon}`;
        }
         else if (resp.days[2].icon == 'clear-day'){
             c13.innerHTML =`<i class="fa-solid fa-sun"></i>${resp.days[2].icon}`;
         }
         else{
             c13.innerHTML =`<i class="fa-solid fa-cloud-moon"></i>${resp.days[2].icon}`;
         }
         if (resp.days[3].icon == 'rain'){
            c18.innerHTML =` <i class="fa-solid fa-cloud-showers-heavy"></i>${resp.days[3].icon}`;
        }
         else if (resp.days[3].icon == 'clear-day'){
             c18.innerHTML =`<i class="fa-solid fa-sun"></i>${resp.days[3].icon}`;
         }
         else{
             c18.innerHTML =`<i class="fa-solid fa-cloud-moon"></i>${resp.days[3].icon}`;
         }
         if (resp.days[4].icon == 'rain'){
            c23.innerHTML =` <i class="fa-solid fa-cloud-showers-heavy"></i>${resp.days[4].icon}`;
        }
         else if (resp.days[4].icon == 'clear-day'){
             c23.innerHTML =`<i class="fa-solid fa-sun"></i>${resp.days[4].icon}`;
         }
         else{
             c23.innerHTML =`<i class="fa-solid fa-cloud-moon"></i>${resp.days[4].icon}`;
         }
         if (resp.days[5].icon == 'rain'){
            c28.innerHTML =` <i class="fa-solid fa-cloud-showers-heavy"></i>${resp.days[5].icon}`;
        }
         else if (resp.days[5].icon == 'clear-day'){
             c28.innerHTML =`<i class="fa-solid fa-sun"></i>${resp.days[5].icon}`;
         }
         else{
             c28.innerHTML =`<i class="fa-solid fa-cloud-moon"></i>${resp.days[5].icon}`;
         }
        c4.innerHTML = `Humidity: ${resp.days[0].humidity}%`;
        c9.innerHTML = `Humidity: ${resp.days[1].humidity}%`;
        c14.innerHTML = `Humidity: ${resp.days[2].humidity}%`;
        c19.innerHTML = `Humidity: ${resp.days[3].humidity}%`;
        c24.innerHTML = `Humidity: ${resp.days[4].humidity}%`;
        c29.innerHTML = `Humidity: ${resp.days[5].humidity}%`;

        c5.innerHTML = `WindSpeed: ${resp.days[0].windspeed}m/s`;
        c10.innerHTML = `WindSpeed: ${resp.days[1].windspeed}m/s`;
        c15.innerHTML = `WindSpeed: ${resp.days[2].windspeed}m/s`;
        c20.innerHTML = `WindSpeed: ${resp.days[3].windspeed}m/s`;
        c25.innerHTML = `WindSpeed: ${resp.days[4].windspeed}m/s`;
        c30.innerHTML =  `WindSpeed: ${resp.days[5].windspeed}m/s`;

        
        div1.append(c1);
        
        div1.append(c2);
        div1.append(c3);
        
        div1.append(c4);
        div1.append(c5);
        div2.append(c6);
        div2.append(c7);
        div2.append(c8);
        div2.append(c9);
        div2.append(c10);
        div3.append(c11);
        div3.append(c12);
        div3.append(c13);
        div3.append(c14);
        div3.append(c15);
        div4.append(c16);
        div4.append(c17);
        div4.append(c18);
        div4.append(c19);
        div4.append(c20);
        div5.append(c21);
        div5.append(c22);
        div5.append(c23);
        div5.append(c24);
        div5.append(c25);
        div6.append(c26);
        div6.append(c27);
        div6.append(c28);
        div6.append(c29);
        div6.append(c30);
        var a1= document.createElement("p");
                a1.innerHTML =  `No Error !!! <i class="fa-solid fa-face-smile"></i> <i class="fa-solid fa-face-smile"></i>("Data is Availabale")`;
                div7.appendChild(a1);
        
        button1.addEventListener("click",function(){
            c1.remove();
            c2.remove();
            c3.remove();
            c4.remove();
            c5.remove();
            c6.remove();
            c7.remove();
            c8.remove();
            c9.remove();
            c10.remove();
            c11.remove();
            c12.remove();
            c13.remove();
            c14.remove();
            c15.remove();
            c16.remove();
            c17.remove();
            c18.remove();
            c19.remove();
            c20.remove();
            c21.remove();
            c22.remove();
            c23.remove();
            c24.remove();
            c25.remove();
            c26.remove();
            c27.remove();
            c28.remove();
            c29.remove();
            c30.remove();
            a1.remove();
        })


        }
        catch(err){
            //   console.log(`ERROR(${err.code}): ${err.message}`); 
           
                var a1 = document.createElement("p");
                var a2 = document.createElement("p");
                a1.innerHTML ="Operation Timed Out or pls switch on the Internet"
                a2.innerHTML = (`ERROR(${err.code}): ${err.message}`);
                div7.appendChild(a1);
                div7.appendChild(a2);
          
        }
       return;
 
    } 
  
    function error(err) { 
        var a1 = document.createElement("p");
        var a2 = document.createElement("p");
        a1.innerHTML ="Operation Timed Out or pls switch on the Internet"
        a2.innerHTML = (`ERROR(${err.code}): ${err.message}`);
        div7.appendChild(a1);
        div7.appendChild(a2);
        console.log(`ERROR(${err.code}): ${err.message}`); 
        button1.addEventListener("click",function(){
            a1.remove();
            a2.remove();
        })
    } 
  
    navigator.geolocation.getCurrentPosition(success, error, options); 
    
} 
  


  




    
    















