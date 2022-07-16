const cityName=document.getElementById('cityName');
const city_name=document.getElementById('city_name');
const submitBtn=document.getElementById('submitBtn');
const temp=document.getElementById('temp');
const temp_status=document.getElementById('temp_status');
const body=document.getElementsByTagName("body");
 

const getInfo= async (event)=>{
     event.preventDefault();
    let cityVal=cityName.value;
  if(cityVal===""){
     city_name.innerText="Plz! write name Before search";
     temp_status.innerHTML=`<i class="fas fa-frown-open" style="color: rgb(245, 35, 35) ;"></i>`;

  }else{
      try{ 
           let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=7c9ac1fa76c1c43255a746d04b8a4e72`;
      
          const response= await fetch(url);
          const data=await response.json();
          console.log(data);
          let arrData=[data];
          city_name.innerText=`${arrData[0].name},${arrData[0].sys.country}`;
          temp.innerHTML=`<p class="col-7" id="temp"><span>${arrData[0].main.temp}</span><sup>o</sup>C</p>`;
      
          const tempMood=arrData[0].weather[0].main;
          console.log(arrData[0].main.temp)
          if(tempMood=="Clear"){
               temp_status.innerHTML=`<i class="far fa-sun"></i>`;
               document.body.style.backgroundImage = "url('images/sun1.jpg')";
               // document.body.style.backgroundImage = "url('images/csk.jpg')";
          }
          else if(tempMood=="Clouds"){
               document.body.style.backgroundImage = "url('images/oclouds.jpg')";
               temp_status.innerHTML="<i class='fas fa-cloud' style='color:#f1f2f6;'></i>";

          } else if(tempMood=="Rain"){
               temp_status.innerHTML="<i class='fas fa-cloud-rain' style='color:#a4b0be;'></i>";
               document.body.style.backgroundImage = "url('images/rain1.jpg')";
          }
          else if(tempMood=="clear"){
               temp_status.innerHTML="<i class='fas fa-cloud-rain' style='color:#a4b0be;'></i>";
          }
          else if(tempMood=="Haze"){
               temp_status.innerHTML="<i class='fas fa-cloud-rain' style='color:#a4b0be;'></i>";
               document.body.style.backgroundImage = "url('images/Haze.jpg')";
          }
          else {
               temp_status.innerHTML="<i class='fas fa-cloud-rain' style='color:#f1f2f6;'></i>";
          }

      }catch{
          city_name.innerText="Plz! Write City Name Properly";
          temp_status.innerHTML=`<i class="fas fa-frown-open" style="color: rgb(245, 35, 35) ;"></i>`;

      }
  
  }
}

submitBtn.addEventListener("click" , getInfo);
