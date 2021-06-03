"use strict";
let searchicon=document.querySelector(".find");
let temp=document.querySelector(".tmp");
let des=document.querySelector(".des");
let pre=document.querySelector(".pre");
let visi=document.querySelector(".visi");
let back=document.querySelector(".back");
let humid=document.querySelector(".hum");
var anim=document.querySelectorAll(".anim");


// temp.textContent=23;
// // console.log(t);
// des.textContent="cloudy";
// humid.textContent=76+"%";
// pre.textContent=1000+"mb";
// visi.textContent=100000+"m";    



searchicon.addEventListener('click', function(){
    var url=('https://api.openweathermap.org/data/2.5/weather?q='+document.querySelector(".city").value+'&appid=54d31c044dc4458558e7ac8fefb76646');
    document.querySelector(".city").value="";
    fetch(url)
    .then(response => response.json())
    .then(data => {
    document.querySelector(".search").style.display='none';    
    document.querySelector(".result").style.display='flex';    
      var tempValue = data['main']['temp'];
      var pressureValue = data['main']['pressure'];
      var humidityValue = data['main']['humidity'];
      var visibilityValue = data['visibility']
      var descValue = data['weather'][0]['description'];
      var t=(parseInt(tempValue)-273)*1;
      temp.textContent=t;
      des.textContent=descValue;
      humid.textContent=humidityValue+"%";
      pre.textContent=pressureValue+"mb";
      visi.textContent=visibilityValue+"m";    

      for (let i = 0; i < anim.length; i++) {
          anim[i].classList.add("animate");
          
      }
})
.catch(err => alert(err));
});


back.addEventListener('click', function(){
    document.querySelector(".search").style.display='flex';    
    document.querySelector(".result").style.display='none';   
    for (let i = 0; i < anim.length; i++) {
    anim[i].classList.remove(".animate");
} 

}); 

// console.log(humid.style.position);
