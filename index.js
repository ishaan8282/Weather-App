

//console.log(url)



function getData()
{
    let city = document.getElementById("city").value
  
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=95b17486bddd4c9b8b58789ef5bec6bf`;


    fetch(url)
       .then(function(res){
         return res.json();
      })
      .then(function(res){
       append(res)
        console.log(res)
    })
    .catch(function(err){
        console.log(err)
    });
}

function append(data)
{
    let container = document.getElementById("container")
    let map = document.getElementById("gmap_canvas")
    container.innerHTML = null;
    let city = document.createElement("h3")
    city.innerText = `city :  ${data.name}`;
 
    let min = document.createElement("h3");
    min.innerText = `min temp: ${data.main.temp_min}`;

    let max = document.createElement("h3");
    max.innerText = `max temp:  ${data.main.temp_max}`;

    let current = document.createElement("h3");
    current.innerText =  `current temp:  ${data.main.temp}`;

    let humidity = document.createElement("h3");
    humidity.innerText = `Humidity:  ${data.main.humidity}`

    container.append(city,min,max,current,humidity)

    map.src = `https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`


}
navigator.geolocation.getCurrentPosition(success)
function success(position) {
    let crd = position.coords;
  
    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
  }
