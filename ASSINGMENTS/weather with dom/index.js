function  weatherapp (){
alert("Hi Sir")
 let Cityname = document.getElementById("tmp1").value;
alert("Main Ahmad basit")

// Make a request for a user with a given ID
axios.get(`https://api.weatherapi.com/v1/current.json?key=9c172eb5cca44eef813130109241910&q=${Cityname}{}=yes`)
  .then(function (response) {
    // handle success
    console.log(response);
let weatherdata=response.data;
console.log(weatherdata)
console.log(weatherdata.current.temp_c )
console.log(weatherdata.current.temp_f)
console.log(weatherdata.location.name)
document.getElementById("change").innerHTML=(`Your today tamp in celsus is ${weatherdata.current.temp_c}`)

  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })



}