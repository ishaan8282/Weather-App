 
  function getdata() {
    let city = document.getElementById("city").value;
  
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5881c4a70f1f474bc5289105d70aa1b5`;
  
    fetch(url)
      .then(function (res) {
        return res.json();
      })
      .then(function (res) {
        append(res);
        console.log(res);
      })
      .catch(function (err) {
        console.log(err);
      });
  }
  

  function append(data){
    let container=document.getElementById("container");
    let map = document.getElementById("gmap_canvas");
    container.innerHTML = null;

    let city=document.createElement("p");
    city.innerText=`City:${data.name}`;

    let min =document.createElement("p");
    min.innerText=`Min temp: ${data.main.temp_min}`;

    let max=document.createElement("p");
    max.innerText=`Max: ${data.main.temp_max}`;


   let wind=document.createElement("p");
    wind.innerText=`Wind:${data.wind.speed}`;

    let clouds=document.createElement("p");
    clouds.innerText=`clouds:${data.clouds.all}`;


    let sunrise=document.createElement("p");
    sunrise.innerText=`sunrise:${data.sys.sunrise}`;

    let sunset=document.createElement("p");
    sunset.innerText=`sunset:${data.sys.sunset}`;



    container.append(city,min,max,wind,clouds,sunrise,sunset)
  
   
    map.src = `https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`;


    
  }
  

















// function getdata(){

//   let city =document.getElementById("city").value

//   const url="www.google.com"

//    fetch(url)
// .then(function(res){
//   return res.json();
// })
// .then(function(res){
//   console.log(res)
// });
// .catch(function(err){
//   console.log(err)
// })

// }

// function append(data){
//   let container=document.getElementById("container");

//   let city=document.createElement("p");
//   city.innerText=`City: ${data.name}`

//   let min=document.createElement("p");
//   min.innerText=` Min temp: ${data.main.temp_min}`

//   let max=document.createElement("p");
//   max.innerText=`Max temp: ${data.main.temp}`



//   let current=document.createElement("p");
//   current.innerText=`current temp: ${data.main.temp}`

//   let humitity=document.createElement("p");
//   humitity.innerText=`humidity: ${data.main.humitity}`;


//   container.append(city,min,max,current,humitity);
// }






// //  let container1 = document.getElementById("container");

// //  let container = [];
 
// //  fetch("https://reqres.in/api/users")
// //    .then(function (res) {
// //      return res.json();
// //    })
// //    .then(function (res) {
// //      container = res.container1;
 
// //        appendProducts(container)
// //    });
 
// //  function appendProducts(container) {
// //    container.forEach(function (el) {
// //      let div = document.createElement("div");
 
// //      let avatar = document.createElement("img");
 
// //      avatar.src = el.avatar;
 
// //      let name = document.createElement("p");
 
// //      name.innerText = `${el.first_name} ${el.last_name}`
 
// //      let email = document.createElement("p");
 
// //      email.innerText = el.email;
 
// //        div.append(avatar,name, email)
 
// //        container.appendChild(div);
 
// //    });
// //  }
 
 