//submit button of form
const submitBtn = document.getElementById('submitBtn');
//city name of form
const cityName = document.getElementById('cityName');
//get output here of form 
const city_name = document.getElementById('city_name');
//getting temp
const temp = document.getElementById('temp_real_val');
//getting temp_status
const temp_status = document.getElementById('temp_status');
//hide the temp infos when nothing is inputed
const datahide = document.querySelector('.middle_layer');

const getInfo = async(event)=>{
    event.preventDefault();
    let cityVal = cityName.value;
    if(cityVal===""){
        city_name.innerText = `Write city name before search`;
        //console.log("hello");
        datahide.classList.add('data_hide');
    }else{
        try{
            
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=4f390e443b5c5383a849aa38d017add4`;
            const response = await fetch(url);
            
            //console.log(response);
            //converting data to json file. 
            console.log("hello");
            const data = await response.json();
            //alert(cityVal);
            //converting data to array 
            const arrData = [data];
            
            console.log("hello");
            
            //look for api data to see how to get to data from api -ie how to fetch data using indexing 
            city_name.innerText = `${arrData[0].name} , ${arrData[0].sys.country}`;
            temp.innerText = arrData[0].main.temp;

            //code for icons
            const tempMood = arrData[0].weather[0].main;
            if (tempMood==="Clear"){
                temp_status.innerHTML= "<i class='fas fa-sun' style = 'color:#eccc68;'></i>";
            }else if(tempMood==="Clouds"){
                temp_status.innerHTML= "<i class='fas fa-cloud' style = 'color:#f1f2f6;'></i>";
            }else if(tempMood==="Rain"){
                temp_status.innerHTML= "<i class='fas fa-cloud-rain' style = 'color:#a4b0be;'></i>";
            }
            else{
                temp_status.innerHTML= "<i class='fas fa-sun' style = 'color:#eccc68;'></i>";
            }

            datahide.classList.remove('data_hide');

        }catch{
            city_name.innerText = `Enter proper city name`;
            datahide.classList.add('data_hide');
        }   
    }
}

submitBtn.addEventListener('click',getInfo);


